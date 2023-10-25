import { createRouter, createWebHistory } from "vue-router";
import AboutUs from "./components/AboutUs.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    // { path: "/", redirect: "/" },
    { path: "/about-us", component: AboutUs },

    // { path: "/auth", component: UserAuth, meta: { requiresUnauth: true } },
  ],
});

export default router;
