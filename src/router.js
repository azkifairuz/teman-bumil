import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
  routes: [
    // {
    //   path: "/",
    //   redirect: { name: "landing" },
    //   children: [
        {
          path: "/",
          name: "landing",
          component: () => import("@/pages/LandingPage.vue"),
        },
        {
          path: "/trimester-satu",
          name: "tmsatu",
          component: () => import("@/pages/BlogTm1.vue"),
        },
        {
          path: "/trimester-dua",
          name: "tmdua",
          component: () => import("@/pages/BlogTm2.vue"),
        },
        {
          path: "/trimester-tiga",
          name: "tmtiga",
          component: () => import("@/pages/BlogTm3.vue"),
        },
      ],
  //   },
  // ],
  history: createWebHistory(),
});
