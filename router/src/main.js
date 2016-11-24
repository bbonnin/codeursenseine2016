import 'semantic-ui-css/semantic.css'
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history', // Other value: hash

  // Routes' definition
  routes: [ {
    path: '/talks',
    name: 'talks',
    component: require('./components/TalkList.vue')
  }, {
    path: '/talk/:id',
    name: 'talk',
    components: {
      default: require('./components/Talk.vue'),
      nav: require('./components/Nav.vue')
    }
  }, {
    path: '/speakers',
    name: 'speakers',
    component: require('./components/SpeakerList.vue')
  }, {
    // Default
    path: '*',
    redirect: '/talks'
  }]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
