import Vue from 'vue'

const SAVE_STATION_LIST = 'SAVE_STATION_LIST'

const state = {
  stationList: {}
}

const mutations = {
  [SAVE_STATION_LIST] (state, stationList) {
    Vue.set(state, 'stationList', stationList)
  }
}

const actions = {
  saveStationList ({ commit }, stationList) {
    commit(SAVE_STATION_LIST, stationList)
  }
}

const getters = {

}

export const STORE_CHEAP_GAS_FINDER = 'cheapGasFinder'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
