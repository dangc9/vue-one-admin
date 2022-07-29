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

  static getUserInfo(params) {
    return service.request({
      url: Api.getUserInfo,
      method: 'GET',
      params
    });
  }

  static logoutApi(params) {
    return service.request({
      url: Api.logout,
      method: 'GET',
      params
    });
  }
}

export default request
