<template>
    <div class="results-listing--container">
        <div v-for="station in getStationList" :key="station.id">
            <result-listing :station="station" :fuelType="getFuelType"></result-listing>
        </div>
    </div>
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
    ...mapGetters(STORE_CHEAP_GAS_FINDER, ['getStationList', 'getFuelType'])
  }
}
</script>

<style>

</style>
