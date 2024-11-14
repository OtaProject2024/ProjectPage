import {createRouter, createWebHashHistory} from "vue-router";

const BASE_TITLE = "OtaProject2024 | ";
const routes = [
    {
        name: "Home",
        path: "/",
        component: () => import("./components/pages/home.vue"),
        meta: {title: BASE_TITLE + "Home"},
    },
    {
        name: "About",
        path: "/about",
        component: () => import("./components/pages/about.vue"),
        meta: {title: BASE_TITLE + "About"},
    },
    {
        name: "Members",
        path: "/members",
        component: () => import("./components/pages/members.vue"),
        meta: {title: BASE_TITLE + "Members"},
    },
    {
        name: "Activities",
        path: "/activities",
        component: () => import("./components/pages/activities.vue"),
        meta: {title: BASE_TITLE + "Activities"},
    },
    {
        name: "Contents",
        path: "/contents",
        component: () => import("./components/pages/contents.vue"),
        meta: {title: BASE_TITLE + "Contents"},
    },
    {
        name: "Sandbox",
        path: "/sandbox/:id",
        component: () => import("./components/pages/sandbox.vue"),
        beforeEnter: (to, from, next) => {
            const id = Number(to.params.id);
            if (id === 1 || id === 2 || id === 3) {
                next()
            } else {
                next({name: "NotFound"})
            }
        },
        meta: {title: BASE_TITLE + "Sandbox"},
    },
    {
        name: "NotFound",
        path: "/:pathMatch(.*)*",
        component: () => import("./components/pages/notFound.vue"),
        meta: {title: BASE_TITLE + "404 not found"},
    },
    {
        path: "/:pathMatch(.*)",
        component: () => import("./components/pages/notFound.vue"),
        meta: {title: BASE_TITLE + "404 not found"},
    },
];

const router = new createRouter({
    history: createWebHashHistory(),
    routes
});

const DEFAULT_TITLE = "OtaProject2024";
router.afterEach((to, from) => {
    document.title = to.meta.title || DEFAULT_TITLE;
});

export default router;
