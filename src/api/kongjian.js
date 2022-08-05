
import request from '@/router/axios'


// 获取区域列表
export function getArealist(query) {
  return request({
    url: '/zichan/area/getAreaMsgByFloor',
    method: 'get',
    params: query
  })
}