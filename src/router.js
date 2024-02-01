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
            }
        ]
      }
    ],
    history: createWebHistory(),
})