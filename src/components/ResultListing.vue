<template>
    <div class="result-listing">
        <div class="result-listing--col">
            <h2 class="result-listing--brand">{{station.brand}}</h2>
            <div class="result-listing--address">
                <h3>Address</h3>
                <p>{{station.name}}</p>
                <p>{{station.houseNumber}} {{station.street}}</p>
                <p>{{station.postCode}}</p>
                <p>{{station.place}}</p>
            </div>
        </div>
        <div class="result-listing--col">
            <div class="result-listing--meta">
                <p>{{station.dist}}km</p>
                <p v-if="station.isOpen" class="result-listing--is-open open">Open</p>
                <p v-else class="result-listing--is-open closed">Closed</p>
            </div>
            <h3 class="result-listing--prices-header">Prices</h3>
            <div v-if="fuelType==='all'" class="result-listing--prices">
                <p>e5: €{{station.e5}}</p>
                <p>e10: €{{station.e10}}</p>
                <p>Diesel: €{{station.diesel}}</p>
            </div>
            <div v-else class="result-listing--prices">
                <p>{{fuelType}}: €{{station.price}}</p>
            </div>
        </div>
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

<style lang="scss" scoped>
    .result-listing {
        display: flex;
        flex-wrap: wrap;
        position: relative;
        max-width: 35rem;
        margin: 0.5rem auto;
        padding: 1rem;
        font-size: 1.2rem;
        border: 0.1rem solid #E4E7ED;
        border-radius: 0.5rem;

        &--col {
            padding: 0 1rem;
            flex: 1 1 40%;
        }

        &--brand {
            font-size: 1.6rem;
        }

        &--meta {
            position: absolute;
            top: 1.1rem;
            right: 0.5rem;
            color: #909399;

            .open {
                color: #67C23A
            }

            .closed {
                color: #F56C6C;
            }
        }

        &--address {
            margin-top: 0.5rem;

            h3 {
                padding-top: 0.3rem;
                padding-bottom: 0.5rem;
            }
        }

        &--prices-header {
            padding-top: 2.9rem;
            padding-bottom: 0.5rem;
        }
    }
</style>
