<template>
  <div class="dianti-info">
    <div class="dianti-left  animate__animated animate__fadeInLeft">
      <div class="dianti" v-for="(item, index) in diantiData" :key="index">
        <dianti v-for="(it, k) in item.list" :key="k" @showDetail="showDetail" :diantiObj="it"/>
      </div>
    </div>
    <ditanti-detail :devId="devId" v-if="show" class="animate__animated animate__fadeInRight"/>
  </div>
</template>

<script>
import DitantiDetail from './dianti-detail.vue'
import Dianti from './dianti.vue'
export default {
  components: {
    DitantiDetail,
    Dianti
  },
  data() {
    return {
      show: false,
      devId: 128,
      diantiData: [
        {
          list: [
            {
              label: 1,
              status: 1,
              workstatus: 1,
              workfloor: 9
            },
            {
              label: 2,
              status: 1,
              workstatus: 0,
              workfloor: -1
            }
          ]
        },
        {
          list: [
            {
              label: 3,
              status: 1,
              workstatus: 1,
              workfloor: 5
            },
            {
              label: 4,
              status: 0,
              workstatus: 0,
              workfloor: 1
            }
          ]
        },
        {
          list: [
            {
              label: 5,
              status: 2,
              workstatus: 0,
              workfloor: 8
            },
            {
              label: 6,
              status: 3,
              workstatus: 1,
              workfloor: 6
            }
          ]
        }
      ]
    }
  },
  mounted() {
    EventBus.$on('closeDianti',() => {
      this.show = false
    })
  },
  methods: {
    showDetail(){
      this.show = true
    }
  }
}
</script>

<style lang="scss" scoped>
.dianti-info {
  position: absolute;
  width: calc(100% - 0.875rem);
  height: 100%;
  padding-top: 60px;
  padding-bottom: 75px;
  left: 0.875rem;
  .dianti-left{
    position: absolute;
    top: 80px;
    z-index: 10;
    background: #0A2441;
    padding: 10px;
    left: 10px;
  }
  .dianti {
    display: flex;
    .dianti-list:not(:last-child) {
      margin-right: 10px;
    }
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
}
</style>