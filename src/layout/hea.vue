<template>
  <div class="head">
    <div class="head-left">
      <span class="tt">{{localDate}}</span>
      <span class="tt">{{time}}</span>
      <span class="tt">{{weekday}}</span>
    </div>
    <div class="houtai-text hvr-wobble-bottom" @click="jumpUrl">后台运维</div>
    <div class="exit">
      <span style="margin-right: 50px">
        <span>您好, <span class="text-normal">{{userInfo.username}}</span></span>
      </span>
      <img class="icon-img" src="../../public/img/images/tc.png" @click="logout" title="退出系统" />
      <img class="user_icon" src="../../public/img/images/gly.png" />
      <span style="margin:0 40px 0 10px">|</span>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
import * as THREE from 'three'
export default {
  data() {
    return {
      sceneType_3d: true,
      sceneType_2d: false,
      sceneType: null,
      sceneModelType: 1,
      d_2_show: false,
      weeks: ['日', '一', '二', '三', '四', '五', '六'],
      localDate: null,
      time: null,
      weekday: null
    }
  },
  computed: {
    ...mapState({
      userInfo: state => state.user.userInfo,
      navbarLabel: state => state.navbar.navbarLabel // 获取底部导航栏高亮标签
    })
  },
  created(){
    let _this = this
    setInterval(() => {
      let d_date = new Date()
      let y = d_date.getFullYear()
      let m = (d_date.getMonth() + 1) < 10 ? '0' + (d_date.getMonth() + 1) : (d_date.getMonth() + 1)
      let d = (d_date.getDate()) < 10 ? '0' + d_date.getDate() : d_date.getDate()
      let hh = d_date.getHours() < 10 ? '0' + d_date.getHours() : d_date.getHours()
      let mm = d_date.getMinutes() < 10 ? '0' + d_date.getMinutes() : d_date.getMinutes()
      let ss = d_date.getSeconds() < 10 ? '0' + d_date.getSeconds() : d_date.getSeconds()
      let week = this.weeks[d_date.getDay()]
      _this.localDate =  y + '-' + m + '-' + d
      _this.time = hh + ':' + mm + ':' + ss
      _this.weekday = '星期' + week
    }, 1000)
  },
  mounted() {
    var self = this
    EventBus.$on('changeMenu', function (val) {
      if (val == 1) {
        self.changeScene(1)
      } else {
        self.changeScene(3)
      }
    })
    console.log(this.userInfo)
    EventBus.$on('floorChange', function (val) {
      self.changeScene(3)
    })
  },
  methods: {
    ...mapMutations({}),
    jumpUrl() {
      window.open('http://47.119.132.84:8100/#/wel/index', '_blank')
      
    },
    
    changeScene(type) {
      this.sceneModelType = type
      var i = 0
      var len = window.boxsGroup.children[0].children[0].children.length
      console.log(this.navbarLabel)
      if (type === 1) {
        // 白天
        scene.background = window.skyList[0]
        window.groupLight.children[0].intensity = 0.7
        window.groupLight.children[1].intensity = 0.7
        window.groupLight.children[2].intensity = 0.3

        for (i = 0; i < len; i++) {
          window.boxsGroup.children[0].children[0].children[i].material = window.material_0
        }
        this.transparentModel(true).then(() => {
          this.unsetModeltransparent_fun()
        })
      } else if (type === 2) {
        scene.background = window.skyList[1]
        window.groupLight.children[0].intensity = 0.3
        window.groupLight.children[1].intensity = 0.3
        window.groupLight.children[2].intensity = 0.1

        this.transparentModel(true).then(() => {
          this.unsetModeltransparent_fun()
        })
      } else if (type === 3) {
        // 透明
        scene.background = window.skyList[2]
        window.groupLight.children[0].intensity = 0.5
        window.groupLight.children[1].intensity = 0.3
        window.groupLight.children[2].intensity = 0.4

        for (i = 0; i < len; i++) {
          window.boxsGroup.children[0].children[0].children[i].material = window.material_0
        }
        this.transparentModel(false).then(() => {
          this.setModeltransparent_fun(0.2)
        })
      }
    },
    // 透视模式隐藏显示场景
    transparentModel(bool){
      return new Promise((resolve, reject) => {
        environmentGroup.visible = bool
        boxsGroup.visible = bool
        carGroup.visible = bool
        resolve()
      })
    },
    // 设置模型的透明度，g表示指定的模型对象，num表示透明度的值0-1之间
    setModeltransparent_fun(num) {
      window.mainGroup.traverse((e) => {
        if (e.material) {
          if (Array.isArray(e.material)) {
            e.material.forEach((m) => {
              m.color = new THREE.Color(0x004a80)
              m.opacity = num
              m.transparent = true
              m.depthWrite = false
            })
          } else {
            e.material.color = new THREE.Color(0x004a80)
            e.material.opacity = num
            e.material.transparent = true
            e.material.depthWrite = false
          }
        }
      })
    },
    /**
     * 恢复物体透明度
     */
    unsetModeltransparent_fun() {
      mainGroup.traverse((object) => {
        if(object.material){
          if(Array.isArray(object.material)){
            object.material.forEach((m) => {
              m.color = object.material.userData.selfColor
              m.opacity = object.material.userData.selfOpcity
              m.material.transparent = object.material.userData.selfTransparent
              m.depthWrite = true
            })
          } else {
            object.material.color = object.material.userData.selfColor
            object.material.opacity = object.material.userData.selfOpcity
            object.material.transparent = object.material.userData.selfTransparent
            object.material.depthWrite = true
          }
        }
      })
    },
    logout(){
      this.$confirm('是否退出系统, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$store.dispatch('LogOut').then(() => {
            this.$router.push({ path: '/login' })
        })
      })
    }
  }
}
</script>

<style  lang="scss">
.head {
  background: url('../../public/img/images/logo-title1.png') no-repeat 50%/100% 100%;
  position: relative;
  .head-left {
    position: absolute;
    top: 20px;
    height: 30px;
    line-height: 30px;
    width: 6.5rem;
    text-align: right;
    font-size: .225rem;
    .tt {
      margin: 0 10px;
    }
  }  
  .houtai-text{
    cursor: pointer;
    position: absolute;
    top: 18px;
    right: 4.9rem;
    width: 2.25rem;
    height: 30px;
    line-height: 30px;
    text-align: center;
    &:hover {
      color: #22fafa;
    }
  }
  .exit {
    position: absolute;
    right: 0;
    height: 30px;
    width: 5rem;
    top: 18px;
    line-height: 30px;
    text-align: right;
    padding-right: 30px;
    .user_icon {
      position: absolute;
      right: 80px;
    }
    .icon-img {
      cursor: pointer;
      position: absolute;
      right: 30px;
    }
    .icon-img:hover + .user_icon {
      animation: move 1s infinite linear;
    }
  }
}
@keyframes move {
   0%{transform: translateX(0);opacity: 1;}
  25%{transform: translateX(20px);opacity: 0.8;}
  50%{transform: translateX(40px);opacity: 0.6;}
  75%{transform: translateX(60px);opacity: 0.4;}
  95%{transform: translateX(80px);opacity: 0.2;}
  100%{transform: translateX(100px);opacity:0;}
}
.text-normal {
  font-size: .2rem;
}
</style>
