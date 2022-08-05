export default {
  state: {
    openFloorIndex: null,  // 设置楼的默认打开层数。 0 没有打开
    floorHeight: null // 当前楼层距离地面高度，地下室为负值，地上楼层为正值
  },
  mutations: {
    updateFloorIndex(state, num) {
      state.openFloorIndex = num
    },
    updateFloorHeight(state, num) {
      state.floorHeight = num
    }
  },
  getters: {
  },
  actions: {
  }
}
