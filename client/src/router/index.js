import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import MyShopLayout from "../views/MyShopLayout.vue"
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
      component: MyShopLayout,
      children: [
        {
          path: "",
          name: "myshophome",
          component: () => import("../views/MyShop.vue")
        },
        {
          path: "voucher",
          name: "voucher",
          component: () => import("../views/MyShopVoucher.vue")
        },
        {
          path: "voucherAdd",
          name: "voucherAdd",
          component: () => import("../views/MyShopVoucherAddAndUpdate.vue")
        },
        {
          path: "changeproduct",
          name: "changeproduct",
          component: () => import("../views/changeproduct.vue")
        },
        {
          path: "addproduct",
          name: "addproduct",
          component: () => import("../views/addproduct.vue")
        },
        {
          path: "voucherUpdate/:id",
          name: "voucherUpdate",
          component: () => import("../views/MyShopVoucherAddAndUpdate.vue")
        }



      ]
    },

    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue")

    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue")

    },
    {
      path: "/myaccount",
      name: "myaccount",
      component: () => import("../views/MyAccount.vue")

    },

    // {
    //   path: "/detail",
    //   name: "detail",
    //   component: () => import("../views/Detail.vue")
    // },
    {
      path: "/detail/:id",
      name: "product-detail",
      component: () => import("../views/Detail.vue"),
    },
    {
      path: "/cart",
      name: "cart-product",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/order",
      name: "order-product",
      component: () => import("../views/Order.vue"),
    },
    {
      path: "/about",
      name: "about-we",
      component: () => import("../views/About.vue"),
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
