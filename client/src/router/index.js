import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      meta: {
        showNav: true
      }

    },
    {
      path: "/myshop",
      name: "myshop",
      component: () => import("../views/MyShopLayout.vue"),
      children: [
        {
          path: "voucher",
          name: "voucher",
          component: () => import("../views/MyShopVoucher.vue")
        }
      ]
    }
    // {
    //   path: "/about",
    //   name: "about",
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import("../views/Test2.vue"),
    // }
  ]
})

export default router
