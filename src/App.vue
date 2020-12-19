<template>
  <div id="app" class="vue-tempalte">
  
      <nav class="navbar shadow bg-white rounded justify-content-between flex-nowrap flex-row fixed-top">
      <div class="container">
        <a class="navbar-brand float-left"  target="_blank">
           Tensors
        </a>
        <div v-show=!getaccess() >
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="nav-link pr-3" to="/login">Sign in</router-link>
          </li>
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/register">Sign up</router-link>
          </li>
        </ul>
        </div>

         <div v-show=getaccess() >
        <ul class="nav navbar-nav flex-row float-right">
          <li class="nav-item">
            <router-link class="btn btn-outline-primary" to="/logout">logout</router-link>
          </li>
         
        </ul>
        </div>



      </div>
    </nav>

    <!-- <paginate /> -->

  <div class="App">
      <div class="vertical-center">
        <div class="inner-block">
          <router-view>
      <div slot="menu" > 
      <slider
        :width="300"
        format="overlay"
        direction="left"
        :opacity="0.15"
        :links="[
          { id: 1, text: 'Home', url: 'http://localhost:8080/home' },
          { id: 2, text: 'logout', url: 'http://localhost:8080/logout' },
        ]"
      >
      </slider>
    </div>
    </router-view>
        </div>
      </div>
    </div>

 
  </div>
</template>



<script>
//import Paginate from 'vuejs-paginate'
import Slider from "@jeremyhamm/vue-slider";
export default {
  name: "App",
  components: {
     slider: Slider,
    // paginate:Paginate,
    
  },
  data(){
    return{
      access:'',
    }
  },

  methods:{

    getaccess:function(){
      if(localStorage.getItem('user-token'))
      {
        this.access=true
      }
      else{
        this.access=false
      }
      return this.access
    }

  }


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
