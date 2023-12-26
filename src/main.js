import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Swal from 'sweetalert2'

Vue.config.productionTip = false

Vue.prototype.$swal = Swal // Make Swal available globally in your Vue components

new Vue({
  render: h => h(App),
}).$mount('#app')
