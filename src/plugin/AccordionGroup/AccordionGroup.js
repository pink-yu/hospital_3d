
import TWEEN from '@tweenjs/tween.js'
import { Color } from 'three'
// 创建模型手风琴效果类
class AccordionGroup {

  opacity = 0.5 // 盒子透明度
  opacityModelColor = new Color(0x004a80)
  /**
   * 
   * @param {*} option 
   * @param {*} group 需要操作的group对象
   */
  constructor(group, option) {
    this.option = option
    this.group = group
    // 记录初始值
    this.group.children.forEach(element => {
      element.userData.positionY0 = element.position.y
      element.userData.positionY1 = element.position.y + this.option.distence
    })
    // 备份材质的初始颜色 透明度以及透明属性
    this.group.traverse((e) => {
      if (e.material) {
        if (Array.isArray(e.material)) {
          e.material.forEach((m) => {
            m.userData.selfColor = m.color
            m.userData.selfOpcity = m.opacity
            m.userData.selfTransparent = m.transparent
          })
        } else {
          e.material.userData.selfColor = e.material.color
          e.material.userData.selfOpcity = e.material.opacity
          e.material.userData.selfTransparent = e.material.transparent
        }
      }
    })
  }
  // 楼层半透明
  opacityModel(){
    this.group.traverse((e) => {
      if (e.material) {
        if (Array.isArray(e.material)) {
          e.material.forEach((m) => {
            m.color = this.opacityModelColor
            m.transparent = true
            m.opacity = 0.2
            m.depthWrite = false
          })
        } else {
          e.material.color = this.opacityModelColor
          e.material.opacity = 0.2
          e.material.transparent = true
          e.material.depthWrite = false
        }
      }
    })
  }
  // 创建动画
  createTween(option) {
    // 是否先删除所有的TWEEN, 默认否,
    option.removeAll ? TWEEN.removeAll() : ''
    // 开启更新
    this.updateTween = true
    const tween = new TWEEN.Tween(option.startObject).to(option.endObject, option.duration).easing(option.easing || TWEEN.Easing.Cubic.InOut) // TWEEN.Easing.Cubic.InOut //匀速
    tween.onStart(() => {
      if (option.controlsDisabled && this.controls) this.controls.enabled = false
      option.start ? option.start(tween._object) : ''
    })
    tween.onUpdate(() => {
      option.update ? option.update(tween._object) : ''
    })
    tween.onComplete(() => {
      if (option.controlsDisabled && this.controls) this.controls.enabled = true
      TWEEN.remove(tween)
      option.done ? option.done() : ''
    })
    tween.onStop(() => {
      option.stop ? option.stop() : ''
    })
    TWEEN.add(tween)
    tween.start()
    return tween
  }
  go(index) {
    const _this = this
    return new Promise((resolve, reject) => {
      _this.group.children.forEach((element, i) => {
        _this.createTween({
          startObject: {
            y: element.position.y// 当前值
          },
          endObject: {
            y: i > index ?  element.userData.positionY1 : element.userData.positionY0 // 走或者回到初始值
          },
          duration: _this.option.duration || 1000,
          update(object) {
            element.position.y = object.y
          },
          done() {
            
            resolve()
          }
        })
        if(index === i) {
          _this.group.children[index].traverse((e) => {
            if (e.material) {
              if (Array.isArray(e.material)) {
                e.material.forEach((m) => {
                  m.color = m.userData.selfColor
                  m.opacity = m.userData.selfOpcity
                  e.material.transparent = m.userData.selfTransparent
                  m.depthWrite = true
                })
              } else {
                e.material.color = e.material.userData.selfColor
                e.material.opacity = e.material.userData.selfOpcity
                e.material.transparent = e.material.userData.selfTransparent
                e.material.depthWrite = true
              }
            }
          })
        }
      })
    })
  }
}
export default AccordionGroup;