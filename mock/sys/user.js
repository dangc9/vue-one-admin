
const tokens = {
  admin: {
    token: 'admin-token'
  },
  dangc: {
    token: 'dangc-token'
  }
}

const users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'dangc-token': {
    roles: ['user'],
    introduction: 'I am dangc',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal User'
  }
}

module.exports = [
  {
    url: '/user/login',
    type: 'post',
    response: config => {
      const { account } = config.body
      const token = tokens[account]
      if (!token) {
        return {
          code: 60204,
          message: '无效的账号或密码'
        }
      }
      return {
        code: 200,
        data: token
      }
    }
  },
  {
    url: '/user/getUserInfo',
    type: 'get',
    response: config => {
      const { token } = config.headers
      const info = users[token]
      if (!info) {
        return {
          code: 508,
          message: '获取用户信息失败'
        }
      }
      return {
        code: 200,
        data: info
      }
    }
  },
  {
    url: '/user/logout',
    type: 'post',
    response: _ => {
      return {
        code: 200,
        data: 'success'
      }
    }
  }
]
