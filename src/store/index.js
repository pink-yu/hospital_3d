import Vue from 'vue'
import Vuex from 'vuex'
import camera from './modules/camera'
import floor from '@/store/modules/floor'
import navbar from '@/store/modules/navbar'
import user from '@/store/modules/user'
import loading from '@/store/modules/loading'

import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    camera,
    floor,
    navbar,
    user,
    loading
  },
  getters
})

export default store