<template>
  <div id="app">
  
    <router-view>
      <div slot="menu" > 
      <slider
        :width="300"
        format="push"
        direction="left"
        :opacity="0.15"
        :links="[
          { id: 1, text: 'Customer Details', url: 'http://localhost:8080/details' },
          { id: 2, text: 'Usages', url: 'http://localhost:8080/usages' },
          { id: 3, text: 'logout', url: 'http://localhost:8080/logout' },
        ]"
      ></slider>
    </div>
    </router-view>
  
  </div>
</template>

<script>
import Slider from "@jeremyhamm/vue-slider";
export default {
  name: "App",
  components: {
     slider: Slider,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
