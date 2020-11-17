<template>
  <div class="gradientBg">
    <SearchBar />
  </div>
</template>

<script>
import SearchBar from "./SearchBar";

export default {
  name: 'InputLocation',
  components: {
    SearchBar
  },
  computed: {
    error () {
      return this.$store.state.error
    },
  },
  methods: {
    clearError () {
      this.$store.dispatch('clearError');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.gradientBg {
  /* bg */
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(255, 255, 255, 0.8)), linear-gradient(119.25deg, #102F7E -11.47%, #0C8DD6 3.95%, #1AA0EC 19.37%, #60C6FF 34.78%, #9BDBFF 50.19%, #B4DEDA 65.61%, #FFD66B 81.02%, #FFC178 96.44%, #FE9255 111.85%);
}
.inputContainer {
  position: absolute;
  width: 632px;
  height: 92px;
  top: 20%;
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
  from {top: 20%}
  to {top:50%}  
}

</style>
