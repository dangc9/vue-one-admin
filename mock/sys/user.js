
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
    avatar: '/one-admin/static/img/dangc.webp',
    name: 'admin'
  },
  'dangc-token': {
    roles: ['user'],
    introduction: 'I am dangc',
    avatar: '/one-admin/static/img/dangc.webp',
    name: 'dangc'
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
    type: 'post',
    response: config => {
      const { token } = config.body
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
