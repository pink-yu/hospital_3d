// 导入封装好的axios实例
import request from './request'
import qs from 'qs'

const http = {
  /**
   * methods: 请求
   * @param url
   * @param params
   */
  get(url, params) {
    const config = {
      method: 'get',
      url: url
    }
    // if (params) config.params = qs.stringify(params)
    if (params) config.params = params
    return request(config)
  },
  post(url, params) {
    const config = {
      method: 'post',
      url: url
    }
    if (params) config.data = params
    return request(config)
  },
  put(url, params) {
    const config = {
      method: 'put',
      url: url
    }
    if (params) config.params = params
    return request(config)
  },
  delete(url, params) {
    const config = {
      method: 'delete',
      url: url
    }
    if (params) config.params = params
    return request(config)
  }
}
// 导出
export default http
