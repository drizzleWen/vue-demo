import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routesConfig'
import axios from 'axios'
import Vuex from 'vuex'

Vue.use(VueRouter);
Vue.use(Vuex);

const router=new VueRouter({
    mode:'history',
    scrollBehavior:()=>({y:0}),
    routes
})

axios.interceptors.request.use(function (config) {  //配置发送请求的信息
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) { //配置请求回来的信息
    return response;
}, function (error) {
    return Promise.reject(error);
});

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
