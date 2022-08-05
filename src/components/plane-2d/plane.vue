<template>
  <div class="plane animate__animated animate__fadeInUp" v-if="show_pmt" :class="[activeClass]">
    <iframe id="pmt-iframe" :data-type="show2dType" :src="src" style="width:100%;height:100%" frameborder="0"></iframe>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { FLOORS } from '@/mock/mock_constant.js'
export default {
  name: 'plane',
  props: ['show2dType'],
  data() {
    return {
      src: '',
      activeClass: '',
      show_pmt: false
    }
  },
  computed: {
    ...mapState({
      openFloorIndex: state => state.floor.openFloorIndex
    })
  },
  mounted() {
    let _this = this
    EventBus.$on('getPingmianTu', function () {
      if((_this.show2dType != '' ||  _this.show2dType != null) && (_this.openFloorIndex != '' || _this.openFloorIndex != null)) {
        _this.show_pmt = true
        let name = _this.getOpenFloorName(_this.openFloorIndex)
        _this.src = 'static/' + _this.show2dType + '/' + _this.show2dType + '-' + name + '.html'
        if(_this.show2dType == 'shipin') {
          _this.activeClass = 'plane-shipin-2d'
        } else if(_this.show2dType == 'zhaoming') {
          _this.activeClass = 'plane-zhaoming-2d'
        }
      }
    })
    EventBus.$on('floorChange', () => {
      _this.show_pmt = false
    })

    // 监听来自iframe页面的发送的消息，
    window.addEventListener('message', function (e) {
      _this.show_pmt = false
    })
  },
  methods: {
    getOpenFloorName(index){
      let obj = FLOORS.filter((item) => {
        return item.labelIndex == index
      })
      return obj[0].name.split('_')[1].toLowerCase()
    }
  }
}
</script>

<style lang="scss" scoped>
.plane {
  position: absolute;
  z-index: 11;
}
.plane-zhaoming-2d {
  width: calc(100% - 3.125rem - 6.1875rem - 0.875rem - 40px);
  height: calc(100% - 70px - 4px) ;
  left: calc(0.875rem + 3.125rem + 10px + 10px);
  top: 70px;
  bottom: 4px;
}
.plane-shipin-2d {
  width: calc(100% - 3.125rem - 0.875rem - 4.7875rem - 40px);
  height: calc(100% - 3.5rem - 4px);
  left: calc(0.875rem + 3.125rem + 20px);
  top: 3.5rem;
  bottom: 4px;
}
</style>