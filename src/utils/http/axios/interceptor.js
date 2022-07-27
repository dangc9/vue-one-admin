import { Message } from 'element-ui'
const interceptor = function(service) {
  const whiteList = [
    // '/user/login'
  ];
  // 请求拦截报错白名单
  function errorLog(message) {
    Message.error({
      message: message,
      type: 'error',
      duration: 3000
    });
  }
  // request拦截器
  service.interceptors.request.use(
    config => {
      // 为get请求添加时间戳
      if (config.method === 'get') {
        config.params = {
          timestamp: new Date().getTime(),
          ...config.params
        }
      }
      return config;
    },
    error => {
      return Promise.error(error);
    }
  );
  // response拦截器
  service.interceptors.response.use(
    response => {
      const res = response.data
      if (res.code !== 200) {
        !whiteList.find(item => response.config.url.indexOf(item) !== -1) && errorLog(res.message || 'Error')
        return Promise.reject(new Error(res.message || 'Error'))
      }
      return res;
    },
    error => {
      return Promise.reject(error)
    }
  );
}
export default interceptor
