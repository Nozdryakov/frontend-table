import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Login from "@/views/Login.vue";
import Registration from "@/views/Registration.vue";
import Department from "@/views/Department.vue";
import Area from "@/views/Area.vue";

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/department',
    name: 'department',
    component: Department
  },
  {
    path: '/area',
    name: 'area',
    component: Area
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

router.afterEach((to) => {
  this.currentPath = to.path; // Обновляем текущий путь
});