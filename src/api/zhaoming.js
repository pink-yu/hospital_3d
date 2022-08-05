
import request from '@/router/axios'


// 照明控制区域列表
export function getZhaomingList(query) {
  return request({
    url: '/zichan/lightamount/querylightAreaLoopAndPolicy',
    method: 'get',
    params: query
  })
}
// 获取单个回路信息
export function getZhaomingLoopInfo(query) {
  return request({
    url: '/zichan/lightamount/statLoopMessage',
    method: 'get',
    params: query
  })
}

// 照明区域控制
export function zhaomingLoopStateChange(params) {
  return request({
    url: '/zichan/lightamount/controlLightAreaStatus',
    method: 'post',
    params: params
  })
}

// 单回路控制 status 0 关  1 开
export function zhaomingSingleLoopChange(params) {
  return request({
    url: '/zichan/lightamount/controlLightLoopStatus',
    method: 'post',
    params: params
  })
}