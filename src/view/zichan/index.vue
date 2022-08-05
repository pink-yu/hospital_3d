<template>
  <div>
    <div class="zichan-left-box animate__animated animate__fadeInLeft">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">资产设备</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="single-main">
        <div class="search-block">
          <el-select v-model="value2" class="select-block" :popper-append-to-body="false" popper-class="select-down" placeholder="请选择" @change="change">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input class="search-main" :placeholder="holderText"  v-model="value">
          </el-input>
          <span class="el-icon-search search-text hvr-grow" @click="search"></span>
        </div>
        <!-- <div class="split-line"></div> -->
        <div class="block-list-2">
          <div class="block-list-2-head">
            <div class="item">设备编号</div>
            <div class="item">设备名称</div>
            <div class="item">设备类型</div>
            <div class="item">运行状态</div>
          </div>
          <el-scrollbar class="el-head-scroll">
            <div class="block-list-2-content">
              <div class="item-list hvr-sweep-to-right" v-for="(item, index) in devList" :key="index" @click="getPosition(item)">
                <div class="item">{{ item.devnum }}</div>
                <div class="item">{{ item.name }}</div>
                <div class="item">{{ item.type }}</div>
                <div class="item green" v-if="item.status === '正常'">{{ item.status }}</div>
                <div class="item error" v-if="item.status === '故障'">{{ item.status }}</div>
              </div>
            </div>
          </el-scrollbar>
        </div>
      </div>
    </div>
    <device-info :showType="showType"  v-if="show" :powerid="powerid"  />
  </div>
</template>

