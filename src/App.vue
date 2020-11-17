<template>
  <div id="app">
    <InputLocation v-if="!forecast" />
    <ShowWeather v-if="forecast" />
  </div>
</template>

<script>
import InputLocation from './components/InputLocation.vue'
import ShowWeather from './components/ShowWeather.vue'

export default {
  name: 'App',
  components: {
    InputLocation,
    ShowWeather
  },
  computed: {
    forecast () {
      return this.$store.state.forecast
    }
  },
  data: function() {
    return  {
      dataReceived: false
    }
  },
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
