import axios from 'axios'
import {Message} from 'element-ui'
import { getStore } from '../util/store'
import store from '@/store' 

window.tipLock = false;
// 创建axios实例
const service = axios.create({
  baseURL: process.env.BASE_API,
  timeout: 10000
})
// 2.请求拦截器
service.interceptors.request.use(config => {
  // 发请求前做的一些处理，数据转化，配置请求头，设置token,设置loading等，根据需求去添加
  config.data = JSON.stringify(config.data) // 数据转化,也可以使用qs转换
  config.headers = {
    'Content-Type': 'application/json' // 配置请求头
  }
  
  const TENANT_ID = getStore({ name: 'tenantId' })
  const isToken = (config.headers || {}).isToken === false
  const token = store.getters.access_token
  if (token && !isToken) {
    config.headers['Authorization'] = 'Bearer ' + token// token
  }
  if (TENANT_ID) {
    config.headers['TENANT-ID'] = TENANT_ID // 租户ID
  }
  return config
}, error => {
  Promise.reject(error)
})
// 3.响应拦截器
service.interceptors.response.use(response => {
  // 接收到响应数据并成功后的一些共有的处理，关闭loading等
  return response
}, error => {
  if (error && error.response) {
    // 1.公共错误处理
    // 2.根据响应码具体处理
    switch (error.response.status) {
      case 400:
        error.message = '错误请求'
        break
      case 401:
        error.message = '未授权，请重新登录'
        
        // window.location.href = location.origin + '/#/test'
        break
      case 403:
        error.message = '拒绝访问'
        break
      case 404:
        error.message = '请求错误,未找到该资源'
        // window.location.href = '/NotFound'
        break
      case 405:
        error.message = '请求方法未允许'
        break
      case 408:
        error.message = '请求超时'
        break
      case 500:
        error.message = '服务器端出错'
        break
      case 501:
        error.message = '网络未实现'
        break
      case 502:
        error.message = '网络错误'
        break
      case 503:
        error.message = '服务不可用'
        break
      case 504:
        error.message = '网络超时'
        break
      case 505:
        error.message = 'http版本不支持该请求'
        break
      default:
        error.message = `连接错误${error.response.status}`
    }
  } else {
    // 超时处理
    if (JSON.stringify(error).includes('timeout')) {
      Message.error('服务器响应超时，请刷新当前页')
    }
    error.message('连接服务器失败')
  }
  // if(error.response.status === 401) {
  //   if(!window.tipLock){
  //     window.tipLock = true;
  //     Message.error(error.message)
      
  //     window.setTimeout(() => {
  //       window.tipLock = false; //这句如果是第三方的alert 则写在回调中
  //     }, 2000)
  //   }
  //   window.location.href = location.origin + '/#/test'
  //   return Promise.resolve(error.response)
  // } else {

  // }
  Message.error(error.message)
  // 如果不需要错误处理，以上的处理过程都可省略
  return Promise.resolve(error.response)
})
// 4.导入文件
export default service
