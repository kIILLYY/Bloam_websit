import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/programmation",
    name: "Programmation",
    component: () => import("../views/Programmation.vue"),
  },
  {
    path: "/graphisme",
    name: "Graphisme",
    component: () => import("../views/Graphisme.vue"),
  },
  {
    path: "/gamedesign",
    name: "GameDesign",
    component: () => import("../views/GameDesign.vue"),
  },
  {
    path: "/link",
    name: "Link",
    component: () => import("../views/Link.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
