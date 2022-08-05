<template>
  <div class="biaoji">
    <div class="biaoji-left animate__animated animate__fadeInLeft">
      <floor-dev-tree :treeData="treeData" :searchShow="searchShow" :showType="showType" :callSource="callSource" @loopinfo="loopinfo"/>
    </div>
    <device-info :showType="showType"  v-if="show" :loopId="loopId"  />
    <zhaoming-fangan v-if="!show" />
  </div>
</template>

<script>
import FloorDevTree from '@/components/floor-dev-tree/floor-tree'
import DeviceInfo from '@/components/device-info/index'
import ZhaomingFangan from './zhaoming-fangan'

import { getDevByType } from '@/api/nenghao'


export default {
  components: {
    FloorDevTree,
    DeviceInfo,
    ZhaomingFangan
  },
  data() {
    return {
      treeData: [],
      searchShow: true,
      show: false,
      showType: 'zhaoming',
      loopId: '',
      callSource: 'zhaoming-dev-tree'
    }
  },
  mounted() {
    getDevByType({devType: '202'}).then((res) => {
      this.treeData = res.data.data.children
    })
    // 点击外科楼恢复出售状态
    EventBus.$on('showZhaomingLoop', () => {
      this.show = false
    })
  },
  methods: {
    loopinfo(data) {
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
      this.loopId = data.powerId
    }
  }
}
</script>
