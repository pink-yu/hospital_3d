<template>
  <div class="biaoji">
    <div class="biaoji-left animate__animated animate__fadeInLeft">
      <floor-dev-tree :treeData="treeData" :searchShow="searchShow" :showType="showType" :callSource="callSource"  @devInfo="devInfo"/>
    </div>
    
    <device-info :showType="showType" v-if="show"  :powerid="powerid"/>
  </div>
</template>

<script>
import FloorDevTree from '@/components/floor-dev-tree/floor-tree'
import ThreeContent from '@/components/three/three'
import DeviceInfo from '@/components/device-info/index'

import { getDevByType } from '@/api/nenghao'

export default {
  components: {
    FloorDevTree,
    ThreeContent,
    DeviceInfo
  },
  data() {
    return {
      treeData: [],
      searchShow: true,
      showType: 'nenghao',
      show: false,
      powerid: '',
      callSource: 'nenghao-dev-tree'
    }
  },
  mounted() {
    getDevByType({devType: '203'}).then((res) => {
      this.treeData = res.data.data.children
    })
  },
  methods: {
    devInfo(data) {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      }) 
      this.powerid = data.powerId
    }
  }
}
</script>
