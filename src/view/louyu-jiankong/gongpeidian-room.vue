<template>
  <div class="right-dev-info animate__animated animate__fadeInRight">
    <div class="room-list">
      <div class="title-common-box  title-bg-box">
        <div class="text-common-1-level">
          <div class="text-left">配电房1</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="room-1">
        <div>温度℃</div>
        <div>湿度</div>
        <div>烟感</div>
      </div>
      <div class="room-2">
        <div>25</div>
        <div>55%</div>
        <div>正常</div>
      </div>
    </div>
    <div class="room-list">
      <div class="title-common-box  title-bg-box">
        <div class="text-common-1-level">
          <div class="text-left">配电房2</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="room-1">
        <div>温度℃</div>
        <div>湿度</div>
        <div>烟感</div>
      </div>
      <div class="room-2">
        <div>25</div>
        <div>55%</div>
        <div>正常</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      filterText: '',
      value: ''
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped>
.right-dev-info {
  position: absolute;
  right: 20px;
  top: 70px;
  z-index: 11;
  background: rgba(15,37,64, 0.7);
  .room-list {
    margin: 10px;
    border: solid 1px #04add6;
    .room-1,.room-2 {
      display: flex;
      justify-content: space-around;
      text-align: center;
      line-height: .45rem;
    }
    .room-1 {
      padding-top: 10px;
    }
    .room-2 {
      padding-bottom: 10px;
      div {
        width: 1.65rem;
        height: .45rem;
        color: #00ecff;
        font-size: .225rem;
        background-color: #084374;
        margin-left: 10px;
        margin-right: 10px;
      }
    }
  }
}
.title-common-box {
    border-bottom: none;
    border-top: none;
    background-image: linear-gradient(90deg, rgba(23, 72, 100, 0.64) 0%, #102a48 100%);
      .text-liner-bg {
        background: linear-gradient(to right, #00ebff, #102a48 30%);
      }
  }
</style>
