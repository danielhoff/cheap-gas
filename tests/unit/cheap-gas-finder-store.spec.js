import Vue from 'vue'
import Vuex from 'vuex'
import storeData from '@/store/modules/cheap-gas-finder'
import mockStationListResponse, { filteredByBrand } from './mock-station-list-response'

Vue.use(Vuex)
const store = new Vuex.Store(storeData)

describe('Store saving and filtering correctly', () => {
  beforeEach(() => {
    store.dispatch('saveStationList', mockStationListResponse)
  })

  it('station list data saves correctly without user selections', () => {
    expect(store.getters.getStationList).toEqual(mockStationListResponse)
  })

  it('station list data saves correctly with user selections - no filtering', () => {
    store.dispatch('saveSearchParams', {
      lat: '48.1351',
      lng: '11.5820',
      sort: 'dist',
      brand: 'all',
      fuelType: 'all',
      openStations: false
    })

    expect(store.getters.getStationList).toEqual(mockStationListResponse)
  })

  it('station list data saves correctly with user selections - with fuel type filtering', () => {
    store.dispatch('saveSearchParams', {
      lat: '48.1351',
      lng: '11.5820',
      sort: 'dist',
      brand: 'ESSO',
      fuelType: 'e5',
      openStations: false
    })

    expect(store.getters.getStationList).toEqual(filteredByBrand)
  })

  it('station list data saves correctly with user selections - with isOpen filtering', () => {
    store.dispatch('saveSearchParams', {
      lat: '48.1351',
      lng: '11.5820',
      sort: 'dist',
      brand: 'all',
      fuelType: 'e5',
      openStations: true
    })

    expect(store.getters.getStationList).toEqual(filteredByBrand)
  })
})
