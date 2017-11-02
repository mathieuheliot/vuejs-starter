
import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;

new Vue({
  el: '#myApplication',
  template: '<App/>',
  components: { App }
});