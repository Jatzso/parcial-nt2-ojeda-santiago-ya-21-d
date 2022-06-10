import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

import Tabla from './components/Tabla'
import Formulario from './components/Formulario'

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/formulario', component:Formulario},
        {path: '/tabla', component:Tabla}
    ]
})