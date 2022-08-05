<template>
  <div class="slide-main">
    <div v-if="tabMenuIndex == 1">
      <shouye />
    </div>
    <!-- 能耗管理 -->
    <div v-if="tabMenuIndex == 3">
      <neng-hao/>
    </div>
    <!-- 空间管理 -->
    <div v-if="tabMenuIndex == 2">
      <kongjian/>
    </div>
    <!-- 安全管理 -->
    <div v-if="tabMenuIndex == 4">
      <anquan/>
    </div>
    <!-- 资产管理 -->
    <div v-if="tabMenuIndex == 6">
      <zichan />
    </div>
    <!-- 楼宇监控 -->
    <div v-if="tabMenuIndex == 5">
      <louyu-jiankong/>
    </div>
    <div v-if="tabMenuIndex == 7">
      <yunwei/>
    </div>
  </div>
</template>

<script>
import ThreeContent from '@/components/three/three.vue'
import NengHao from '@/view/nenghao/index'
import LouyuJiankong from '@/view/louyu-jiankong/index'
import Shouye from '@/view/shouye/index'
import Anquan from '@/view/anquan/index'
import Zichan from '@/view/zichan/index'
import Yunwei from '@/view/yunwei/index'
import Kongjian from '@/view/kongjian/kongjian'

export default {
  name: 'slidebar',
  components: {
    NengHao,
    LouyuJiankong,
    ThreeContent,
    Shouye,
    Anquan,
    Zichan,
    Yunwei,
    Kongjian
  },
  data() {
    return {
      tabMenuIndex: 1
    }
  },
  mounted(){
    let _this = this
    EventBus.$on('changeMenu',function(data) {
      _this.tabMenuIndex = data
    })
  }
}
</script>

<style lang="scss">
.mask-main {
  height: calc(100Vh);
}
.left-block {
  width: .875rem;
  height: calc(100%);
  padding-top: 80px;
  position:absolute;
  z-index: 12;
  background: #0E2743;
  .left-block-bg {
    background: url('../../public/img/smart/bg_01.png') no-repeat 50%/100% 100%;
    width: .4375rem;
    min-height: 1.35rem;
    position: relative;
    cursor: pointer;
    margin: 0 auto;
    padding: 10px 0;
    div {
      font-size: .2rem;
      width: .2rem;
      margin: 0 auto;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
  .left-block-bg:hover {
    background: url('../../public/img/smart/bg_02.png') no-repeat 50%/100% 100%;
  }
  .left-block-bg-active {
    background: url('../../public/img/smart/bg_02.png') no-repeat 50%/100% 100%;
  }
  .hvr-bounce-in {
    display: block;
  }
}
.left-content {
  margin-left: .875rem;
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 10;
  background: #0B1E33;
  padding-top: 60px;
  padding-bottom: 75px;
  width: calc(100% - .875rem);
  .container-bg {
    background: #0A2441;
  }
}
.biaoji-left {
  width: 3.125rem;
  height: 8rem;
  max-height: 8rem;
	border: solid 1px #04add6;
  position: absolute;
  top: 70px ;
  left: calc(0.875rem + 10px);
  z-index: 11;
  background: rgba(15,37,64,.7);
}
</style>