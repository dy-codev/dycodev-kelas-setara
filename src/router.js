import { createRouter, createWebHistory } from 'vue-router'
import KelasSetara from './components/KelasSetara.vue'
import RuangBelajar from './components/RuangBelajar.vue'
import StaffManagement from './components/StaffManagement.vue'

const routes = [
  { path: '/', component: KelasSetara },
  { path: '/ruang-belajar', component: RuangBelajar },
  { path: '/admin/staff', component: StaffManagement }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})