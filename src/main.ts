import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import store from '@/store';


Vue.config.errorHandler = function (err, vm) {
  console.error(err);
};
Vue.config.productionTip = false;

Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
//1 全局变量太多
//2 严重依赖window


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
