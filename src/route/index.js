import { createRouter, createWebHistory } from "vue-router";

// Import your components
import Login from "@/views/Login.vue";
import Home from "@/views/Home.vue";
import signUp from "@/views/signUp.vue";
const routes = [
  {path: "/",component: Login,},
  { path: "/signUpForm", component: signUp },
  { path: "/home", component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
