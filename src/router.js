import { createRouter, createWebHistory } from 'vue-router'
import { supabase } from './supabase.js'
import KelasSetara from './components/KelasSetara.vue'
import RuangBelajar from './components/RuangBelajar.vue'
import DashboardOverview from './components/DashboardOverview.vue'
import CourseManagement from './components/CourseManagement.vue'
import StaffManagement from './components/StaffManagement.vue'
import StaffLogin from './components/StaffLogin.vue'

const routes = [
  // --- Rute Publik ---
  { path: '/', component: KelasSetara },
  { path: '/ruang-belajar', component: RuangBelajar },
  
  // --- Pintu Gerbang Dasbor (Halaman Login Staf) ---
  { path: '/dash', component: StaffLogin }, 
  
  // --- Rute Menu Dasbor ---
  { path: '/dash/dashboard', 
    component: DashboardOverview, 
    meta: { requiresAuth: true } 
  },
  { 
    path: '/dash/staff-management', 
    component: StaffManagement,
    meta: { requiresAuth: true } 
  },
  { path: '/dash/course-management', 
    component: CourseManagement, 
    meta: { requiresAuth: true } 
  }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})

// ROUTE GUARD (Satpam Rute)
router.beforeEach(async (to, from, next) => {
  const isDashboardRoute = to.path.startsWith('/dash');
  
  if (to.meta.requiresAuth || isDashboardRoute) {
    const { data: { session } } = await supabase.auth.getSession()
    
    if (!session) {
      if (to.path !== '/dash') return next('/dash');
      return next();
    }
    
    // Jika punya tiket, dan mencoba masuk ke dalam dasbor
    if (session && isDashboardRoute && to.path !== '/dash') {
      const { data: staffRecord } = await supabase
        .from('staff')
        .select('id')
        .eq('id', session.user.id)
        .single();
        
      if (!staffRecord) {
        // PERBAIKAN: Ganti alert menjadi silent redirect ke halaman utama
        return next('/');
      }
    }
    
    if (session && to.path === '/dash') {
      return next('/dash/dashboard');
    }

    next();
  } else {
    next();
  }
})