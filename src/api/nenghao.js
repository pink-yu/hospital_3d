/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */
import request from '@/router/axios'


// 统计水、电、气日耗能、月耗能、年耗能数和环比（按楼层）
export function getNenghaoByTongjiByDay(query) {
  return request({
    url: '/zichan/poweramount/statIncrEnergyDataAndQoq',
    method: 'get',
    params: query
  })
}
// 统计电/水/气等能耗当日24h能耗（按楼层）
export function getNenghaoByChartDataByDay(query) {
  return request({
    url: '/zichan/poweramount/statIncrEnergyDataAndHistogram',
    method: 'get',
    params: query
  })
}

// 获取每个楼层下的所有在线设备(按设备类型分：能耗、开关照明、视频等)
export function getDevByType(query) {
  return request({
    url: '/zichan/area/getFloorContainDevice',
    method: 'get',
    params: query
  })
}


// 获取能耗设备信息
export function getNenghaoDevInfo(query) {
  return request({
    url: '/zichan/devonlineinfo/getDeviceBasicAndParamMsg',
    method: 'get',
    params: query
  })
}