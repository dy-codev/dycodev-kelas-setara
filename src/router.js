import { createRouter, createWebHistory } from 'vue-router'
import KelasSetara from './components/KelasSetara.vue'
import RuangBelajar from './components/RuangBelajar.vue'

const routes = [
  { path: '/', component: KelasSetara },
  { path: '/ruang-belajar', component: RuangBelajar }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})