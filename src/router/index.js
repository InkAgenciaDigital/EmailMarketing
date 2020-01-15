import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/view/Login';
import Empresa from '@/view/Empresa';
import PrincipalEmpresa from '@/view/PrincipalEmpresa';
import Comportamiento from '@/view/Comportamiento';
import Objetivo from '@/view/Objetivo';
import Proceso from '@/view/Proceso';
import Lista from '@/view/Lista';
import Planificacion from '@/view/Planificacion';
import Calendario from '@/view/Calendario';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/principalEmpresa',
      name: 'PrincipalEmpresa',
      component: PrincipalEmpresa
    },
    {
      path: '/empresa',
      name: 'Empresa',
      component: Empresa
    },
    {
      path: '/comportamiento',
      name: 'Comportamiento',
      component: Comportamiento
    },
    {
      path: '/objetivo',
      name: 'Objetivo',
      component: Objetivo
    },
    {
      path: '/proceso',
      name: 'Proceso',
      component: Proceso
    },
    {
      path: '/lista',
      name: 'Lista',
      component: Lista
    },
    {
      path: '/planificacion',
      name: 'Planificacion',
      component: Planificacion
    },
    {
      path: '/calendario',
      name: 'Calendario',
      component: Calendario
    }
  ]
  
})
