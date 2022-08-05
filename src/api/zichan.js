
import request from '@/router/axios'


// 获取资产列表
export function getDevlist(query) {
  return request({
    url: '/zichan/devonlineinfo/getDeviceBasicByCondition',
    method: 'get',
    params: query
  })
}
// 获取资产详细信息
export function getDevDetail(query) {
  return request({
    url: '/zichan/devonlineinfo/getDeviceBasicAndParamMsg',
    method: 'get',
    params: query
  })
}