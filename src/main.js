import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'
import swal from 'sweetalert'


import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1IjoiamVzdXNnMTAwMiIsImEiOiJja3pidnd1ZmMwbm1yMnZxbzdqN282dG9oIn0.J2WZGMiiI8RGlMTvBmXv4w';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  swal,
  mapboxgl,
  render: h => h(App)
}).$mount('#app')
