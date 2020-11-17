<template>
  <div class="gradientBg" v-bind:style="{background: `linear-gradient(130.54deg, #9BDBFF -33.02%, #B4DEDA 52.01%, ${getGradientColor().color} 137.04%)`}">
    <SearchBar />
    <div class="weatherView">
      <WeatherView />
    </div>
  </div>
</template>

<script>

// - Also the background has a gradient where the end point is the color attached to the average temperature on the next 10 days.
const colorsGradient = [
  {maxTemp: -40, color: '#102F7E'},
  {maxTemp: -30, color: '#0C8DD6'},
  {maxTemp: -20, color: '#1AA0EC'},
  {maxTemp: -10, color: '#60C6FF'},
  {maxTemp: 0, color: '#9BDBFF'},
  {maxTemp: 10, color: '#B4DEDA'},
  {maxTemp: 20, color: '#FFD66B'},
  {maxTemp: 30, color: '#FFC178'},
  {maxTemp: 40, color: '#FE9255'},
];

import SearchBar from './SearchBar.vue';
import WeatherView from './WeatherView.vue';

export default {
  components: { SearchBar, WeatherView },
  name: 'InputLocation',
  computed: {
    averageNext10Days () {
      return this.$store.state.averageNext10Days
    },
  },
  methods: {
    getGradientColor () {
      return colorsGradient.find(color => color.maxTemp >= this.$store.state.averageNext10Days) ?
      colorsGradient.find(color => color.maxTemp >= this.$store.state.averageNext10Days) : 
      {maxTemp: 40, color: '#FE9255'}
    }
  }
}
</script>

<style scoped>
.gradientBg {
  /* bg */
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;

}

.inputContainer {
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
  animation-name: animateView;
  animation-duration: .5s;
  animation-fill-mode: forwards;
}

@keyframes animateView {
  from {top: 50%}
  to {top:20%}  
}

.weatherView{
  position: absolute;
  width: 632px;
  /* height: 92px; */
  top: 40%;
  left: 50%;
  opacity: 0;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  animation-name: animateForecast;
  animation-duration: .5s;
  animation-delay: .5s;
  animation-fill-mode: forwards;
}

@keyframes animateForecast {
  from {opacity: 0}
  to {opacity: 1}  
}
</style>



