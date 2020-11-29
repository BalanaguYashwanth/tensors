import Vue from 'vue'
import App from './App.vue'
import Vuerouters from 'vue-router'
import VueGoogleCharts from 'vue-google-charts'
import Routers from './routers'
import Slider from '@jeremyhamm/vue-slider'

Vue.use(Slider)
Vue.use(Vuerouters)
Vue.use(VueGoogleCharts)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router:Routers,
}).$mount('#app')

