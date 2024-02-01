import { createRouter, createWebHistory } from "vue-router";
export const router = createRouter({
    routes: [
      {
        path:"/",
        redirect:{name:"landing"},
        children:[
            {
                path:"landing",
                name:"landing",
                component:() => import("@/pages/LandingPage.vue")
            },
            {
              path:"trimester-satu",
              name:"tmsatu",
              component:() => import("@/pages/BlogTm1.vue")
          }
        ]
      }
    ],
    history: createWebHistory(),
})