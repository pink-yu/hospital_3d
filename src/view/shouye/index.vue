<template>
  <div>
    <shouye-left/>
    <buildings-floor/>
    <shouye-right/>
  </div>
</template>

<script>
import ShouyeLeft from './shouye-left.vue'
import ShouyeRight from './shouye-right.vue'
import BuildingsFloor from '@/components/floors/floors'

export default {
  components: {
    ShouyeLeft,
    ShouyeRight,
    BuildingsFloor
  }
}
</script>

<style lang="scss" scoped>
.common-content {
  height: calc(100% - 60px);
  width: 5.3625rem;
  position: absolute;
  top: 60px;
  z-index: 10;
}
</style>