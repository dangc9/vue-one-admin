import axios from 'axios'
import interceptor from './interceptor.js'
// 创建一个axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_DEV_BASE_API,
  withCredentials: true,
  timeout: 5000
})
// 设置axios拦截器
interceptor(service)

export default service
