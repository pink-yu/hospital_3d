<template>
  <div class="mask-main">
    <div class="left-block animate__animated animate__fadeInLeft">
      <div class="left-block-bg hvr-bounce-in" v-for="(item, index) in tabList" :key= "index" :class="{'left-block-bg-active': item.tabIndex ==left_index}" @click="tableftClick(item)">
        <div>{{item.name}}</div>
      </div>
    </div>
    <div >
      <zhaomming-system v-if="left_index == 6"/> 
      <gongpeidian-system v-if="left_index == 5" />
      <dianti-system  v-if="left_index == 4"/>
    </div>
    
  </div>
</template>

<script>
import ZhaommingSystem from './zhaoming-system.vue'
import GongpeidianSystem from './gongpeidian-system.vue'
import DiantiSystem from './dainti-system.vue'

export default {
  components: {
    ZhaommingSystem,
    GongpeidianSystem,
    DiantiSystem
  },
  data() {
    return {
      tabList: [
        {
          name: '给排水系统',
          en_name: 'paishui',
          tabIndex: 1
        },
        {
          name: '新风系统',
          en_name: 'xinfeng',
          tabIndex: 2
        },
        {
          name: '空调系统',
          en_name: 'kongtiao',
          tabIndex: 3
        },
        {
          name: '电梯系统',
          en_name: 'dianti',
          tabIndex: 4
        },
        {
          name: '供配电系统',
          en_name: 'gongpeidian',
          tabIndex: 5
        },
        {
          name: '智能照明系统',
          en_name: 'zhaoming',
          tabIndex: 6
        }
      ],
      left_index: 6
    }
  },
  mounted(){
    this.tableftClick({
      name: '智能照明系统',
      en_name: 'zhaoming',
      tabIndex: 6
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