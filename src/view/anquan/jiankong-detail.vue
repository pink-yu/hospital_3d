<template>
  <div class="jiankong-detail animate__animated animate__fadeInLeft">
    <div class="jiankong-more height-100">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">详细信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
        <div class="close hvr-bounce-in" @click="close">X</div>
      </div>
      <div class="content">
        <div class="left">
          <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
        </div>
        <div class="right clearfix">
          <div class="right-c">
            <div class="status">
              <span class="el-icon-s-operation"></span>
              <div class="text-normal">在线</div>
            </div>
            <div class="title-common-box mt10">
              <div class="text-common-1-level">
                <div class="text-left">基础信息</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="info-list mt10">
              <div>编号</div>
              <div>25699882256</div>
            </div>
            <div class="info-list">
              <div>名称</div>
              <div>摄像头</div>
            </div>
            <div class="info-list">
              <div>型号</div>
              <div>jk-6985</div>
            </div>
            <div class="info-list">
              <div>品牌</div>
              <div>大华</div>
            </div>
            <div class="info-list">
              <div>位置</div>
              <div>急救室东南角</div>
            </div>
            <div class="info-list">
              <div>使用寿命</div>
              <div>24个月</div>
            </div>
            <div class="info-list">
              <div>供应商</div>
              <div>wang 13258968741</div>
            </div>
            <div class="title-common-box">
              <div class="text-common-1-level">
                <div class="text-left">云台控制</div>
                <div class="text-shu">|</div>
                <div class="text-liner-bg"></div>
              </div>
            </div>
            <div class="d-control">

              <div class="d-fangxiang">
                <div class="d-big">
                  <div class="circle-r">
                    <div class="circle-item">
                      <div class="circle circle-1">
                        <span class="trangle1"></span>
                      </div>
                      <div class="circle circle-2">
                        <span class="trangle2"></span>
                      </div>
                    </div>
                    <div class="circle-item"> 
                      <div class="circle circle-3">
                        <span class="trangle3"></span>
                      </div>
                      <div class="circle circle-4">
                        <span class="trangle4"></span>
                      </div>
                    </div>
                  </div>
                  <div class="circle-s"></div>
                  <div class="circle-l"></div>
                </div>
              </div>
              <div class="d-scale">
                <div class="d-v">
                  <div class="d-v-top el-icon-plus"></div>
                  <div class="d-v-bottom el-icon-minus"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['show'],
  methods: {
    close(){
      EventBus.$emit('closeJiankong')
    }
  }
}
</script>

<style lang="scss" scoped>
.jiankong-detail {
  width: calc(100% - .875rem);
  margin-left: .875rem;
  position: absolute;
  z-index: 11;
  top: 70px;
  height: calc(100% - 60px - 85px);
  padding: 0 10px;
  .jiankong-more {
    background-image: linear-gradient(#0a2949, #0a2949), linear-gradient(#0d1033, #0d1033);
  }
  .content {
    padding: 10px 0;
    height: calc(100% - .45rem);
   
    .left{
      float: left;
      width: 70%;
      height: 100%;
      padding-left: 50px;
    }
    .right {
      float: right;
      padding: 0 50px;
      width: 30%;
      height: 100%;
      .right-c {
        border: 1px solid #04add6;
        width: 100%;
        height: 100%;
        margin: 0 auto;
        padding: 20px 20px 0 20px;
        .status {
          border: 1px solid #084374;
          display: flex;
          justify-content: center;
          align-items: center;
          .el-icon-s-operation{
            background: #084374;
            &:before {
              font-size: 1rem;
              color: #2BC4D1;
            }
          }
          div {
            width: 100%;
            font-size: .225rem;
            font-weight: bold;
          }
          
        }
        .info-list {
          display: flex;
          justify-content: space-between;
          height: .45rem;
          div:last-child {
            color: #00ceff;
          }
        }
        .d-control {
          padding-top: .375rem;
          display: flex;
          padding-bottom: 20px;
          justify-content: space-around;
          .d-big {
            width: 1.95rem;
            height: 1.95rem;
            background-color: #055E7D;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .d-fangxiang {
            .circle-r {
              transform: rotate(45deg);
              width: 1.7rem;
            }
            .circle-item {
              display: flex;
            }
            .circle {
              width: .8625rem;
              height: .8625rem;
              background: #029BC4;
              display: flex;
              justify-content: center;
              align-items: center;
              cursor: pointer;
              
              .trangle1 {
                margin-top: .1875rem;
                margin-left: .1875rem;
                width: 0;
                height: 0;
                border-top: .3rem solid #fff;
                border-right: .3rem solid transparent;
                
              }
              .trangle2 {
                margin-top: .1875rem;
                margin-right: .1875rem;
                width: 0;
                height: 0;
                border-top: .3rem solid #fff;
                border-left: .3rem solid transparent;
              }
              .trangle3 {
                margin-bottom: .1875rem;
                margin-left: .1875rem;
                width: 0;
                height: 0;
                border-bottom: .3rem solid #fff;
                border-right: .3rem solid transparent;
              }
              .trangle4 {
                margin-bottom: .1875rem;
                margin-right: .1875rem;
                width: 0;
                height: 0;
                border-bottom: .3rem solid #fff;
                border-left: .3rem solid transparent;
              }
              &:active{
                background: #055E7D;
              }
            }
            .circle-1 {
              border-radius: .8625rem 0 0;
              margin-right: 1px;
              margin-bottom: 1px;
            }
            .circle-2 {
              border-radius: 0 .8625rem 0 0;
            }
            .circle-3 {
              border-radius: 0 0 0 .8625rem;
              margin-top: 1px;
              margin-right: 1px;
            }
            .circle-4 {
              border-radius: 0 0 .8625rem 0;
              margin-left: 1px;
              margin-top: 1px;
            }
            .circle-l {
              width: .15rem;
              height: .15rem;
              border-radius: 50%;
              position: absolute;
              background-color: #029bc4;
            }
            .circle-s {
              width: .5rem;
              height: .5rem;
              border-radius: 50%;
              position: absolute;
              background-color: #055E7D;
            }
          }
          .d-scale {
            .d-v {
              margin: 0 auto;
              width: .8rem;
              height: 1.9375rem;
              background-color: #0c6582;
              border-radius: .4rem;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              align-items: center;
              .d-v-top,.d-v-bottom {
                cursor: pointer;
                width: .675rem;
                height: .675rem;
                background-color: #029bc4;
                border-radius: 50%;
                text-align: center;
                line-height: 0.675rem;
                &::before{
                  font-size: .25rem;
                  color: #fff;
                  font-weight: 700;
                }
                &:active{
                  background-color: #0c6582;
                }
              }
              .d-v-top {
                margin-top: .0625rem;
              }
              .d-v-bottom {
                margin-bottom: .0625rem;
              }
            }
          }
        }
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
      .close {
        position: absolute;
        right: 15px;
        top: 5px;
        font-size: .225rem;
        cursor: pointer;
        color: #999;
        padding: 0 5px;
        &:hover {
          color: #eee;
        }
      }
  }

</style>