<template>
  <div class="ld-mask">
    <div class="ld-test">
      <i class="el-icon-loading"></i>
      <p>{{text}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',
  data() {
    return {
      text: '拼命加载中'
    }
  }
}
</script>

<style lang="scss" scoped>
.ld-mask {
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .5);
  z-index: 20;
  top: 0;
  .ld-test {
    text-align: center;
    color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    color: #00eeff;
  }
}
</style>