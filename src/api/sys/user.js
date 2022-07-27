import service from '@/utils/http/axios';
const Api = {
  Login: '/user/login',
  Logout: '/user/logout',
  GetUserInfo: '/user/getUserInfo'
}

class request {
  static loginApi(data) {
    return service.request({
      url: Api.Login,
      method: 'POST',
      data
    });
  }
}

export default request
