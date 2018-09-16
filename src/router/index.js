import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Wave from '@/components/Wave'
import ShowWave from '@/components/ShowWave'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ShowWave',
      component: ShowWave
    }
  ]
})
