
import request from '@/router/axios'


// 电梯设备详细信息
export function getDiantiInfo(query) {
  return request({
    url: '/zichan/liftamount/getLiftDeviceMsg',
    method: 'get',
    params: query
  })
}

// 查询电梯维修信息列表
export function getDiantiRepairInfo(query) {
  return request({
    url: '/zichan/liftamount/getLiftDeviceRepairList',
    method: 'get',
    params: query
  })
}