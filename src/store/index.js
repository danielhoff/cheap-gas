import Vue from 'vue'
import Vuex from 'vuex'
import cheapGasfinder, { STORE_CHEAP_GAS_FINDER } from '@/store/modules/cheap-gas-finder'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    [STORE_CHEAP_GAS_FINDER]: cheapGasfinder
  }
})
