<template>
  <div class="xunjian-detail height-100">
    <div class="title-common-box title-box-top ">
      <div class="text-common-1-level">
        <div class="text-left">巡检路线信息</div>
        <div class="text-shu">|</div>
        <div class="text-liner-bg"></div>
      </div>
    </div>
    <div class="b-block">
      <div class="b-list">
        <div>巡检路线名称</div>
        <div>的点点滴滴</div>
      </div>
      <div class="b-list">
        <div>巡检人</div>
        <div>3434dfdf</div>
      </div>
      <div class="b-list">
        <div>备注</div>
        <div>22222222222222222</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.title-common-box .text-common-1-level .text-liner-bg {
  background: linear-gradient(to right, #00ebff, #102a48 30%);
}
.title-common-box {
  border-bottom: none;
  border-top: none;
}
.b-block {
  .b-list {
    display: flex;
    height: .5rem;
    line-height: .5rem;
    div:first-child {
      color: #00eeff;
      flex: 1;
      text-align: right;
      margin-right: 10px;
    }
    div:last-child {
      flex: 4;
      background-image: linear-gradient(#1b3655, #1b3655), linear-gradient(#58d9f9, #58d9f9);
      margin-right: 10px;
      padding-left: 20px;
      padding-bottom: 5px;
      img {
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
  .b-list-block {
    display: flex;
    height: 0.5rem;
    line-height: 0.5rem;
    padding-bottom: 1px;
    .b-l {
      flex: 2;
      text-align: right;
      color: #00eeff;
      padding-right: 10px;
      margin-left: -10px;
    }
    .b-r {
      flex: 4;
      display: flex;
      margin-right: 10px;
      text-align: center;
      div {
        flex: 1;
        background-image: linear-gradient(#084374,#084374), linear-gradient(#58d9f9, #58d9f9);
        &:not(:last-child){
          margin-right: 1px;
        }
      }
    }
    .b-normal {
      div {
        background-image: none;
      }
    }
  }
  .b-list-2 {
    margin-bottom: 10px;
    div.b-right {
      background-image: linear-gradient(#084374,#084374), linear-gradient(#58d9f9, #58d9f9);
    }
  }
}
</style>
