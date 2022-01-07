<template>
    <el-form :inline="true" :model="userSearchParams" class="demo-form-inline">
        <el-form-item label="Latitude">
            <el-input v-model="userSearchParams.lat" placeholder="Latitude"></el-input>
        </el-form-item>
        <el-form-item label="Longitude">
            <el-input v-model="userSearchParams.lng" placeholder="Longitude"></el-input>
        </el-form-item>
        <el-form-item label="Sort by">
            <el-select v-model="userSearchParams.sort" placeholder="Sort by">
                <el-option label="Distance" value="dist"></el-option>
                <!-- disabled due to sort defaulting to distance if fuel type is set to all
                see: https://creativecommons.tankerkoenig.de/ -->
                <el-option label="Price" value="price" :disabled="userSearchParams.fuelType === 'all'"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Brand">
            <el-select v-model="userSearchParams.brand" placeholder="Brand">
                <el-option label="All" value="all"></el-option>
                <el-option label="Agip" value="Agip"></el-option>
                <el-option label="ESSO" value="ESSO"></el-option>
                <el-option label="OMV" value="OMV"></el-option>
                <el-option label="ARAL" value="ARAL"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Fuel type">
            <el-select v-model="userSearchParams.fuelType" @change="fuelTypeChange" placeholder="Fuel type">
                <el-option label="All" value="all"></el-option>
                <el-option label="e5" value="e5"></el-option>
                <el-option label="e10" value="e10"></el-option>
                <el-option label="Diesel" value="diesel"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="Only open stations">
            <el-checkbox v-model="userSearchParams.openStations"></el-checkbox>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Search</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'UserParams',
  data () {
    return {
    // lat/lng set to Munich as default for easy testing
      userSearchParams: {
        lat: '48.1351',
        lng: '11.5820',
        sort: 'dist',
        brand: 'all',
        fuelType: 'all',
        openStations: false
      }
    }
  },
  methods: {
    /**
    * check to see if fuelType === 'all' and set sort param accordingly
    * as API defaults sorting to distance if fuel type is set to all
    * see: https://creativecommons.tankerkoenig.de/
    */
    fuelTypeChange () {
      if (this.userSearchParams.fuelType === 'all') {
        this.userSearchParams.sort = 'dist'
      }
    },
    /**
    * Form submit event is emitted up for the parent to deal with the API call
    */
    onSubmit () {
      this.$emit('userSearchParams', this.userSearchParams)
    }
  }
}
</script>

<style>

</style>
