export default {
  state: {
    showLoading: false
  },
  mutations: {
    showLoading(state) {
      state.showLoading = true
    },
    hideLoading (state) {
      state.showLoading = false
    }
  },
  getters: {
  },
  actions: {
  }
}
