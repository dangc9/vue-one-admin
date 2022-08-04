import service from '@/utils/http/axios';
const Api = {
  login: '/user/login',
  logout: '/user/logout',
  getUserInfo: '/user/getUserInfo'
}

class request {
  static loginApi(data) {
    return service.request({
      url: Api.login,
      method: 'POST',
      data
    });
  }

  static getUserInfo(token) {
    return service.request({
      url: Api.getUserInfo,
      method: 'POST',
      data: { token }
    });
  }

  static logoutApi(params) {
    return service.request({
      url: Api.logout,
      method: 'POST',
      params
    });
  }
}

export default request
