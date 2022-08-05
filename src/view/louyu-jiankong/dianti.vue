<template>
  <div class="dianti-list">
    <div class="title-common-box title-box-top ">
      <div class="text-common-1-level">
        <div class="text-left">{{diantiObj.label}}号电梯</div>
        <div class="text-shu">|</div>
        <div class="text-liner-bg"></div>
      </div>
      <span class="detail hvr-grow" @click="openDetail">详情</span>
    </div>
    <div class="dianti-c">
      <div class="tianti-left">
        <div class="v-block"></div>
        <div class="xiang">
          <div v-if="diantiObj.status == 1">
            <div class="trangle-b" v-if="diantiObj.workstatus == 1">
              <span class="trangle trangle-top trangle-top-active"></span>
              <span class="fang fang-top fang-active"></span>
            </div>
            <div class="trangle-b" v-if="diantiObj.workstatus == 0">
              <span class="trangle trangle-top trangle-top-normal"></span>
              <span class="fang fang-top"></span>
            </div>
          </div>
          <div v-else-if="diantiObj.status == 0">
            <div class="trangle-b">
              <span class="trangle trangle-top trangle-top-normal"></span>
              <span class="fang fang-top"></span>
            </div>
          </div>
          <div v-else-if="diantiObj.status == 2">
            <div class="trangle-b">
              <span class="trangle trangle-top trangle-top-error"></span>
              <span class="fang fang-top fang-error"></span>
            </div>
          </div>
          <div v-else-if="diantiObj.status == 3">
            <div class="trangle-b">
              <span class="trangle trangle-top trangle-top-warning"></span>
              <span class="fang fang-top fang-warning"></span>
            </div>
          </div>
          <div>
            <div class="fang-big">
              <img src="../../../public/img/images/person.png" alt="">
            </div>
          </div>
          <div v-if="diantiObj.status == 1">
            <div class="trangle-b" v-if="diantiObj.workstatus == 1">
              <span class="trangle trangle-bottom trangle-bottom-normal"></span>
              <span class="fang fang-bottom"></span>
            </div>
            <div class="trangle-b" v-if="diantiObj.workstatus == 0">
              <span class="trangle trangle-bottom trangle-bottom-active"></span>
              <span class="fang fang-bottom fang-active"></span>
            </div>
          </div>
          <div v-if="diantiObj.status == 0">
            <div class="trangle-b">
              <span class="trangle trangle-bottom trangle-bottom-normal"></span>
              <span class="fang fang-bottom"></span>
            </div>
          </div>
          <div v-else-if="diantiObj.status == 2">
            <div class="trangle-b">
              <span class="trangle trangle-bottom trangle-bottom-error"></span>
              <span class="fang fang-bottom fang-error"></span>
            </div>
          </div>
          <div v-if="diantiObj.status == 3">
            <div class="trangle-b">
              <span class="trangle trangle-bottom trangle-bottom-warning"></span>
              <span class="fang fang-bottom fang-warning"></span>
            </div>
          </div>
        </div>
        <div class="v-block"></div>
      </div>
      <div class="dianti-status">
        <div class="hvr-push"><img  src="../../../public/img/images/shexiangtou.png" alt="">摄像头</div>
        <div v-if="diantiObj.status == 1" class="status-normal">正常</div>
        <div v-if="diantiObj.status == 2" class="status-error">求救</div>
        <div v-if="diantiObj.status == 3" class="status-warning">故障</div>
        <div v-if="diantiObj.status == 0" class="status-stop">停止</div>
        <div v-if="diantiObj.workstatus == 1">上行</div>
        <div v-if="diantiObj.workstatus == 0">下行</div>
        <div>{{diantiObj.workfloor}}楼</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    diantiObj: {}
  },
  methods: {
    openDetail(){
      this.$emit('showDetail')
    }
  }
}
</script>

<style lang="scss" scoped>
.dianti-list {
    
    height: 100%;
    padding: 0 10px;
	  border: solid 1px #04add6;
    .dianti-c {
      display: flex;
      height: calc(100% - .45rem);
      justify-content: center;
      align-items: center;
      padding: 10px 0;
    }
    .detail {
      position: absolute;
      text-align: center;
      line-height: .3rem;
      cursor: pointer;
      right: 10px;
      top: 5px;
      width: .675rem;
      height: .3rem;
      background-image: linear-gradient(
        #2b425e, 
        #2b425e), 
      linear-gradient(
        #ddc221, 
        #ddc221);
      background-blend-mode: normal, 
        normal;
      border-radius: 4px;
      border: solid 1px #00566b;
    }
    .tianti-left {
      display: flex;
      .trangle-b {
        position: relative;
        height: .375rem;
        
        .trangle {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          
        }
        .trangle-top {
          top:-0.15rem
        }
      
        .trangle-bottom {
          bottom: -0.15rem;
        }
        .fang {
          position: absolute;
          width: .1rem;
          height: .1rem;
          background: #084374;
          left: 50%;
          transform: translateX(-50%);
        }
        .fang-active {
          background: #2cffb2;
        }
        .fang-top {
          top: .2rem;
        }
        .fang-bottom {
          bottom: .2rem;
        }
        &:first-child {
          margin-bottom: 5px;
        }
        &:last-child{
          margin-top: 5px;
        }
        .fang-error  {
          background: #eb3a3a;
        }
        .fang-warning  {
          background: #eb963a;
        }
      }
      .xiang {
        .fang-big{
          text-align: center;
          width: 1.125rem;
          height: 1.125rem;
          border-radius: 10px;
          background: #00ccff;
          margin-left: 10px;
          margin-right: 10px;
          img {
            margin-top: 10px;
          }
        }
      }
      .v-block {
        width: .125rem;
        background: #0cf;
      }
    }
    .dianti-status {
      margin-left: 50px;
      div {
        width: 1.075rem;
        height: .45rem;
        line-height: .45rem;
        text-align: center;
        font-size: .2rem;
        background-image: linear-gradient(
          #084374, 
          #084374), 
        linear-gradient(
          #58d9f9, 
          #58d9f9);
        
        &:not(:last-child){
          margin-bottom: 10px;
        }
      }
      div:first-child {
        border-radius: .2rem 0px .2rem 0px;
        background: #008c99;
        font-size: .175rem;
        height: .4rem;
        line-height: .4rem;
        cursor: pointer;
        img {
          vertical-align: middle;
        }
      }
      .status-norma {
        color: #00de00;
      }
      .status-stop {
        color: #3d698e;
      }
      .status-warning {
        color: #eb963a;
      }
      .status-error {
        color: #eb3a3a;
      }
    }
  }
.trangle {
  width: 0;
  height: 0;
  border: .1875rem solid transparent;
}
.trangle-top-normal {
  border-bottom: .2rem solid #084374;
}
.trangle-top-active {
  border-bottom: .2rem solid #2cffb2;
}
.trangle-bottom-active {
  border-top: .2rem solid #2cffb2;
}
.trangle-bottom-normal {
  border-top: .2rem solid #084374;
}
.trangle-top-error {
  border-bottom: .2rem solid #eb3a3a;
}
.trangle-bottom-error {
  border-top: .2rem solid #eb3a3a;
}
.trangle-top-warning {
  border-bottom: .2rem solid #eb963a;
}
.trangle-bottom-warning {
  border-top: .2rem solid #eb963a;
}
.title-common-box {
  border-bottom: none;
  border-top: none;
  position: relative;
  .text-common-1-level {
    .text-liner-bg {
      background: linear-gradient(to right, #00ebff, #102a48 30%);
    }
  }
}  
</style>