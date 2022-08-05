<template>
  <div class="main-tree">
    <el-input v-if="searchShow"
      placeholder="输入关键字进行过滤"
      v-model="filterText">
      <i slot="prefix" class="el-input__icon el-icon-search"></i>
    </el-input>
    <el-scrollbar class="el-head-scroll">
      <el-tree 
        class="floor-tree"
        ref="floorTree" 
        v-loading="loading"
        element-loading-text="拼命加载中"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(0, 0, 0, 0.8)"
        :data="floorTreeData" 
        @node-click="getNodeData"
        @check-change="getSelectData" 
        @check="getCheckedNode"
        node-key="areaNo" 
        show-checkbox  
        :indent="indent"
        default-expand-all 
        :default-checked-keys="floorSelected"
        :filter-node-method="filterNode" 
        :check-strictly="true" 
        :props="defaultProps">
      </el-tree>
    </el-scrollbar>
    <div class="text-bg hvr-push" @click="getPingmianTu">2D</div>
  </div>
</template>

<script>
import {FLOORNAME} from '@/mock/mock_constant.js'
export default {
  name: 'dev-tree',
  props: {
    treeData: {
      default: [],
      type: Array
    },
    searchShow: false,
    // 楼层树调用来源，
    //  nenghao-dev-tree 能耗表记模块调用  
    // nenghao-area-tree 能耗区域模块调用 
    // zhaoming-dev-tree 智能照明模块调用
    callSource: {
      default: 'tree',
      type: String 
    },
    treeType: {
      default: 'floor',
      type: String
    },
    showType: null //当前应用模块来源
  },
  data() {
    return {
      filterText: '',
      defaultProps: {
        children: 'children',
        label: 'label'
      },
      editCheckd: null,
      loading: true,
      floorTreeData: [],
      floorSelected: [],
      indent: 10
    }
  },
  watch: {
    filterText(val) {
      this.$refs.floorTree.filter(val);
    },
    treeData: {
      handler(newV, oldV) {
        if(newV.length !=0 ){
          this.floorTreeData = this.formatTreeData(newV)
          this.loading = false
          // 加载完数据之后默认勾选第一层
          this.floorSelected = ['37140001010010']
        }
      },
      deep: true,
      immediate: true  
    },
    floorSelected: {
      handler(newV, oldV) {
        if(newV.length !=0 ){
          let key = newV[0]
          if(this.callSource == 'nenghao-dev-tree' 
          || this.callSource == 'zhaoming-dev-tree'
          || this.callSource == 'anquan-jiankong-tree') {
            this.openFloor(key)
          }
        }
      },
      immediate: true  
    }
  },
  mounted() {
    
  },
  methods: {
    filterNode(value, data) {
      if (!value) return true;
      return data.label.indexOf(value) !== -1
    },
    getNodeData(data, node) {
      console.log(data)
      
      this.editCheckd = data.areaNo
      if(data.levelType == 'device') {
        if(this.showType == 'zhaoming') {
          this.getLoopInfo(data)
          let ifr = document.getElementById('pmt-iframe')
          // 有打开2D平面图才发送数据
          if(ifr){
            ifr.contentWindow.postMessage(data, '*')
          }
          
        } else if(this.showType == 'nenghao') {
          this.getDevInfo(data, node.parent.data.areaNo)
        }
        this.getDevNodes(data, node.parent.data.areaNo)
      } else if(data.levelType == 'build'){
        EventBus.$emit('showZhaomingLoop')
      }
      console.log(node.parent.data.areaNo,this.$refs.floorTree.getCheckedKeys())
      // this.$refs.floorTree.setCheckedKeys([node.parent.data.areaNo])
    },
    getSelectData(item, checked){
      if(checked){
        this.editCheckd = item.areaNo
        this.$refs.floorTree.setCheckedKeys([item.areaNo])
      }else{
        if(this.editCheckd === item.id){
          this.$refs.floorTree.setCheckedKeys([item.areaNo])
        }
          
      }
    },
    getCheckedNode(data, node) {
      if(node.checkedKeys.length === 0) {
        this.$refs.floorTree.setCheckedKeys([data.areaNo])
        return
      } else {
        if( this.callSource == 'nenghao-dev-tree' 
          || this.callSource == 'zhaoming-dev-tree' 
          || this.callSource == 'anquan-jiankong-tree') 
        {
          this.openFloor(data.areaNo)
        }
        
      }
      if(this.callSource == 'nenghao-area-tree') {
        EventBus.$emit('checkedFloorData', data.areaNo)
      }
    },
    openFloor(key){
      EventBus.$emit('floorChange', {
        floorName: FLOORNAME[key].label_en,
        floorIndex: FLOORNAME[key].index
      })
    },
    // 格式化数据，只在楼层层级展示勾选框
    formatTreeData(data) {
      
      function formatData(data){
        for(let i = 0; i< data.length; i++) {
          if(data[i].levelType == 'floor') {
            data[i].showCheckbox = true
            data[i].label = FLOORNAME[data[i].areaNo]['label_zh']
          }  
          if(data[i].children) {
            formatData(data[i].children)
          }
        }
      }
      formatData(data)
      return data
    },
    getLoopInfo(data){
      this.$emit('loopinfo', data)
    },
    getDevInfo(data) {
      this.$emit('devInfo', data)
    },
    getPingmianTu(){
      EventBus.$emit('getPingmianTu')
    },
    /**
     * data 当前节点数据
     * key 当前节点父节点id
     */
    getDevNodes(data, key){
      let modelData = data.lightDevList && data.lightDevList[0].cadid
      EventBus.$emit('floorChange', {
        floorName: modelData,
        floorIndex: FLOORNAME[key].index,
        devList: data.lightDevList,
        devType: 'zhaoming'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.main-tree {
  height: 100%;
}
.el-head-scroll {
  height: calc(100% - 44px);
}
.el-tree {
  background: inherit;
  color: #fff;
  
}
::v-deep.el-tree .el-tree-node__content:hover{
  background: #002246;  
}
::v-deep.el-tree .el-tree-node:focus>.el-tree-node__content {
  background: #002246;  
}
::v-deep.el-input {
  padding: 10px;
}
::v-deep.el-input .el-input__inner {
  background: #051930;
  border: none;
  height: .375rem;
  line-height: .375rem;
  color: #fff;
  font-size: .175rem;
}
::v-deep .el-tree-node {
    white-space: normal;
    .el-tree-node__content {
      height: 100%;
      align-items: start;
    }
  }
.text-bg {
  background: url('../../../public/img/images/2d-bg.png')  50%/100% no-repeat;
  width: .5rem;
  height: .5rem;
  line-height: .5rem;
  text-align: center;
  cursor: pointer;
  color: #93ddff;
  position: absolute;
  top: 0;
  right: -.625rem;
  &:hover {
    color: #fff;
  }
}
</style>