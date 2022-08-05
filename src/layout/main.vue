<template>
  <div class="Index">
    <div id="map"></div>
    <hea class="hea"></hea>
    <bottom-bar/>
    <slide />
    <plane :show2dType="show2dType" />
    <three-content/>
  </div>
</template>

<script>
import hea from './hea.vue'
import BottomBar from './bottom-bar.vue'
import slide from './slide.vue'
import plane from '../components/plane-2d/plane.vue'

import ThreeContent from '@/components/three/three.vue'

export default {
  components: {
    hea,
    slide,
    ThreeContent,
    BottomBar,
    plane
},
  data() {
    return {
      show2dType: null
    }
  },
  mounted() {
    let _this = this
    EventBus.$on('tab_index', (data) => {
      _this.show2dType = data
    })
  },
  methods: {
    swChangeHander(v) {
      event.stopPropagation()
      var name = group5.children[0].name.split('-popup')[0]
      var guang = group3.getObjectByName(name)
      // guang.visible = v
      if (v) {
        this.createSpotLight(guang)
      } else {
        window.spotLight_P[name][0].visible = false
        // mesh.material.emissiveIntensity = 0
      }
    },
    createSpotLight(mesh) {
      if (!window.spotLight_P) {
        window.spotLight_P = {}
      }
      if (!window.target) {
        window.spotLight_P[mesh.name] = [new THREE.SpotLight(0xffffff, 1)]
        var target = new THREE.Object3D()
        scene.add(target)
        window.spotLight_P[mesh.name].push(target)
      }

      var box3 = new THREE.Box3()
      box3.expandByObject(mesh)

      spotLight_P[mesh.name][0].visible = true

      // spotLight_P[mesh.name][0].position.copy(mesh.position)

      spotLight_P[mesh.name][0].position.x = (box3.max.x + box3.min.x) / 2 
      spotLight_P[mesh.name][0].position.y = (box3.max.y + box3.min.y) / 2 + 0.5
      spotLight_P[mesh.name][0].position.z = (box3.max.z + box3.min.z) / 2 
      console.log(spotLight_P[mesh.name][0].position)

      spotLight_P[mesh.name][0].angle = Math.PI / 10 // 聚光灯的扩散范围，最大为Math.PI / 2
      spotLight_P[mesh.name][0].penumbra = 0.05 // 由于半影而衰减的聚光锥的百分比。取值介于0和1之间。默认值为零
      // spotLight_P[mesh.name][0].decay = 2 // 光线沿光线距离变暗的量, 可理解为衰减速率
      spotLight_P[mesh.name][0].distance = 7 // 最大范围的光
      spotLight_P[mesh.name][0].castShadow = true // 将光源能产生阴影的属性设置为true
      spotLight_P[mesh.name][0].shadow.mapSize.width = 1024 // 定义阴影贴图的宽度和高度,必须为2的整数此幂
      spotLight_P[mesh.name][0].shadow.mapSize.height = 1024 // 较高的值会以计算时间为代价提供更好的阴影质量
      spotLight_P[mesh.name][0].shadow.camera.near = 2 // 光源在世界坐标内的视角，物体的位置必须大于此最小值才能产生阴影
      spotLight_P[mesh.name][0].shadow.camera.far = 50

    
      spotLight_P[mesh.name][1].position.x = (box3.max.x + box3.min.x) / 2 
      spotLight_P[mesh.name][1].position.y = (box3.max.y + box3.min.y) / 2
      spotLight_P[mesh.name][1].position.z = (box3.max.z + box3.min.z) / 2
      
    
      // spotLight_P[mesh.name][1].position.copy(mesh.position)
      // spotLight_P[mesh.name][1].position.y -= 20

      spotLight_P[mesh.name][0].target = spotLight_P[mesh.name][1]
      scene.add(spotLight_P[mesh.name][0])
    },
    closePopup() {
      this.hidepopup()
    }
  }
}
</script>

<style lang="scss">
.Index {
  width: 100%;
  height: 100%;
  color: #fff;
  #map {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    text-align: center;
    background: rgb(32, 32, 32);
  }
  .hea {
    width: 100%;
    height: 60px;
    position: absolute;
    z-index: 11;
    top: 0;
  }
  .botto {
    width: 1880px;
    height: 124px;
    position: absolute;
    bottom: 20px;
    z-index: 1;
    margin-left: calc(50% - 940px);
  }
}

.label_main {
  border-left: 1px solid #ddc221;
  padding: 10px;
  .pop-content {
    .pop-main {
      color: #ddc221;
      h4 {
        font-size: 18px;
      }
      p {
        margin: 5px 0;
      }
    }
  }
}
.label-common {
  .label-text-bg {
    background: url('../../public/img/images/label-bg.png') no-repeat 50%/100% 100%;
    color: #fff;
    text-align: center;
    font-size: 16px;
    padding: 0 10px 10px 10px;
    width: 100px;
    height: 70px;
  }
}
.label-model-text {
  font-size: 18px;
  color: #ddc221;
}
.select-time {
  width: 60%;
  float: left;
  .el-input__inner {
    height: 20px;
    line-height: 20px;
    border: 1px solid #18a3b0;
    background: transparent;
    color: #18a3b0;
  }
  .el-input__suffix {
    top: 0;
    .el-input__icon {
      line-height: 20px;
    }
  }
}

.select-time-drop {
  background: rgba($color: #000000, $alpha: 0.7)!important;
  border: 1px solid #18a3b0!important;
  .el-select-dropdown__item {
    color: #18a3b0;
    &:hover {
      background: none;
    }
  }
  .el-select-dropdown__item.hover {
    background: none;
  }
}
.pop-3d-name {
  position: absolute;
  top: 60px;
  z-index: 9;
  left: 50%;
  transform: translateX(-50%);
  font-size: 16px;
  color: yellow;
}
</style>
