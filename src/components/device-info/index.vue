<template>
  <div >
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'nenghao'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">设备基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list">
          <div>设备名称</div>
          <div>{{nenghaoObj.unitName}}</div>
        </div>
        <div class="b-list">
          <div>设备编号</div>
          <div>{{nenghaoObj.placeNo}}</div>
        </div>
        <div class="b-list">
          <div>所属设备分项</div>
          <div>{{nenghaoObj.label}}</div>
        </div>
        <div class="b-list">
          <div>设备品牌</div>
          <div>西门子</div>
        </div>
        <div class="b-list">
          <div>位置信息</div>
          <div>{{nenghaoObj.areaName}}</div>
        </div>
        <div class="b-list">
          <div>定位</div>
          <div><img class="hvr-pop" src="../../../public/img/images/local.png"></div>
        </div>
      </div>
      <div class="title-common-box title-box-top mt10">
        <div class="text-common-1-level">
          <div class="text-left">表计实时数据</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list-block">
          <div class="b-l"></div>
          <div class="b-r b-normal">
            <div class="text-yellow">A相</div>
            <div class="text-green">B相</div>
            <div class="text-error">C相</div>
          </div>
        </div>
        <div class="b-list-block">
          <div class="b-l">电压(V)</div>
          <div class="b-r">
            <div class="text-yellow">{{nenghaoDeviceData.dianyaA}}</div>
            <div class="text-green">{{nenghaoDeviceData.dianyaB}}</div>
            <div class="text-error">{{nenghaoDeviceData.dianyaC}}</div>
          </div>
        </div>
        <div class="b-list-block">
          <div class="b-l">电流(V)</div>
          <div class="b-r">
            <div class="text-yellow">{{nenghaoDeviceData.dianliuA}}</div>
            <div class="text-green">{{nenghaoDeviceData.dianliuB}}</div>
            <div class="text-error">{{nenghaoDeviceData.dianliuC}}</div>
          </div>
        </div>
        <div class="b-list-block">
          <div class="b-l">功率(V)</div>
          <div class="b-r">
            <div class="text-yellow">{{nenghaoDeviceData.gonglvA}}</div>
            <div class="text-green">{{nenghaoDeviceData.gonglvB}}</div>
            <div class="text-error">{{nenghaoDeviceData.gonglvC}}</div>
          </div>
        </div>
        <div class="b-list-block">
          <div class="b-l">功率因素(V)</div>
          <div class="b-r">
            <div class="text-yellow">{{nenghaoDeviceData.gonglvyinsuA}}</div>
            <div class="text-green">{{nenghaoDeviceData.gonglvyinsuB}}</div>
            <div class="text-error">{{nenghaoDeviceData.gonglvyinsuC}}</div>
          </div>
        </div>
        <div class="b-list b-list-2 mt10">
          <div>总电量</div>
          <div class="b-right">{{nenghaoDeviceData.total}}kwh</div>
        </div>
        <div class="b-list b-list-2">
          <div>总有功功率</div>
          <div class="b-right">{{nenghaoDeviceData.totalyougong}}kw</div>
        </div>
        <div class="b-list b-list-2">
          <div>总无功功率</div>
          <div class="b-right">{{nenghaoDeviceData.totalwugong}}kw</div>
        </div>
      </div>
    </div>
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'zhaoming'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">回路基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list b-list-2">
          <div>回路名称</div>
          <div class="b-right">{{zhaomingObj.name}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>当日照明时长</div>
          <div class="b-right">5h</div>
        </div>
        <div class="b-list b-list-2">
          <div>开关控制</div>
          <div class="b-right">
            <el-switch v-model="zhaomingObj.status" @change="swichChange"></el-switch>
          </div>
        </div>
        <div class="b-list b-list-2">
          <div>当日开关次数</div>
          <div class="b-right">{{zhaomingObj.onofftime}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>回路灯数量</div>
          <div class="b-right">{{zhaomingObj.lightCount}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>灯类型</div>
          <div class="b-right">日光灯</div>
        </div>
      </div>
    </div>
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'zhaoming2'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">设备基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list b-list-2">
          <div>设备名称</div>
          <div class="b-right">{{dataObj.unitName}}{{dataObj.cadid}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>设备类型</div>
          <div class="b-right">照明</div>
        </div>
        <div class="b-list b-list-2">
          <div>设备型号</div>
          <div class="b-right">{{dataObj.cadid}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>位置</div>
          <div class="b-right">{{dataObj.areaName}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>供应商</div>
          <div class="b-right">{{dataObj.supplierName}}</div>
        </div>
        <div class="b-list b-list-2">
          <div>灯类型</div>
          <div class="b-right">{{dataObj.unitName}}</div>
        </div>
      </div>
    </div>
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'menjin'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list">
          <div>设备名称</div>
          <div>门禁1</div>
        </div>
        <div class="b-list">
          <div>设备编号</div>
          <div>DB125896</div>
        </div>
        <div class="b-list">
          <div>设备型号</div>
          <div>HJ698-69</div>
        </div>
        <div class="b-list">
          <div>设备品牌</div>
          <div>西门子</div>
        </div>
        <div class="b-list">
          <div>位置信息</div>
          <div>外科楼一层护士站西北角</div>
        </div>
        
      </div>
      <div class="title-common-box title-box-top mt10">
        <div class="text-common-1-level">
          <div class="text-left">实时数据</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list b-list-2">
          <div>在线状态</div>
          <div class="b-right text-green">正常</div>
        </div>
        <div class="b-list b-list-2">
          <div>开合次数</div>
          <div class="b-right">15</div>
        </div>
        <div class="b-list b-list-2">
          <div>最近开门时间</div>
          <div class="b-right">2022年6月16日09:11:53</div>
        </div>
        <div class="b-list b-list-2">
          <div>最近开门卡号</div>
          <div  class="b-right">15</div>
        </div>
      </div>
    </div>
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'xiaofang'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list">
          <div>设备名称</div>
          <div>门禁1</div>
        </div>
        <div class="b-list">
          <div>设备编号</div>
          <div>DB125896</div>
        </div>
        <div class="b-list">
          <div>设备型号</div>
          <div>HJ698-69</div>
        </div>
        <div class="b-list">
          <div>设备品牌</div>
          <div>西门子</div>
        </div>
        <div class="b-list">
          <div>位置信息</div>
          <div>外科楼一层护士站西北角</div>
        </div>
        
      </div>
      <div class="title-common-box title-box-top mt10">
        <div class="text-common-1-level">
          <div class="text-left">实时数据</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list b-list-2">
          <div>在线状态</div>
          <div class="b-right text-green">正常</div>
        </div>
        <div class="b-list b-list-2">
          <div>当日报警次数</div>
          <div class="b-right">15</div>
        </div>
        <div class="b-list b-list-2">
          <div>最近报警时间</div>
          <div class="b-right">2022年6月16日09:11:53</div>
        </div>
      </div>
    </div>
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'ruqin'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list">
          <div>设备名称</div>
          <div>门禁1</div>
        </div>
        <div class="b-list">
          <div>设备编号</div>
          <div>DB125896</div>
        </div>
        <div class="b-list">
          <div>设备型号</div>
          <div>HJ698-69</div>
        </div>
        <div class="b-list">
          <div>设备品牌</div>
          <div>西门子</div>
        </div>
        <div class="b-list">
          <div>位置信息</div>
          <div>外科楼一层护士站西北角</div>
        </div>
        
      </div>
      <div class="title-common-box title-box-top mt10">
        <div class="text-common-1-level">
          <div class="text-left">实时数据</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list b-list-2">
          <div>在线状态</div>
          <div class="b-right text-green">正常</div>
        </div>
        <div class="b-list b-list-2">
          <div>当日入侵次数</div>
          <div class="b-right">15</div>
        </div>
        <div class="b-list b-list-2">
          <div>最近入侵时间</div>
          <div class="b-right">2022年6月16日09:11:53</div>
        </div>
      </div>
    </div>
    <div class="right-dev-info animate__animated animate__fadeInRight" v-if="showType == 'shipin'">
      <div class="title-common-box">
        <div class="text-common-1-level">
          <div class="text-left">基本信息</div>
          <div class="text-shu">|</div>
          <div class="text-liner-bg"></div>
        </div>
      </div>
      <div class="b-block">
        <div class="b-list">
          <div>设备名称</div>
          <div>{{dataObj.unitName}}{{dataObj.cadid}}</div>
        </div>
        <div class="b-list">
          <div>设备编号</div>
          <div>{{dataObj.cadid}}</div>
        </div>
        <div class="b-list">
          <div>设备型号</div>
          <div>HJ698-69</div>
        </div>
        <div class="b-list">
          <div>设备品牌</div>
          <div>{{dataObj.supplierName}}</div>
        </div>
        <div class="b-list">
          <div>位置信息</div>
          <div>{{dataObj.areaName}}</div>
        </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import { getZhaomingLoopInfo, zhaomingSingleLoopChange } from '@/api/zhaoming'
import { getNenghaoDevInfo } from '@/api/nenghao'
import { getDevDetail } from '@/api/zichan'
export default {
  props: ['showType', 'loopId', 'powerid'],
  data(){
    return {
      zhaomingObj: {
        status: ''
      },
      nenghaoObj: {},
      nenghaoDeviceData: {},
      value: '',
      dataObj: {},
    }
  },
  mounted(){
    if(this.showType == 'zhaoming'){
      this.getLoopInfo()
    } else if(this.showType == 'nenghao') {
      this.getNenghaoDevInfo()
    } else if(this.showType == 'zhaoming2') {
      this.getCommonDevDetail()
    } else if(this.showType == 'shipin') {
      this.getCommonDevDetail()
    }
      
  },
  methods: {
    getLoopInfo() {
      getZhaomingLoopInfo({loopId: this.loopId, type: '1'}).then((res) => {
        if(res.data.code == 0) {
          this.zhaomingObj = res.data.data
          this.zhaomingObj.loopId = this.loopId
          this.zhaomingObj.status = this.zhaomingObj.status == 0 ? false : true
        }
      })
    },
    swichChange(val) {
      zhaomingSingleLoopChange({loopId: this.zhaomingObj.loopId, status: val ? '1' : '0'}).then((res) => {
        if(res.data.code == 200) {

        }
      })
    },
    getNenghaoDevInfo() {
      getNenghaoDevInfo({powerid: this.powerid}).then(res => {
        if(res.data.code == 0) {
          this.nenghaoObj = res.data.data.deviceMsg
          this.nenghaoDeviceData = {
            dianya: [],
            dianyaA: '',
            dianyaB: '',
            dianyaC: '',
            dianliu: [],
            dianliuA: '',
            dianliuB: '',
            dianliuC: '',
            gonglv: [],
            gonglvA: '',
            gonglvB: '',
            gonglvC: '',
            gonglvyinsu: [],
            gonglvyinsuA: '',
            gonglvyinsuB: '',
            gonglvyinsuC: '',
            total: '',
            totalyougong: '',
            totalwugong: ''
          }
          res.data.data.deviceData.forEach((item) => {
            if(item.code == '0046' || item.code == '0047' || item.code == '0048') {
              this.nenghaoDeviceData.dianya.push({
                name: item.name,
                value: item.value
              })
            }
            if(item.code == '004c' || item.code == '004d' || item.code == '004e') {
              this.nenghaoDeviceData.dianliu.push({
                name: item.name,
                value: item.value
              })
            }
            if(item.code == '004f' || item.code == '0050' || item.code == '0051') {
              this.nenghaoDeviceData.gonglv.push({
                name: item.name,
                value: item.value
              })
            }
            if(item.code == '005b' || item.code == '005c' || item.code == '005d') {
              this.nenghaoDeviceData.gonglvyinsu.push({
                name: item.name,
                value: item.value
              })
            }
            if(item.code == '0063') {
              this.nenghaoDeviceData.total = item.value
            }
            if(item.code == '0052') {
              this.nenghaoDeviceData.totalyougong = item.value
            }
            if(item.code == '0056') {
              this.nenghaoDeviceData.totalwugong = item.value
            }
          })
          this.sortData(this.nenghaoDeviceData.dianya)
          this.sortData(this.nenghaoDeviceData.dianliu)
          this.sortData(this.nenghaoDeviceData.gonglv)
          this.sortData(this.nenghaoDeviceData.gonglvyinsu)
          this.nenghaoDeviceData.dianyaA = this.nenghaoDeviceData.dianya[0].value
          this.nenghaoDeviceData.dianyaB = this.nenghaoDeviceData.dianya[1].value
          this.nenghaoDeviceData.dianyaC = this.nenghaoDeviceData.dianya[2].value

          this.nenghaoDeviceData.dianliuA = this.nenghaoDeviceData.dianliu[0].value
          this.nenghaoDeviceData.dianliuB = this.nenghaoDeviceData.dianliu[1].value
          this.nenghaoDeviceData.dianliuC = this.nenghaoDeviceData.dianliu[2].value

          this.nenghaoDeviceData.gonglvA = this.nenghaoDeviceData.gonglv[0].value
          this.nenghaoDeviceData.gonglvB = this.nenghaoDeviceData.gonglv[1].value
          this.nenghaoDeviceData.gonglvC = this.nenghaoDeviceData.gonglv[2].value

          this.nenghaoDeviceData.gonglvyinsuA = this.nenghaoDeviceData.gonglvyinsu[0].value
          this.nenghaoDeviceData.gonglvyinsuB = this.nenghaoDeviceData.gonglvyinsu[1].value
          this.nenghaoDeviceData.gonglvyinsuC = this.nenghaoDeviceData.gonglvyinsu[2].value
        } else {
          this.$message.error(res.data.message)
        }
        
      })
    },
    getCommonDevDetail() {
      getDevDetail({powerid: this.powerid}).then((res) => {
        if(res.data.code == 0) {
          this.dataObj = res.data.data.deviceMsg
        } else {
          this.$message.error('失败，请重试')
        }
      })
    },
    sortData(data){
      data.sort((a, b) => {
        let x1 = a.name[0].toUpperCase()
        let x2 = b.name[0].toUpperCase()
        if(x1 < x2) {
          return -1
        }
        if (x1 > x2) {
            return 1
        }
        return 0
      })
    }
  }
  
}
</script>

<style lang="scss" scoped>
.right-dev-info {
  width: 4.7875rem;
	height: 9.325rem;
	background: rgba(15,37,64, 0.7);
	border: solid 1px #04add6;
  position: absolute;
  right: 10px;
  z-index: 11;
  top: 70px;
}
.b-block {
  margin-top: 10px;
  margin-bottom: 20px;
  .b-list {
    display: flex;
    height: .5rem;
    line-height: .5rem;
    div:first-child {
      color: #00eeff;
      flex: 2;
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
      .el-switch {
        background-image: none;
        width: .375rem;
        padding-left: 0;
      }
      ::v-deep.is-checked {
        .el-switch__core{
          background: transparent;
          border-color: #00e235;
          &:after{
            margin-left: -0.175rem;
            background: #00e235;
          }
        }
      }
      ::v-deep.el-switch__core{
        width: .375rem;
        height: .2125rem;
        background: transparent;
        &:after{
          width: .15rem;
          height: .15rem;
          margin-left: 0;
        }
      }
    }
  }
}

.title-common-box {
  border-bottom: none;
  
    border-bottom: none;
    border-top: none;
    background-image: linear-gradient(0deg, #0a2949 0%, #122a48 100%), linear-gradient(#0d1033, #0d1033);
      .text-liner-bg {
        background: linear-gradient(to right, #00ebff, #102a48 30%);
      }
  
}
.jiankong {
  .right-dev-info {
    height: inherit;
    top: 3.6rem;
  }
}
</style>