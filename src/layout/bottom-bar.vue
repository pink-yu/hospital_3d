<template>
  <div class="footer">
    <div class="wrap">
      <div class="box" v-for="(item, num) in navList" :key="num"  @click="changeMenu(item.no, item.label)">  
        <div class="icon hvr-bounce-in" :class="{'bg-active': (item.no) === index, ['bg'+(item.no)]:true}" data-title="item.name"></div>
        <p :class="{'bg-active-title': (item.no) === index}">{{item.name}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from 'vuex'
import anime from 'animejs' 
// 引入公共函数
import { flyToModel } from '../util/util'
export default {
  components: {},
  data() {
    return {
      index: 1,
      navList: [
        {
          name: '首页',
          no: 1,
          label: 'shouye'
        },
        {
          name: '空间管理',
          no: 2,
          label: 'kongjian'
        },
        {
          name: '能耗管理',
          no: 3,
          label: 'nenghao'
        },
        {
          name: '安全管理',
          no: 4,
          label: 'anquan'
        },
        {
          name: '楼宇监控',
          no: 5,
          label: 'louyu'
        },
        {
          name: '资产管理',
          no: 6,
          label: 'zichan'
        },
        {
          name: '运维管理',
          no: 7,
          label: 'yunwei'
        }
      ],
      paishui_group: []
    }
  },
  computed: {
    ...mapState({
      position: state => state.camera.position, // 获取相机的初始原始位置
      floorHeight: state => state.floor.floorHeight, // 获取当前打开楼层距离地面高度
      controlsTargetPosition: state => state.camera.controlsTargetPosition  // 当前轨道控制器的默认目标位置
    }),
    ...mapGetters([])
  },
  mounted() {
    console.log(1111)
    this.$store.commit('updateNavbarIndex', this.index)
    this.$store.commit('updateNavbarLabel', 'shouye')
  },
  methods: {
    changeMenu(index, label) {
      this.index = index
      // 设置需要模型透明化的菜单项
      // this.$store.commit('updateNavbarIndex', this.index)
      // this.$store.commit('updateNavbarLabel', label)
      EventBus.$emit('changeMenu', index)
      if(index == 1) {
        this.displayModel().then(() => {
          this.unsetModeltransparent_fun()
          this.setCameraPosDefault()
          this.$store.commit('updateFloorIndex', null)
        })
        
      } else {
        // if(index == 5) {
          this.displayModel2()
        // }
      }


    },
    /**
     * 隐藏门诊楼和内科楼 环境等
     * bool true 显示楼层，  false 隐藏楼层
     */
    displayModel() {
      return new Promise((resolve, reject) => {
        environmentGroup.visible = true
        boxsGroup.visible = true
        mainGroup.visible = true
        mainGroup.children.forEach((item) => {
          item.visible = true
        })
        carGroup.visible = true
        for(let i = 0; i< floorGroup.children.length; i++) {
          floorGroup.children[i].visible = false
        }
        //隐藏图标
        for(var k in group_icon_list){
          // 全部按组隐藏
          group_icon_list[k].visible = false
        }
        resolve()
      })
      
    },
    displayModel2() {
      environmentGroup.visible = false
      boxsGroup.visible = false
      carGroup.visible = false
      mainGroup.children.forEach((item) => {
        if(item.name == 'waikelou') {
          item.visible = true
        } else {
          item.visible = false
        }
      })
      this.flyModel()

    },
    setCameraPosDefault(){
      // var tween1 = new TWEEN.Tween(camera.position)
      // tween1.to(this.position, 1000)
      // controls.target = new THREE.Vector3(this.controlsTargetPosition.x, this.controlsTargetPosition.y, this.controlsTargetPosition.z)
      // tween1.start();
      let data = {
        px: camera.position.x,
        py: camera.position.y,
        pz: camera.position.z,
        tx: controls.target.x,
        ty: controls.target.y,
        tz: controls.target.z
      }
      anime({
        targets: data,
        px : this.position.x,//相机目标位置x轴
        py : this.position.y,//相机目标位置y
        pz : this.position.z,//相机目标位置z
        tx : this.controlsTargetPosition.x,//相机焦点x
        ty : this.controlsTargetPosition.y,//相机焦点y
        tz : this.controlsTargetPosition.z,//相机焦点z
        easing: 'linear',
        update: ()=>{
            //当使用了orbit之后，相机会始终跟随target，target为相机的观察中心，所以这里要把相机的观察中心放到目标位置上
            //相机也应该设定一个固定观察的位置
            camera.position.set(data.px, data.py, data.pz)
            controls.target.set(data.tx, data.ty, data.tz)

            camera.lookAt(controls.target)
            controls.update()
        }
      })
    },
    // 隐藏标签label
    hideBuildingsLabel(bool) {
      // 隐藏楼宇标签
      for(var i = 0; i< group2.children.length; i++) {
        group2.children[i].visible = bool
      }
      // 隐藏医院悬浮信息标签
      group_2.children[0].visible = bool
      
    },
    // 隐藏模型固定标签
    hideModelLabel() {
      for(var j = 0; j< group_2_1.children.length; j++) {
        group_2_1.children[j].visible = false
      }
    },
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
    flyModel() {
      flyToModel(camera, controls, mainGroup, 'waikelou')
    }
  }
}
</script>

<style  lang="scss" scoped>
.footer {
  z-index: 11;
  width: 1045px;
  position: fixed;
  bottom: 0;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  .wrap {
    .box {
      width: 56px;
      height: 75px;
      margin: 0 8px;
      float: left;
      text-align: center;
      color: #fff;
      cursor: pointer;
      p {
        margin-top: 3px;
        font-size: .175rem;
        background: rgba(0,0,0, 0.6);
        border-radius: 3px;
      }
      .icon {
        width: 54px;
        height: 54px;
        margin: 0 auto;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        background-repeat: no-repeat;
        background-image: url('../../public/img/images/menu04.png');
      }
      .bg1 {
        background-position: 0 0, 0 0;
      }
      .bg2 {
        background-position: -82px 0, -12px 0;
      }
      .bg3 {
        background-position: -164px 0, -12px 0;
      }
      .bg4 {
        background-position: -241px 0, -12px 0;
      }
      .bg5 {
        background-position: -326px 0, -12px 0;
      }
      .bg6 {
        background-position: -409px 0, -12px 0;
      }
      .bg7 {
        background-position: -491px 0, -12px 0;
      }
      .bg8 {
        background-position: -491px 0, -12px 0;
      }
      .bg9 {
        background-position: -572px 0, -12px 0;
      }
      .bg10 {
        background-position: -653px 0, -12px 0;
      }
      .bg11 {
        background-position: -737px 0, -12px 0;
      }
      .bg12 {
        background-position: -472px center, -12px center;
      }
      .bg13 {
        background-position: -472px center, -12px center;
      }
      .bg14 {
        background-position: -472px center, -12px center;
      }
      .bg-active {
        background-image: url('../../public/img/images/menu03.png');
      }
      .icon:hover {
        background-image: url('../../public/img/images/menu03.png');
        +p {
          color: #ddc221;
        }
      }
      .bg-active-title {
        color: #ddc221;
      }
    }
    
  }
}

</style>
