

import * as CryptoJS from 'crypto-js'
import { Box3, Vector3}  from 'three'
import anime from 'animejs';
/**
 *加密处理
 */
export const encryption = (params) => {
  let {
    data,
    type,
    param,
    key
  } = params
  const result = JSON.parse(JSON.stringify(data))
  if (type === 'Base64') {
    param.forEach(ele => {
      result[ele] = btoa(result[ele])
    })
  } else {
    param.forEach(ele => {
      var data = result[ele]
      key = CryptoJS.enc.Latin1.parse(key)
      var iv = key
      // 加密
      var encrypted = CryptoJS.AES.encrypt(
        data,
        key, {
          iv: iv,
          mode: CryptoJS.mode.CBC,
          padding: CryptoJS.pad.ZeroPadding
        })
      result[ele] = encrypted.toString()
    })
  }
  return result
}
export const inNull = (str) => {
  let flag = false
    let typeStr = Object.prototype.toString.call(str)
    typeStr = typeStr.replace('[', '').replace(']', '').split(' ')[1]
    if (typeStr === 'Array') {
      if (str.length === 0) {
        flag = true
      }
    } else if (typeStr === 'String') {
      if (str === '') {
        flag = true
      }
    } else if (typeStr === 'Null') {
      if (str === null) {
        flag = true
      }
    } else if (typeStr === 'Undefined') {
      if (str === undefined) {
        flag = true
      }
    } else if (typeStr === 'Object') {
      // if (Object.keys(str).length === 0) {
      //   flag = true
      // }
      if (JSON.stringify(str) === '{}') {
        flag = true
      }
    }
    console.log(flag)
    return flag
}

/**
 * 根据日期类型得到相应的日期格式
 * @param {*} type 
 */

export function getDateByType() {
  let date = new Date()
  let y = date.getFullYear()
  let m = date.getMonth() + 1
  m =  m < 10 ? '0' + m : m 
  let d = date.getDate()
  d = d < 10 ? '0' + d : d
  let hh = date.getHours()
  hh = hh < 10 ? '0' + hh : hh
  let mm = date.getHours()
  mm = mm < 10 ? '0' + mm : mm
  let ss = date.getHours()
  ss = ss < 10 ? '0' + ss : ss
  let weeks = ['日', '一', '二', '三', '四', '五', '六']
  let day = '星期' + weeks[date.getDay()]
  return {
    year: y,
    month: m,
    date: d,
    hours: hh,
    minutes: mm,
    seconds: ss,
    day: day
  }
}
// 表单序列化
export const serialize = data => {
  const list = []
  Object.keys(data).forEach(ele => {
    list.push(`${ele}=${data[ele]}`)
  })
  return list.join('&')
}
/**
 * 
 * @param {*} group 查找的group对象
 * @param {*} name  被查找的名称
 */
export function getBoxCenter(group, name) {
  let g = group.getObjectByName(name)
  let bbox = new Box3()
  // 计算层级模型group包围盒
  bbox.expandByObject(g)
  console.log(bbox)
  let mdlen = (bbox.max.x - bbox.min.x) * (0.6)
  let mdhei = (bbox.max.y - bbox.min.y) * (0.6)
  let mdwid = (bbox.max.z - bbox.min.z) * (0.6)
  
  let maxw = Math.max(mdlen,mdhei, mdwid, 2)
  console.log(mdlen,mdhei,mdwid)
  let centerpoint = new Vector3()
  bbox.getCenter(centerpoint) 
  return {
    maxw: maxw,
    centerpoint: centerpoint
  }
}
/**
 * 
 * @param {*} camera 
 * @param {*} controls 
 * @param {*} group 
 * @param {*} name 
 * @param {*} bool true  特殊处理视角 
 */
export function flyToModel(camera, controls, group, name, bool) {
  return new Promise((resolve, reject) => {
    let g_center = getBoxCenter(group, name)
    let data = {
      px: camera.position.x,
      py: camera.position.y,
      pz: camera.position.z,
      tx: controls.target.x,
      ty: controls.target.y,
      tz: controls.target.z
    }
    if(bool) {
      anime({
        targets: data,
        px : g_center.centerpoint.x - 30,//相机目标位置x轴
        py : g_center.centerpoint.y + g_center.maxw - 10,//相机目标位置y
        pz : g_center.centerpoint.z + g_center.maxw + 20,//相机目标位置z
        tx : g_center.centerpoint.x - 30,//相机焦点x
        ty : g_center.centerpoint.y,//相机焦点y
        tz : g_center.centerpoint.z,//相机焦点z
        easing: 'linear',
        update: ()=>{
            //当使用了orbit之后，相机会始终跟随target，target为相机的观察中心，所以这里要把相机的观察中心放到目标位置上
            //相机也应该设定一个固定观察的位置
            camera.position.set(data.px, data.py, data.pz)
            controls.target.set(data.tx, data.ty, data.tz)
  
            camera.lookAt(controls.target)
            controls.update()
        },
        complete: ()=> {
          resolve()
        }
      })
    } else {
      anime({
        targets: data,
        px : g_center.centerpoint.x,//相机目标位置x轴
        py : g_center.centerpoint.y + g_center.maxw ,//相机目标位置y
        pz : g_center.centerpoint.z + g_center.maxw,//相机目标位置z
        tx : g_center.centerpoint.x,//相机焦点x
        ty : g_center.centerpoint.y,//相机焦点y
        tz : g_center.centerpoint.z,//相机焦点z
        easing: 'linear',
        update: ()=>{
            //当使用了orbit之后，相机会始终跟随target，target为相机的观察中心，所以这里要把相机的观察中心放到目标位置上
            //相机也应该设定一个固定观察的位置
            camera.position.set(data.px, data.py, data.pz)
            controls.target.set(data.tx, data.ty, data.tz)
  
            camera.lookAt(controls.target)
            controls.update()
        },
        complete: ()=> {
          resolve()
        }
      })
    }
    
  })
} 