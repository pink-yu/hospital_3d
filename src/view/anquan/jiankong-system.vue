<template>
  <div class="jiankong">
    <div  class="jiankong-list">
      <el-row  class="jiankong-block height-100 animate__animated animate__fadeInDown">
        <el-col :span="6" class="height-100">
          <div class="height-50">
            <div>
              <h3>摄像头总数(台)</h3>
              <p>859</p>
            </div>
            <div>
              <h3>球机数量(台)</h3>
              <p>689</p>
            </div>
            <div>
              <h3>枪机数量(台)</h3>
              <p>170</p>
            </div>
          </div>
          <div class="height-50">
            <div>
              <h3>在线设备(台)</h3>
              <p>845</p>
            </div>
            <div>
              <h3>离线设备(台)</h3>
              <p>10</p>
            </div>
            <div>
              <h3>在线率</h3>
              <p>98%</p>
            </div>
          </div>
        </el-col>
        <el-col :span="18" class="height-100">
          <div class="camera">
            <div class="camera-m">
              <div class="camera-top">
                <div class="left text-normal">摄像机001</div>
                <div class="right hvr-push" @click="getDetail">详情</div>
              </div>
              <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
            </div>
            <div class="camera-m">
              <div class="camera-top">
                <div class="left text-normal">摄像机002</div>
                <div class="right hvr-push" @click="getDetail">详情</div>
              </div>
              <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
            </div>
            <div class="camera-m">
              <div class="camera-top">
                <div class="left text-normal">摄像机003</div>
                <div class="right hvr-push" @click="getDetail">详情</div>
              </div>
              <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
            </div>
            <div class="camera-m">
              <div class="camera-top">
                <div class="left text-normal">摄像机004</div>
                <div class="right hvr-push" @click="getDetail">详情</div>
              </div>
              <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
            </div>
            <div class="camera-m">
              <div class="camera-top">
                <div class="left text-normal">摄像机005</div>
                <div class="right hvr-push" @click="getDetail">详情</div>
              </div>
              <video src="../../../public/img/sample/Camera_in.mp4" muted="muted" loop="loop" controls="controls" autoplay="autoplay" style="height: 100%; width: 100%"></video>
            </div>
            <div class="more">
              <div class="hvr-push hvr-push" @click="getDetail">更多</div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="biaoji-left animate__animated animate__fadeInLeft">
      <floor-dev-tree :treeData="treeData" :searchShow="searchShow" :callSource="callSource" />
    </div>
    <jiankong-detail  v-if="show" />
  </div>
</template>

<script>
import FloorDevTree from '@/components/floor-dev-tree/floor-tree'
import JiankongDetail from './jiankong-detail.vue'

import API from '@/api/api'
export default {
  components: {
    FloorDevTree,
    JiankongDetail
  },
  data() {
    return {
      show: false,
      treeData: [],
      searchShow: true,
      callSource: 'anquan-jiankong-tree'
    }
  },
  mounted() {
    EventBus.$on('closeJiankong',() => {
      this.show = false
    })
    this.getFloorAndDeviceInfo()
  },
  methods: {
    getDetail() {
      this.show = true
    },
    getFloorAndDeviceInfo(){
      API.floorAndDeviceInfo().then((res) => {
        this.treeData = res.data.data.children
        console.log(this.treeData)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.jiankong {
  .jiankong-list {
    
    width: calc(100% - .875rem);
    margin-left: .875rem;
    position: absolute;
    z-index: 10;
    top: 70px;
    padding: 0 10px;
    .jiankong-block {
      padding:  .125rem;
      height: 2.35rem;
      background-image: linear-gradient(#0a2949, #0a2949), linear-gradient(#0d1033, #0d1033);
      .height-50 {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: center;
        p {
          background-color: #084374;
          width: 1.65rem;
          height: .45rem;
          line-height: .45rem;
          color: #00ecff;
          font-size: .225rem;
        }
        h3 {
         margin: 0 0 10px 0;
        }
      }
    }
    .camera {
      display: flex;
      justify-content: space-between;
      margin-left: 20px;
      .camera-m {
        width: 2.975rem;
        .camera-top {
          display: flex;
          justify-content: space-between;
          .left {
            color: #32effc;
          }
          .right {
            height: .3rem;
            line-height: .3rem;
            width: .675rem;
            text-align: center;
            line-height: 0.3rem;
            border: solid 1px #00566b;
            background: #2B425E;
            cursor: pointer;
            border-radius: 4px;
            &:hover {
              background: #00566b;
            }
          }
        }
        video {
          margin-top: 5px;
          width: 2.975rem;
	        height: 1.7375rem;
        }
      }
      .more {
        position: relative;
        width: 1.3375rem;
	      height: 1.7rem;
        background: #1B3655;
        top: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        div {
          width: .675rem;
          height: .3rem;
          border-radius: 4px;
          border: solid 1px #00566b;
          text-align: center;
          color: #07768a;
          cursor: pointer;
          &:hover {
            background: #3b689b;
            color: #00ecff;
          }
        }
      }
    }
  }
  .biaoji-left {
    top: 3.5rem;
  }
}

</style>