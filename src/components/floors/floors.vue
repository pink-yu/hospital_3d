<template>
  <div class="floors">
    <!-- 楼层常驻 -->
    <ul class="buildings-floor">
      <li class="hvr-grow hvr-shutter-out-horizontal" v-for="(item, index) of floors" :class="[item.labelIndex === floorIndex ? 'active' : '  ']" :key="index" @click="linkToFloors(item)">{{item.label}}</li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { FLOORS } from '@/mock/mock_constant.js'
export default {
  name: 'building-floors',
  data() {
    return {
      floors: FLOORS,
      floorIndex: null
    }
  },
  computed: {
    ...mapState({
      position: state => state.camera.position, // 获取相机的初始原始位置
      openFloorIndex: state => state.floor.openFloorIndex, // 获取打开的楼层
      controlsTargetPosition: state => state.camera.controlsTargetPosition  // 当前轨道控制器的默认目标位置
    })
  },
  watch: {
    openFloorIndex(){
      this.floorIndex = this.openFloorIndex
    }
  },
  methods: {
    linkToFloors(item) {
      let name = item.name
      if(this.floorIndex == item.labelIndex) return
      this.floorIndex = item.labelIndex
      // this.$store.commit('updateFloorIndex', this.floorIndex)
      this.$store.commit('updateFloorHeight', item.height)
      EventBus.$emit('floorChange', {
        floorName: name,
        floorIndex: item.labelIndex
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.floors {
  position: absolute;
  left: 5.425rem;
  top: 60px;
  z-index: 10;
  background-color: #091217;
  padding: .125rem 4px;
  border-radius: 10px;
}
.buildings-floor {
  li {
    width: .575rem;
    height: .35rem;
    line-height: .35rem;
    color: #fff;
    letter-spacing: 1px;
    cursor: pointer;
    text-align: center;
    border: 1px solid #1E3A61;
    margin-bottom: 2px;
    transition: all .3s ease 0s;
    border-radius: 3px;
    background: #24467b;
    display: block;
  }
  .hvr-shutter-in-horizontal:before{
    background: #24467b;
  }
 
  li:hover {
    border: 1px solid #fff;
  }
  .active {
    border: 1px solid #fff;
    background: #3D8AD1;
    opacity: 1;
  }
}
</style>