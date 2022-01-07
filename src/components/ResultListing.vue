<template>
    <div class="result-listing">
        <div class="result-listing--address">
            <p>{{station.name}}</p>
            <p>{{station.houseNumber}} {{station.street}}</p>
            <p>{{station.postCode}}</p>
            <p>{{station.place}}</p>
        </div>
        <p class="result-listing--distance">{{station.dist}}km</p>
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
    }
  }
}
</script>

<style>

</style>
