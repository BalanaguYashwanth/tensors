import Vue from 'vue'
import App from './App.vue'
import Vuerouters from 'vue-router'
import VueGoogleCharts from 'vue-google-charts'
import Routers from './routers'
import Slider from '@jeremyhamm/vue-slider'
import Vuex from 'vuex'
import {store} from './store/store.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@/assets/css/main.css'
import FlashMessage from '@smartweb/vue-flash-message';

Vue.use(FlashMessage);
Vue.use(Vuex)
Vue.use(Slider)
Vue.use(Vuerouters)
Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Routers,
  store:store,
}).$mount('#app')

