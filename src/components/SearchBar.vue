<template>
  <div class="inputContainer d-flex">
    <div class="col-2 d-flex justify-content-center align-items-center">
      <div class="row">
        <img alt="Weather App logo" src="../assets/weather.svg">
      </div>
    </div>
    <div class="col-2 d-flex align-items-center">
      <div class="dropdown">
        <button class="btn btn-outline dropdown-toggle" type="button" v-on:click="showDropdown=!showDropdown">
          {{d.country}}
        </button>
        <div class="dropdown-menu" v-bind:class="[{ 'd-block': showDropdown }, 'd-none']">
          <button class="dropdown-item" 
            v-for="country in countries" :key="country"
            v-on:click="d.country=country;showDropdown=false;"
          >
            {{country}}
          </button>
        </div>
      </div>
    </div>
    <div class="col-8 d-flex align-items-center">
      <div class="row w-100">
        <div class="input-group">
          <input type="text" class="form-control" placeholder="Please enter your location..." v-model="d.cityName" v-on:click="resetSearch" >
          <div class="input-group-append">
            <button class="btn" type="button" v-on:click="() => getData(d)"><img class="img-fluid" src="../assets/search.svg"></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { countries } from "../assets/countries";
export default {
  name: 'SearchBar',
  methods: {
    getData (data) {
      this.$store.dispatch('getWeather', data);
    },
    resetSearch () {
      this.$store.dispatch('resetSearch');
    }
  },
  data: function() {
    return  {
      showDropdown: false,
      countries,
      d: {
        cityName: this.$store.state.currentLocation ? this.$store.state.currentLocation.cityName : '',
        country: this.$store.state.currentLocation ? this.$store.state.currentLocation.country : 'NL',
      }
    }
  },
}
</script>

<style scoped>
.inputContainer {
  z-index: 9999;
  position: absolute;
  width: 632px;
  height: 92px;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);

  background: linear-gradient(0deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.9)), #F8F8F8;
  box-shadow: 0px 2px 10px rgba(8, 21, 62, 0.15);
  border-radius: 16px;
}

.dropdown-menu{
  max-height: 40vh;
  overflow-y: auto;
}

</style>