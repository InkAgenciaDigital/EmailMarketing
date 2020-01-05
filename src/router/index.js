import Vue from 'vue'
import Router from 'vue-router'
import Empresa from '@/components/Empresa'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Empresa',
      component: Empresa
    }
  ]
})
