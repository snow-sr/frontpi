import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Blog from "../views/BlogView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: Blog,
    },
    {
      path: "/ong/:id",
      name: "ong",
      component: () => import("../views/OngView.vue"),
    },
  ],
});

export default router;
