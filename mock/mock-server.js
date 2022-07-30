const chokidar = require('chokidar')
const bodyParser = require('body-parser')
const chalk = require('chalk')
const path = require('path')
const Mock = require('mockjs')
const mocks = require('./mock')

const mockDir = path.join(process.cwd(), 'mock')

// 注册mock服务的路由
function registerRoutes(app) {
  let mockLastIndex
  const mocksForServer = mocks.map(route => {
    return responseFake(route.url, route.type, route.response)
  })
  for (const mock of mocksForServer) {
    app[mock.type](mock.url, mock.response)
    mockLastIndex = app._router.stack.length
  }
  const mockRoutesLength = Object.keys(mocksForServer).length
  return {
    mockRoutesLength: mockRoutesLength,
    mockStartIndex: mockLastIndex - mockRoutesLength
  }
}
function unregisterRoutes() {
  // 删除require缓存中含有'../mock'路径的缓存
  Object.keys(require.cache).forEach(i => {
    if (i.includes(mockDir)) {
      delete require.cache[require.resolve(i)]
    }
  })
}
// 返回一个mock接口服务
const responseFake = (url, type, respond) => {
  return {
    url: new RegExp(`${process.env.VUE_APP_DEV_BASE_API}${url}`),
    type: type || 'get',
    response(req, res) {
      console.log(`${chalk.dim(new Date().toLocaleTimeString())} ${chalk.blue('[mock-server]')} ${chalk.green('request invoke')} ${chalk.dim(req.path)}`)
      res.json(Mock.mock(respond instanceof Function ? respond(req, res) : respond))
    }
  }
}

module.exports = (middlewares,devServer) => {
  // 此app即webpack的devServer
  // 加载body-parser, 解析request.body
  const { app } = devServer
  app.use(bodyParser.json())
  app.use(bodyParser.urlencoded({
    extended: true
  }))
  const mockRoutes = registerRoutes(app)
  var mockRoutesLength = mockRoutes.mockRoutesLength
  var mockStartIndex = mockRoutes.mockStartIndex
  // 观察mock文件夹内变化，重新注册接口路由
  chokidar.watch(mockDir, {
    ignored: /mock-server/,
    ignoreInitial: true
  }).on('all', (event, path) => {
    if (event === 'change' || event === 'add') {
      try {
        app._router.stack.splice(mockStartIndex, mockRoutesLength)
        unregisterRoutes()
        const mockRoutes = registerRoutes(app)
        mockRoutesLength = mockRoutes.mockRoutesLength
        mockStartIndex = mockRoutes.mockStartIndex
        console.log(chalk.magentaBright(`\n > Mock Server hot reload success! changed  ${path}`))
      } catch (error) {
        console.log(chalk.redBright(error))
      }
    }
  })
  return middlewares;
}