<script>
import { getDevlist } from '@/api/zichan'
import DeviceInfo from '@/components/device-info/index'
export default {
  name: 'device-search',
  components: {
    DeviceInfo,
  },
  data() {
    return {
      value: '',
      showType: '',
      show: false,
      holderText: '请输入设备名称',
      devId: '',
      devList: [
        {
          name: '摄像头',
          location: '门诊楼一层药房',
          index: 1,
          devnum: 'SJ00001',
          type: '监控设备',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-5_1547099',
          modelType: 'sxj',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '二级',
          warningText: '无网络',
          status: '正常'
        },
        {
          name: '日照灯',
          devnum: 'SJ00025',
          location: '门诊楼一层药房',
          status: '故障',
          index: 1,
          type: '照明设备',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          buildingName: 'menzhenlou_g',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1073996',
          time: '2021年9月27日 18:24:42',
          level: '二级',
          warningText: '不亮',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1073993',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '摄像头',
          location: '门诊楼一层大厅',
          index: 1,
          devnum: 'KJUI0699301',
          type: '监控设备',
          modelType: 'sxj',
          status: '故障',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1551174',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '一级',
          warningText: '告警测试'
        },
        {
          name: '摄像头',
          location: '门诊楼一层药房',
          devnum: 'KJUI0677301',
          index: 1,
          status: '故障',
          type: '监控设备',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1547636',
          modelType: 'sxj',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '告警测试'
        },
        {
          name: '格力空调',
          location: '门诊楼一层大厅',
          devnum: 'KJUYY9301',
          index: 1,
          type: '空调',
          modelType: 'chufengkou',
          modelurl: './model/menzhen_F1.glb',
          label: 'thbfk_1474332',
          time: '2021年9月27日 18:24:42',
          level: '一级',
          status: '正常',
          warningText: '告警测试',
          buildingName: 'menzhenlou_g'
        },
        {
          name: '日照灯',
          devnum: 'SJ00025',
          location: '门诊楼一层药房',
          status: '故障',
          index: 1,
          type: '照明设备',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          buildingName: 'menzhenlou_g',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1222414',
          time: '2021年9月27日 18:24:42',
          level: '二级',
          warningText: '不亮',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1070204',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1073993',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '摄像头',
          location: '门诊楼一层大厅',
          index: 1,
          devnum: 'KJUI0699301',
          type: '监控设备',
          modelType: 'sxj',
          status: '故障',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1551174',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '一级',
          warningText: '告警测试'
        },
        {
          name: '摄像头',
          location: '门诊楼一层药房',
          devnum: 'KJUI0677301',
          index: 1,
          status: '故障',
          type: '监控设备',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1547636',
          modelType: 'sxj',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '告警测试'
        },
        {
          name: '格力空调',
          location: '门诊楼一层大厅',
          devnum: 'KJUYY9301',
          index: 1,
          type: '空调',
          modelType: 'chufengkou',
          modelurl: './model/menzhen_F1.glb',
          label: 'thbfk_1474332',
          time: '2021年9月27日 18:24:42',
          level: '一级',
          status: '正常',
          warningText: '告警测试',
          buildingName: 'menzhenlou_g'
        },
        {
          name: '日照灯',
          devnum: 'SJ00025',
          location: '门诊楼一层药房',
          status: '故障',
          index: 1,
          type: '照明设备',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          buildingName: 'menzhenlou_g',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1222414',
          time: '2021年9月27日 18:24:42',
          level: '二级',
          warningText: '不亮',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1070204',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '日照灯',
          devnum: 'SJ00025',
          location: '门诊楼一层药房',
          status: '故障',
          index: 1,
          type: '照明设备',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          buildingName: 'menzhenlou_g',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1222414',
          time: '2021年9月27日 18:24:42',
          level: '二级',
          warningText: '不亮',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1070204',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1073993',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '摄像头',
          location: '门诊楼一层大厅',
          index: 1,
          devnum: 'KJUI0699301',
          type: '监控设备',
          modelType: 'sxj',
          status: '故障',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1551174',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '一级',
          warningText: '告警测试'
        },
        {
          name: '摄像头',
          location: '门诊楼一层药房',
          devnum: 'KJUI0677301',
          index: 1,
          status: '故障',
          type: '监控设备',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1547636',
          modelType: 'sxj',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '告警测试'
        },
        {
          name: '日照灯',
          devnum: 'SJ00025',
          location: '门诊楼一层药房',
          status: '故障',
          index: 1,
          type: '照明设备',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          buildingName: 'menzhenlou_g',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1222414',
          time: '2021年9月27日 18:24:42',
          level: '二级',
          warningText: '不亮',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1070204',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '日照灯',
          devnum: 'SJ00025',
          location: '门诊楼一层药房',
          status: '故障',
          index: 1,
          type: '照明设备',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          buildingName: 'menzhenlou_g',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1222414',
          time: '2021年9月27日 18:24:42',
          level: '二级',
          warningText: '不亮',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1070204',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '日照灯',
          devnum: 'SJ000991',
          location: '门诊楼一层手术室',
          index: 1,
          type: '照明设备',
          status: '故障',
          modelType: 'dingdeng',
          modelurl: './model/menzhen_F1.glb',
          powerid: '106N0000202207218HPP47XR5W',
          label: 'zmxt-5_1073993',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '闪烁',
        },
        {
          name: '摄像头',
          location: '门诊楼一层大厅',
          index: 1,
          devnum: 'KJUI0699301',
          type: '监控设备',
          modelType: 'sxj',
          status: '故障',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1551174',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '一级',
          warningText: '告警测试'
        },
        {
          name: '摄像头',
          location: '门诊楼一层药房',
          devnum: 'KJUI0677301',
          index: 1,
          status: '故障',
          type: '监控设备',
          modelurl: './model/menzhen_F1.glb',
          powerid: '108Z000420220722YVPMXNH67H',
          label: 'spjkxt-2_1547636',
          modelType: 'sxj',
          time: '2021年9月27日 18:24:42',
          buildingName: 'menzhenlou_g',
          level: '三级',
          warningText: '告警测试'
        }
      ],
      options: [
        {
          value: '1',
          label: '设备名称'
        }, {
          value: '2',
          label: '设备编号'
        }, {
          value: '3',
          label: '所属楼层'
        }, {
          value: '4',
          label: '设备类型'
        }, {
          value: '5',
          label: '运行状态'
        }
      ],
      copyList: [],
      value2: '1'
    }
  },
  mounted() {
    this.copyList = JSON.parse(JSON.stringify(this.devList))
    this.getDevlistData()
  },
  methods: {
    getDevlistData() {
      getDevlist().then((res) => {
        if(res.data.code == 0) {
          
        } else {
          this.$message.error('失败，请重试')
        }
      }).catch(err => {
        this.$message.error(err)
      })
    },
    getPosition(item) {
      this.powerid = item.powerid
      EventBus.$emit('flyToModel', {
        floorIndex: item.index,
        name: item.label,
        source: 'zichan',
        modelType: item.modelType
      })
      switch (item.modelType) {
        case 'sxj':
          this.showType = 'shipin'
          break;
        case 'dingdeng':
          this.showType = 'zhaoming2'
          break;  
        default:
          break;
      }
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
    search() {
      let val = this.value
      let type = this.value2
      if (val === '' || val === null) {
        this.devList = this.copyList
      } else {
        let list = this.copyList.filter((obj) => {
          if(type == 1) {
            if(obj.name.includes(val)){
              return obj
            }
          } else if (type == 2) {
            if(obj.devnum.includes(val)){
              return obj
            }
          } else if (type == 3) {
            if(obj.devnum.includes(val)){
              return obj
            }
          } else if (type == 4) {
            if(obj.type.includes(val)){
              return obj
            }
          } else if (type == 5) {
            if(obj.status.includes(val)){
              return obj
            }
          }
          
        })
        this.devList = list
      }
    },
    change(val) {
      this.value = ''
      switch (val) {
        case '1':
          this.holderText = '请输入设备名称'
          break;
        case '2':
          this.holderText = '请输入设备编号'
          break;
        case '3':
          this.holderText = '请输入所属楼层'
          break;
        case '4':
          this.holderText = '请输入设备类型'
          break;
        case '5':
          this.holderText = '请输入运行状态'
          break;    
        default:
          break;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.zichan-left-box {
  height: calc(100% - 60px);
  width: 5.375rem;
  position: absolute;
  top: 60px;
  z-index: 10;
  border-radius: 0rem .25rem 0rem 0rem;
	border: solid 1px rgba(0, 204, 255, 0.47);
  // background: rgba(50,73,96, 0.2);
  background-color: rgba(24, 49, 80, 0.6);
  .single-main {
    height: calc(100% - .45rem);
  }

  .el-head-scroll {
    height: calc(100% - .45rem - 1px);
  }

  .block-list-2 {
    margin: 0 10px;
    height: calc(100% - .45rem);
    padding-top: 10px;
    .block-list-2-head {
      height: .45rem;
      background: rgba(6,65,114, .6);
      margin-bottom: 4px;
    }
    .block-list-2-content {
      .item-list {
        cursor: pointer;
        transition: all .5s;
        background-color: rgba(17, 42, 72, 0.7);
        background-image: none;
      }
      .item-list:nth-child(even){
        background-color: rgba(6, 65, 114, 0.6);
      }
      .item-list:nth-child(odd){
        background-color: rgba(17, 42, 72, 0.7);
      }
      .item-list:hover {
        // background: #02718d;
        // font-size: 14px;
        transform: scale3d(1.05, 1.05, 1.05)
      }
    }

  }
  
}
.search-block {
  position: relative;
  height: .45rem;
  border-radius: 4px;
  margin: 0 10px;
  background-color: rgba(17, 42, 72, 0.7);
  .search-main {
    height: .45rem;
    padding-left: 100px;
    ::v-deep.el-input__inner{
      height: .45rem;
      padding-left: 0;
      color: #fff;
    }
    
  }
  ::v-deep.el-icon-search {
      position: absolute;
      right: 0;
      height: .45rem;
      width: .45rem;
      line-height: .45rem;
      text-align: center;
      cursor: pointer;
      &:before {
        font-size: .225rem;
      }
    }
}
.select-block {
  position: absolute;
  left: 0;
  z-index: 1;
  top: .0375rem;
    ::v-deep .el-input__inner {
      border: none;
      background-color: transparent;
      width: 85px;
      height: .375rem;
      padding-right: 0;
      padding-left: 10px;
      border-radius: 0;
      border-right: 1px solid #426590;
      color: #00ceff;
    }
    ::v-deep .el-input__icon {
      line-height: .375rem;
      width: 10px;
    }
    ::v-deep.el-select__caret {
      font-size: 12px;
    }
    ::v-deep.el-input__suffix {
      right: 4px;
    }
    &:hover .el-input__inner {
      border-color: #426590;
    }
  }
.title-common-box {
  border-bottom: none;
  .text-liner-bg {
  background-image: linear-gradient(90deg, 
		#00ebff 0%, 
		#a4bede 40%);
}
}
.hvr-sweep-to-right:before{
  background: #02718d;
}
::v-deep .el-select-dropdown {
  background: #183150;
  border: 1px  solid #00ceff;
  .popper__arrow {
    border-bottom-color: #00ceff!important;
    &:after {
      border-bottom-color: #183150!important;
    }
  }
  .el-select-dropdown__item {
    color: #fff;
  }
}
::v-deep .el-select-dropdown__item.hover,
::v-deep .el-select-dropdown__item:hover {
  background-color: rgba(6, 65, 114, 0.6);
}
::v-deep .el-select-dropdown__item.selected {
  color: #00ceff;
}
</style>