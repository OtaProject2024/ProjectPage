import { createRouter, createWebHashHistory } from "vue-router";

const BASE_TITLE = "OtaProject2024 | ";
const routes = [
  {
    path: "/",
    component: () => import("./components/pages/home.vue"),
    meta: { title: BASE_TITLE + "Home" },
  },
  {
    path: "/about",
    component: () => import("./components/pages/about.vue"),
    meta: { title: BASE_TITLE + "About" },
  },
  {
    path: "/members",
    component: () => import("./components/pages/members.vue"),
    meta: { title: BASE_TITLE + "Members" },
  },
  {
    path: "/activities",
    component: () => import("./components/pages/activities.vue"),
    meta: { title: BASE_TITLE + "Activities" },
  },
  {
    path: "/contents",
    component: () => import("./components/pages/contents.vue"),
    meta: { title: BASE_TITLE + "Contents" },
  },
  {
    path: "/:pathMatch(.*)*",
    component: () => import("./components/pages/notFound.vue"),
    meta: { title: BASE_TITLE + "404 not found" },
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import("./components/pages/notFound.vue"),
    meta: { title: BASE_TITLE + "404 not found" },
  },
];

const router = new createRouter({
  history: createWebHashHistory(),
  routes,
});

const DEFAULT_TITLE = "OtaProject2024";
router.afterEach((to, from) => {
  document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
