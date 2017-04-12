import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routesConfig'

Vue.use(VueRouter);

const router=new VueRouter({
    mode:'history',
    scrollBehavior:()=>({y:0}),
    routes
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
