import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from './supabase.js'
import KelasSetara from './components/KelasSetara.vue'
import RuangBelajar from './components/RuangBelajar.vue'
import StaffManagement from './components/StaffManagement.vue'
import StaffLogin from './components/StaffLogin.vue'

const routes = [
  // --- Rute Publik ---
  { path: '/', component: KelasSetara },
  { path: '/ruang-belajar', component: RuangBelajar },
  
  // --- Pintu Gerbang Dasbor (Halaman Login Staf) ---
  { path: '/dash', component: StaffLogin }, 
  
  // --- Rute Menu Dasbor ---
  { 
    path: '/dash/staff-management', 
    component: StaffManagement,
    meta: { requiresAuth: true } 
  },
  // Nanti saat halaman Ringkasan (Dashboard Utama) sudah dibuat:
  // { path: '/dash/dashboard', component: DashboardOverview, meta: { requiresAuth: true } },
  // Nanti saat halaman Manajemen Kursus dibuat:
  // { path: '/dash/course-management', component: CourseManagement, meta: { requiresAuth: true } }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// ROUTE GUARD (Satpam Rute)
router.beforeEach(async (to, from, next) => {
  if (to.meta.requiresAuth) {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      // Tendang ke halaman login utama dasbor
      next('/dash')
    } else {
      next()
    }
  } else {
    next()
  }
})