<template>
  <div class="kongjian animate__animated animate__fadeInLeft">
    <div class="kongjian-detail">
      <div class="item hvr-bounce-in" v-for="(item, index) in treeData" :key="index" @click="showRoom(item, index)" >
        <span>{{item.label}}</span>
        <!-- <span class="trangle trangle-right position"></span> -->
      </div>
    </div>
      <div v-if="show" class="room-detail animate__animated animate__fadeInLeft">
        <el-scrollbar class="el-head-scroll">
          <div class="room-main ">
            <div class="room-item hvr-bounce-in" v-for="(item, index) in roomData" :key="index" >
              <span>{{item.name}}</span>
            </div>
            <div class="empty" v-if="roomData.length ==0" >
              <div class="empty-text">暂无数据</div>
            </div>
            
          </div>
        </el-scrollbar>
      </div>
  </div>
</template>

<script>
import API from '@/api/api'
import { getArealist } from '@/api/kongjian'
export default { 
  data() {
    return {
      treeData: [],
      show: false,
      activeIndex: null,
      roomData: [
        {
          label: '急救中心大厅'
        },
        {
          label: '120调度室'
        },
        {
          label: '120值班室1'
        },
        {
          label: '120值班室2'
        },
        {
          label: '急诊药房'
        },
        {
          label: '收费挂号'
        },
        {
          label: '值班室'
        },
        {
          label: '护士站'
        },
        {
          label: '护士站配液室'
        },
        {
          label: '留观病房1'
        },
        {
          label: '静配中心药品通道1'
        },
        {
          label: '西侧备用间1'
        },
        {
          label: '急诊抢救治疗室'
        },
        {
          label: '心电图'
        },
        {
          label: 'B超室'
        },
        {
          label: '清创换药房1'
        },
        {
          label: '清创换药房2'
        },
        {
          label: '电梯厅'
        },
        {
          label: '女更衣室'
        },
        {
          label: '洁具清洗间'
        },
        {
          label: '医生值班室1'
        },
        {
          label: '医生值班室2'
        },
        {
          label: 'TPN药物调配间'
        },
        {
          label: '排药准备区'
        }
      ]
    }
  },
  mounted() {
    this.getFloorAndDeviceInfo()
  },
  methods: {
    getFloorAndDeviceInfo(){
      API.floorAndDeviceInfo().then((res) => {
        this.treeData = this.formatData(res.data.data.children)
      })
    },
    formatData(data) {
      let list = []
      function transArr(data) {
        for(let i = 0; i < data.length; i++) {
          if(data[i].children && data[i].children.length != 0) {
            transArr(data[i].children)
          } else {
            list.push(data[i])
          }
        }
        console.log(list)
      }
      
      transArr(data)
      return list
    },
    showRoom(item, index){
      getArealist({floorNo: item.areaNo}).then((res) => {
        if(res.data.code == 0) {
          this.roomData = res.data.data
        }
        
      })
      if(index != this.activeIndex) {
        this.show = false
        this.$nextTick(() => {
          this.show = true
          this.activeIndex = index
        })
      } else {
        this.show = !this.show
      }
      
    }
  }
}
</script>

<style lang="scss" scoped>
.trangle {
  position: absolute;
  width: 0;
  height: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
}
.trangle-right {
  border-left: 5px solid #038af9;
}
.position {
  top: 12px;
}
.kongjian {
  position: absolute;
  z-index: 10;
  height: 100%;
  min-width: 100px;
  .kongjian-detail {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    height: calc(7rem + 65px + 20px);
    background: rgba(25,49,81, .5);
    padding: 10px 8px;
    border-radius: 5px;
    .item  {
      background: url('../../../public/img/smart/bg_v_01.png') no-repeat 50%/100% 100%;
      position: relative;
      cursor: pointer;
      margin: 0 auto;
      text-align: center;
      height: .5rem;
      min-width: 1.25rem;
      line-height: .5rem;
      span {
        padding: 0 10px;
      }
      div {
        font-size: .2rem;
        width: .2rem;
        margin: 0 auto;
      }
      &:not(:last-child) {
        margin-bottom: 5px;
      }
    }
    .item:hover {
      background: url('../../../public/img/smart/bg_v_02.png') no-repeat 50%/100% 100%;
    }
    .item-active {
      background: url('../../../public/img/smart/bg_v_02.png') no-repeat 50%/100% 100%;
    }
    
  }
  .room-detail {
    position: absolute;
    left: calc(1.25rem + 16px + 10px);
    background: rgba(25,49,81, .5);
    height: calc(7rem + 65px + 20px);
    top: calc((100vh - (7rem + 65px + 20px))/2);
    .room-main {
      height: 100%;
      padding: 10px 10px;
    }
    .el-head-scroll {
      height: 100%;
    }
    .room-item {
      cursor: pointer;
      text-align: center;
      height: .5rem;
      min-width: 1.625rem;
      line-height: .5rem;
      border: 1px solid #00eeff;
      &:not(:last-child) {
        margin-bottom: 3px;
      }
    }
    .room-item:hover{
      color: #00eeff;
      border: 1px solid #fff;
    }
  }
}
.empty {
  // position: absolute;
  width: 120px;
  .empty-text {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>