<template>
    <el-form :inline="true" :model="userSearchParams" class="demo-form-inline">
        <el-form-item label="Latitude">
            <el-input v-model="userSearchParams.lat" placeholder="Latitude"></el-input>
        </el-form-item>
        <el-form-item label="Longitude">
            <el-input v-model="userSearchParams.lng" placeholder="Longitude"></el-input>
        </el-form-item>
        <el-form-item label="Fuel Type">
            <el-select v-model="userSearchParams.fuelType" placeholder="Fuel Type">
            <el-option label="All" value="all"></el-option>
            <el-option label="e5" value="e5"></el-option>
            <el-option label="e10" value="e10"></el-option>
            <el-option label="Diesel" value="diesel"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit">Find</el-button>
        </el-form-item>
    </el-form>
</template>

<script>
export default {
  name: 'UserParams',
  data () {
    return {
    // lat/lng set to Munich as defualt for easy testing
      userSearchParams: {
        lat: '48.1351',
        lng: '11.5820',
        fuelType: 'all'
      }
    }
  },
  methods: {
    onSubmit () {
      this.$emit('userSearchParams', this.userSearchParams)
    }
  }
}
</script>

<style>

</style>
