export default {
  state: {
    // 设置相机默认初始位置
    position: {
      x: 0,
      y: 80,
      z: 130
    },
    // 设置控制轨道默认初始位置
    controlsTargetPosition: {
      x: 0,
      y: 0,
      z: 0
    }
  },
  mutations: {
    updateCameraPosition(state, position) {
      state.position = position.cameraDefaultPosition
      state.controlsTargetPosition = position.controlsTargetPosition
    }
  },
  getters: {
  },
  actions: {
  }
}
