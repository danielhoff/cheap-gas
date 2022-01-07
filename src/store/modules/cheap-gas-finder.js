import Vue from 'vue'

const SAVE_STATION_LIST = 'SAVE_STATION_LIST'
const SAVE_BRAND_PARAM = 'SAVE_BRAND_PARAM'
const SAVE_SORT_PARAM = 'SAVE_SORT_PARAM'
const SAVE_FUEL_TYPE_PARAM = 'SAVE_FUEL_TYPE_PARAM'
const SAVE_OPEN_STATIONS_PARAM = 'SAVE_OPEN_STATIONS_PARMS'

const state = {
  stationList: [],
  brand: null,
  sort: null,
  fuelType: null,
  openStations: null
}

const mutations = {
  [SAVE_STATION_LIST] (state, stationList) {
    Vue.set(state, 'stationList', stationList)
  },
  [SAVE_BRAND_PARAM] (state, brand) {
    Vue.set(state, 'brand', brand)
  },
  [SAVE_SORT_PARAM] (state, sort) {
    Vue.set(state, 'sort', sort)
  },
  [SAVE_FUEL_TYPE_PARAM] (state, fuelType) {
    Vue.set(state, 'fuelType', fuelType)
  },
  [SAVE_OPEN_STATIONS_PARAM] (state, openStations) {
    Vue.set(state, 'openStations', openStations)
  }
}

const actions = {
  /**
  * Saves a list of petrol stations from the API
  * @param stationList - data from API
  */
  saveStationList ({ commit, getters }, stationList) {
    const filteredStationList = getters.filterStationList(stationList)
    commit(SAVE_STATION_LIST, filteredStationList)
  },
  /**
  * Stores both the sort and fuel type params chosen by the user
  * @param brand - ESSO/ARAL etc
  * @param sort - dist/price
  * @param fuelType - all/individual fuel type
  */
  saveSearchParams ({ commit }, { brand, sort, fuelType, openStations }) {
    commit(SAVE_BRAND_PARAM, brand)
    commit(SAVE_SORT_PARAM, sort)
    commit(SAVE_FUEL_TYPE_PARAM, fuelType)
    commit(SAVE_OPEN_STATIONS_PARAM, openStations)
  }
}

const getters = {
  /**
  * filters station list further if required
  * @param stationList - full station list from API
  */
  filterStationList: (state, getters) => (stationList) => {
    // checks if list needs to be filtered by brand
    if (getters.getBrand !== 'all') {
      stationList = stationList.filter(station => station.brand === getters.getBrand)
    }

    // checks if needs to be filterd by open stations
    if (getters.getOpenStations) {
      stationList = stationList.filter(station => station.isOpen)
    }

    return stationList
  },
  /**
  * Returns the list of petrol stations
  * @param state
  */
  getStationList: state => state.stationList,
  /**
  * Returns the users brand choice
  * @param state
  */
  getBrand: state => state.brand,
  /**
  * Returns the users sorting choice
  * @param state
  */
  getSort: state => state.sort,
  /**
  * Returns the users fuelType choice
  * @param state
  */
  getFuelType: state => state.fuelType,
  /**
  * Returns the users openStations choice
  * @param state
  */
  getOpenStations: state => state.openStations
}

export const STORE_CHEAP_GAS_FINDER = 'cheapGasFinder'

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
