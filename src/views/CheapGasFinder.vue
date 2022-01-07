<template>
  <div>
    <user-params @userSearchParams="getStationData"></user-params>
    <results-list></results-list>
  </div>
</template>

<script>
import { STORE_CHEAP_GAS_FINDER } from '@/store/modules/cheap-gas-finder'
import { mapActions } from 'vuex'

import UserParams from '@/components/UserParams'
import ResultsList from '@/components/ResultsList'

export default {
  name: 'CheapGasFinder',
  components: {
    UserParams,
    ResultsList
  },
  data () {
    return {
      APIKey: 'e8440f38-5c17-ef63-58ee-183f368c71a4',
      radius: 50 // distance of search in km
    }
  },
  methods: {
    ...mapActions(STORE_CHEAP_GAS_FINDER, ['saveStationList', 'saveSearchParams']),
    async getStationData (userSelection) {
      const { data } = await this.$http.get(
        `https://creativecommons.tankerkoenig.de/json/list.php?lat=${userSelection.lat}&lng=${userSelection.lng}&rad=${this.radius}&sort=${userSelection.sort}&type=${userSelection.fuelType}&apikey=${this.APIKey}`
      )

      this.saveSearchParams({
        brand: userSelection.brand,
        sort: userSelection.sort,
        fuelType: userSelection.fuelType,
        openStations: userSelection.openStations
      })
      this.saveStationList(data.stations)
    }
  }
}
</script>
