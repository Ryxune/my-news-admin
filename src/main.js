import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

axios.defaults.baseURL = "http://127.0.0.1:3000";

//路由守卫
router.beforeEach((to, from, next) => {
    let token = JSON.parse(localStorage.getItem("user") || '{}').token;
    if (token || to.path === '/login') {
      next();
    } else {
      next("/login");
    }
})

Vue.use(ElementUI);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
