export default {
  state: {
    navbarIndex: 1,  // 默认展示首页 
    navbarLabel: 'shouye'
  },
  mutations: {
    updateNavbarIndex(state, num) {
      state.navbarIndex = num
    },
    updateNavbarLabel(state, laebl) {
      state.navbarLabel = laebl
    }
  },
  getters: {
  },
  actions: {
  }
}
