import http from '../request/http'
import config from '../request/config'

const { host } = config
/**
 *  @parms resquest 请求地址 例如：http://197.82.15.15:8088/request/...
 *  @param '/testIp'代表vue-cil中config，index.js中配置的代理
 */

// get请求
export default {
	// 获取用户权限列表
	tenantList(params) {
		return http.get(`${host}/admin/tenant/list`, params)
	},
	// 获取能耗实时数据
	getNenghaoRealdata(params) {
		return http.post(`${host}/zichan/power/queryCountPowerByType`, params)
	},
	// 登出注销系统
	loginOut() {
		return http.delete(`${host}/auth/token/logout`)
	},
	// 区域能耗按楼层实时查询当日水电气
	nenghaoAreaByFloorByDatetype(params) {
		return http.get(`${host}/zichan/poweramount/statEnergyFloorProportion`, params)
	},
	// 能耗概览查询在线设备统计
	nenghaoPreviewByTongji(params) {
		return http.get(`${host}/zichan/poweramount/statEnergyRelate`, params)
	},
	// 获取楼层设备区域信息
	floorAndDeviceInfo(params) {
		return http.get(`${host}/zichan/area/getFloorContainDevice`, params)
	},
	// 能耗按分项时间统计
	nenghaoByItemByTimeTongji(params) {
		return http.get(`${host}/zichan/poweramount/statEnergyAmountByModelTypePercent`, params)
	}
}
