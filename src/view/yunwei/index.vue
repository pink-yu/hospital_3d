<template>
  <div class="mask-main">
    <div class="left-block animate__animated animate__fadeInLeft">
      <div class="left-block-bg hvr-bounce-in" v-for="(item, index) in tabList" :key= "index" :class="{'left-block-bg-active': item.tabIndex ==left_index}" @click="tableftClick(item)">
        <div>{{item.name}}</div>
      </div>
    </div>
    <div>
      <xungeng v-if="left_index == 1"/>
      <weibao class="left-content animate__animated animate__fadeInLeft" v-if="left_index == 2"/>
      <baoxiu class="left-content animate__animated animate__fadeInLeft" v-if="left_index == 3"/>
      <shijian class="left-content animate__animated animate__fadeInLeft" v-if="left_index == 4"/>
    </div>
  </div>
</template>

<script>

import Xungeng from './xungeng.vue'
import Weibao from './weibao.vue'
import Baoxiu from './baoxiu.vue'
import Shijian from './shijian.vue'
export default {
  components: {
    Xungeng,
    Weibao,
    Baoxiu,
    Shijian
  },
  data() {
    return {
      tabList: [
        {
          name: '巡更管理',
          en_name: 'xungeng',
          tabIndex: 1
        },
        {
          name: '设备维保',
          en_name: 'weibao',
          tabIndex: 2
        },
        {
          name: '报修管理',
          en_name: 'baoxiu',
          tabIndex: 3
        },
        {
          name: '事件管理',
          en_name: 'shijian',
          tabIndex: 4
        }
      ],
      left_index: 1
    }
  },
  mounted(){

  },
  methods: {
    tableftClick(item) {
      this.left_index = item.tabIndex
    }
  }
}
</script>

