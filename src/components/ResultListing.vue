<template>
    <div class="result-listing">
        <p class="result-listing--brand">{{station.brand}}</p>
        <div class="result-listing--address">
            <p>{{station.name}}</p>
            <p>{{station.houseNumber}} {{station.street}}</p>
            <p>{{station.postCode}}</p>
            <p>{{station.place}}</p>
        </div>
        <p class="result-listing--distance">{{station.dist}}km</p>
        <div v-if="fuelType==='all'" class="result-listing--prices">
            <p>e5: €{{station.e5}}</p>
            <p>e10: €{{station.e10}}</p>
            <p>Diesel: €{{station.diesel}}</p>
        </div>
        <div v-else class="result-listing--prices">
            <p>{{fuelType}}: €{{station.price}}</p>
        </div>
        <hr>
    </div>
</template>

<script>
export default {
  name: 'ResultListing',
  props: {
    station: {
      type: Object,
      default: () => {}
    },
    fuelType: {
      type: String,
      default: null
    }
  }
}
</script>

<style>

</style>
