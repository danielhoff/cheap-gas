<template>
  <div>
    <user-params @userSearchParams="getStationData"></user-params>
  </div>
</template>

<script>
import { STORE_CHEAP_GAS_FINDER } from '@/store/modules/cheap-gas-finder'
import { mapActions } from 'vuex'

import UserParams from '@/components/UserParams'

export default {
  name: 'CheapGasFinder',
  components: {
    UserParams
  },
  data () {
    return {
      APIKey: 'e8440f38-5c17-ef63-58ee-183f368c71a4'
    }
  },
  methods: {
    ...mapActions(STORE_CHEAP_GAS_FINDER, ['saveStationList']),
    async getStationData (userSelection) {
      const { data } = await this.$http.get(
        `https://creativecommons.tankerkoenig.de/json/list.php?lat=${userSelection.lat}&lng=${userSelection.lng}&rad=1.5&sort=dist&type=${userSelection.fuelType}&apikey=${this.APIKey}`
      )
      console.log(this)
      this.saveStationList(data.stations)
    }
  }
}
</script>
