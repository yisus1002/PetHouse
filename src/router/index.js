import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },
  {  path: '/nosotros',  name: 'Nosotros', component: () => import('../views/Nosotros.vue')},
  {  path: '/contactanos',  name: 'Contactanos', component: () => import('../views/Contactanos.vue')},
  {  path: '/preguntas',  name: 'Preguntas', component: () => import('../views/Preguntas.vue')},
  {  path: '/mascotas',  name: 'Mascotas', component: () => import('../components/Mascotas.vue')},
  {  path: '/productos',  name: 'Productos', component: () => import('../components/Producto.vue')},
  {  path: '/proveedor',  name: 'Proveedor', component: () => import('../components/Proveedor.vue')},
  {  path: '/clientes',  name: 'clientes', component: () => import('../components/Clientes.vue')},
  
  // { path: '/home/:name', name: 'Home',  component: () => import('../views/Home.vue') },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
