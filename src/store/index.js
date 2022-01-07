import Vue from 'vue'
import Vuex from 'vuex'
import CheapGasFinder from '@/store/modules/cheap-gas-finder'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    'cheap-gas-finder': CheapGasFinder
  }
})
