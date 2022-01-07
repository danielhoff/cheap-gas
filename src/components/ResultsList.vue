<template>
  <ul>
      <li v-for="station in getStationList" :key="station.id">
          <result-listing :station="station"></result-listing>
      </li>
  </ul>
</template>

<script>
import { STORE_CHEAP_GAS_FINDER } from '@/store/modules/cheap-gas-finder'
import { mapGetters } from 'vuex'

import ResultListing from '@/components/ResultListing'

export default {
  name: 'ResultsList',
  components: {
    ResultListing
  },
  computed: {
    ...mapGetters(STORE_CHEAP_GAS_FINDER, ['getStationList'])
  }
}
</script>

<style>

</style>
