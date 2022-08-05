<template>
  <div class="mask-main">
    <div class="left-block animate__animated animate__fadeInLeft">
      <div class="left-block-bg hvr-bounce-in" v-for="(item, index) in tabList" :key= "index" :class="{'left-block-bg-active': item.tabIndex ==left_index}" @click="tableftClick(item)">
        <div>{{item.name}}</div>
      </div>
    </div>
    <div >
      <jiankong-system v-if="left_index == 1"/> 
      <menjin-system v-if="left_index == 2" />
      <xiaofang-system v-if="left_index == 3" />
      <ruqin-system v-if="left_index == 4" />
    </div>
    
  </div>
</template>

<script>
import JiankongSystem from './jiankong-system.vue'
import MenjinSystem from './menjin-system.vue'
import RuqinSystem from './ruqin-systrm.vue'
import XiaofangSystem from './xiaofang-system.vue'

export default {
  components: {
    JiankongSystem,
    MenjinSystem,
    RuqinSystem,
    XiaofangSystem
  },
  data() {
    return {
      tabList: [
        {
          name: '视频系统',
          en_name: 'shipin',
          tabIndex: 1
        },
        {
          name: '门禁系统',
          en_name: 'menjin',
          tabIndex: 2
        },
        {
          name: '消防系统',
          en_name: 'xiaofang',
          tabIndex: 3
        },
        {
          name: '防入侵系统',
          en_name: 'ruqin',
          tabIndex: 4
        },
        {
          name: '停车场系统',
          en_name: 'tingchechang',
          tabIndex: 5
        }
      ],
      left_index: 1
    }
  },
  mounted(){
    this.tableftClick({
      name: '视频系统',
      en_name: 'shipin',
      tabIndex: 1
    })
  },
  methods: {
    tableftClick(item) {
      this.left_index = item.tabIndex

      EventBus.$emit('tab_index', item.en_name)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>