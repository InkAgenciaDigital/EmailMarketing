import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/view/Login';
import Empresa from '@/view/Empresa';
import PrincipalEmpresa from '@/view/PrincipalEmpresa';
import PrincipalPersona from '@/view/PrincipalPersona';
import Persona from '@/view/Persona';
import Proyecto from '@/view/Proyecto';
import PrincipalProyecto from '@/view/PrincipalProyecto';
import PrincipalMedio from '@/view/PrincipalMedio';
import Medio from '@/view/Medio';
import PrincipalComportamiento from '@/view/PrincipalComportamiento';
import Comportamiento from '@/view/Comportamiento';
import PrincipalObjetivo from '@/view/PrincipalObjetivo';
import Objetivo from '@/view/Objetivo';
import PrincipalProceso from '@/view/PrincipalProceso';
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
      path: '/principalPersona',
      name: 'PrincipalPersona',
      component: PrincipalPersona
    },
    {
      path: '/Persona',
      name: 'Persona',
      component: Persona
    },
    {
      path: '/principalProyecto',
      name: 'PrincipalProyecto',
      component: PrincipalProyecto
    },
    {
      path: '/Proyecto',
      name: 'Proyecto',
      component: Proyecto
    },
    {
      path: '/principalMedio',
      name: 'PrincipalMedio',
      component: PrincipalMedio
    },
    {
      path: '/Medio',
      name: 'Medio',
      component: Medio
    },
    {
      path: '/principalComportamiento',
      name: 'PrincipalComportamiento',
      component: PrincipalComportamiento
    },
    {
      path: '/comportamiento',
      name: 'Comportamiento',
      component: Comportamiento
    },
    {
      path: '/principalObjetivo',
      name: 'PrincipalObjetivo',
      component: PrincipalObjetivo
    },
    {
      path: '/objetivo',
      name: 'Objetivo',
      component: Objetivo
    },
    {
      path: '/principalProceso',
      name: 'PrincipalProceso',
      component: PrincipalProceso
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
