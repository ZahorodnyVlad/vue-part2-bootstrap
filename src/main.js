import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'

Vue.use(Vuelidate)


new Vue({
  el: '#app',
  render: function(h){
    return h(App)
  }
})
