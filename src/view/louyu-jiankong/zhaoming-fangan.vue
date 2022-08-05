<template>
  <div class="right-dev-info animate__animated animate__fadeInRight">
    <el-input
      placeholder="输入关键字进行过滤"
      v-model="filterText">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <div class="con-main">
      <div class="head-bg content-list">
        <div class="head-1">控制区域名称</div>
        <div class="head-2">控制回路</div>
        <div class="head-3">控制策略</div>
        <div class="head-4">开关控制</div>
      </div>
      <div class="content">
        <el-scrollbar style="height:100%">
          <div class="content-b">
            <div class="content-total" v-for="(item, index) in policyList" :key="index">
              <div  class="content-list content-even">
                <div class="div-1">{{item.areaName}}</div>
                <div class="div-2">
                  <span class="show text-oveflow">{{item.loopArr[0].loopName}}</span>
                  <span class="guan kai" v-if="item.loopArr[0].loopstatus ==1">开</span>
                  <span class="guan" v-else>关</span>
                  <span class="trangle trangle-bottom" @click="show1(item)"></span>
                  <div class="hide-list animate__animated animate__slideInDown" v-show="item.go1">
                    <div class="guan-position"  v-for="(it, i) in item.loopArr" :key="i">
                      <div class="guan-text">{{it.loopName}}</div>
                      <span v-if="it.loopstatus == 1"  class="guan">开</span>
                      <span v-else  class="guan">开</span>
                    </div>
                  </div>
                </div>
                <div class="div-3">
                  <span class="show2 text-oveflow">{{item.policyArr[0].policyName}}</span>
                  <span class="trangle trangle-bottom" @click="show2(item)"></span>
                  <div class="hide-list animate__animated animate__slideInDown" v-show="item.go2">
                    <div class="guan-position" v-for="(list, k) in item.policyArr" :key="k">
                      <div class="guan-text">{{list.startTime.substring(0, 5)}} - {{list.endTime.substring(0, 5)}}</div>
                      <span v-if="list.policyStatus == 1"  class="guan">开</span>
                      <span v-else  class="guan">开</span>
                    </div>
                  </div>
                </div>
                <div class="div-4">
                  <el-switch v-model="item.switch" @change="function(val){ return switchChange(item, val)}"></el-switch>
                </div>
              </div>
            </div>
          </div>
        </el-scrollbar>
        <loading v-if='showLoading'/>
      </div>
    </div>
  </div>
</template>

<script>
import { getZhaomingList, zhaomingLoopStateChange } from '@/api/zhaoming'
import Loading from '@/components/loading/loading'
import {mapState} from 'vuex'

export default {
  components: {
    Loading
  },
  data(){
    return {
      filterText: '',
      value: '',
      policyList: [],
      go1: false,
      go2: false
    }
  },
  computed:{
    ...mapState({
      showLoading: state => state.loading.showLoading
    })
  },
  mounted() {
    console.log(this.showLoading)
    this.getZhaomingPolicyList()
  },
  methods: {
    show1(item) {
      if (!item.go1) {
        this.$set(item, 'go1', false)
        item.go1 = !item.go1
      } else {
        item.go1 = !item.go1
      }
    },
    show2(item) {
      if (!item.go2) {
        this.$set(item, 'go2', false)
        item.go2 = !item.go2
      } else {
        item.go2 = !item.go2
      }
    },
    getZhaomingPolicyList() {
      this.$store.commit('showLoading')
      getZhaomingList({current: 1, size: 999}).then((res) => {
        this.policyList = res.data.data.records
        this.$store.commit('hideLoading')
        this.policyList.forEach((obj) => {
          if (obj.areaStatus === '1') {
            this.$set(obj, 'switch', true)
          } else {
            this.$set(obj, 'switch', false)
          }
        })
      })
    },
    switchChange(item, val) {
      let { areaId, policyId } = item
      let params = {
        areaId: areaId,
        policyId: policyId,
        status: val ? '1' : 0
      }
      zhaomingLoopStateChange(params).then((res) => {
        if (res.data.code === 200) {
          this.$message.success('状态更改成功')
        } else {
          this.$message.error('失败，请重试')
        }
      }).catch(err => {
        this.$message.error(err)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.right-dev-info {
  width: 6.1875rem;
  height: 9.325rem;
  background: rgba(15,37,64, 0.7);
  border: solid 1px #04add6;
  position: absolute;
  right: 10px;
  top: 70px;
  z-index: 11;
  .con-main {
    padding: 0 5px;
    height: calc(100% - .625rem);
    .head-bg {
      height: .45rem;
      line-height: .45rem;
      background-color: #09365E;
      .head-1 {
        flex: 2;
      }
      .head-2 {
        flex: 4;
        text-align: center;
      }
      .head-3 {
        flex: 2;
      }
    }
    .content {
      height: calc(100% - .45rem);
    }
    .content-total:nth-child(odd) {
      >.content-list {
        background: #112A48;
      }
    }
    .content-total:nth-child(even) {
      .content-even {
        background-color: #09365E;
      }
    }
    .content-list {
      display: flex;
      justify-content: space-between;
      height: .45rem;
      line-height: .45rem;
      padding: 0 8px;
      .trangle {
        position: relative;
        padding-left: 10px;
        cursor: pointer;
        &:before {
          right: -20px;
          top: -6px;
          content: '';
          position: absolute;
          width: 0;
          height: 0;
          border: .0625rem solid transparent;
        }
      }
      .trangle-bottom:before {
        border-top: .125rem solid #00ecff;
      }
      .trangle-right:before {
        border-left: .125rem solid #00ecff;
      }
      .show {
        width: 2rem;
        display: inline-block;
      }
      .show2 {
        display: inline-block;
      }
      .div-1 {
        flex: 2;
      }
      .div-2 {
        position: relative;
        flex: 4;
      }
      .div-3 {
        position: relative;
        flex: 2;
        .trangle {
          &:before {
            right: 0px;
          }
        }
      }
      .div-4 {
        padding-left: 10px;
        text-align: right;
      }
      .hide-list {
        background: #0A1D35;
        padding: 5px 8px;
        position: absolute;
        top: 0.45rem;
        z-index: 1;
        .guan-position {
          position: relative;
        }
        .guan-text {
          min-width: 1.5rem;
          margin-right: .25rem;
        }
        .guan {
          right: 0;
          top: .075rem;
        }
      }
      .guan {
        position: absolute;
        top: .075rem;
        width: .3rem;
        height: .3rem;
        line-height: .3rem;
        text-align: center;
        background: #1F3D61;
      }
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
::v-deep.el-input {
  padding: .125rem 5px;
}
::v-deep.el-input .el-input__inner {
  background: #051930;
  border: none;
  height: .375rem;
  line-height: .375rem;
  font-size: .175rem;
}
</style>
