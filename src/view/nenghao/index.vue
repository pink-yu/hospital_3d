<template>
  <div class="mask-main">
    <div class="left-block animate__animated animate__fadeInLeft">
      <div class="left-block-bg hvr-bounce-in" v-for="(item, index) in tabList" :key= "index" :class="{'left-block-bg-active': item.tabIndex == left_index}" @click="tableftClick(item.tabIndex)">
        <div>{{item.name}}</div>
      </div>
    </div>
    <div >
      <nenghao-devinfo   v-if="left_index ==4"/>
      <nenghao-preview class="left-content animate__animated animate__fadeInLeft"  v-if="left_index ==1"/>
      <nenghao-item class="left-content animate__animated animate__fadeInLeft" v-if="left_index==3" />
      <nenghao-area class="left-content animate__animated animate__fadeInLeft" v-if="left_index==2" />
      
    </div>
  </div>
</template>

<script>
import NenghaoDevinfo from './nenghao-devinfo.vue'
import NenghaoPreview from './nenghao-preview.vue'
import NenghaoItem from './nenghao-item.vue'
import NenghaoArea from './nenghao-area.vue'
import ThreeContent from '@/components/three/three.vue'
export default {
  components: {
    NenghaoDevinfo,
    NenghaoPreview,
    NenghaoItem,
    NenghaoArea,
    ThreeContent
  },
  data() {
    return {
      left_index: 1,
      tabList: [
        {
          name: '能耗概览',
          tabIndex: 1
        },
        {
          name: '区域能耗',
          tabIndex: 2
        },
        {
          name: '分项能耗',
          tabIndex: 3
        },
        {
          name: '表计能耗',
          tabIndex: 4
        }
      ],
      loaded: false
    }
  },
  mounted(){
  },
  methods: {
    tableftClick(index) {
      this.left_index = index
      if(index == 4) {
        this.loaded = true
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>