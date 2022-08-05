<template>
  <div class="biaoji">
    <div class="biaoji-left animate__animated animate__fadeInLeft">
      <floor-dev-tree :treeData="treeData" :searchShow="searchShow"/>
    </div>
    <gongpeidian-room />
    <gongpeidian-device/>
  </div>
</template>

<script>
import FloorDevTree from '@/components/floor-dev-tree/floor-tree'
import GongpeidianRoom from './gongpeidian-room.vue'
import GongpeidianDevice from './gongpeidian-device.vue'


export default {
  components: {
    FloorDevTree,
    GongpeidianRoom,
    GongpeidianDevice
},
  data() {
    return {
      treeData: [{
        id: 1,
        label: '外科楼',
        showCheckbox: true,
        children: [{
          id: 4,
          label: '-1F',
          showCheckbox: true,
          children: [{
            id: 9,
            label: '配电房1',
            showCheckbox: true,
            children: [{
              id: 59,
              label: '配电柜1',
              showCheckbox: false,
            },{
              id: 60,
              label: '配电柜2',
              showCheckbox: false,
            }]
          }, {
            id: 10,
            label: '配电房2',
            showCheckbox: true
          }]
        }, {
          id: 2,
          label: '1F',
          showCheckbox: true
        }]
      }],
      searchShow: true,
      showType: 'zhaoming'
    }
  }
}
</script>

<style lang="scss" scoped>
.biaoji-left {
  width: 3.125rem;
	height: 9.55rem;
	border: solid 1px #04add6;
  margin-left: 10px;
  position: absolute;
  top: 70px ;
  left: 1rem;
  z-index: 11;
  background-image: linear-gradient(0deg, 
		#0a2949 0%, 
		#122a48 100%), 
	linear-gradient(
		#0d1033, 
		#0d1033);
}
</style>