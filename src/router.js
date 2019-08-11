import Vue from "vue";
import Router from "vue-router";
// import Home from "./views/Home.vue";

Vue.use(Router);

import views from "./views/index.vue";

import store from "./store";
// 3. 创建路由对象
var router = new Router({
  routes: [
    {
      path: "/404",
      component: () => import("@/views/404"),
      hidden: true
    },
    {
      path: "/401",
      component: () => import("@/views/401"),
      hidden: true
    },
    {
      path: "/",
      component: views,
      redirect: "/index"
    },

    {
      path: "/index",
      component: views,
      children: [
        {
          path: "",
          name: "ssss",
          component: () => import("./components/newsitems/index.vue") // meta: { title: 'Dashboard', icon: 'dashboard' }
        }
      ]
    },
    {
      path: "/account",
      component: () => import("./components/Account.vue"),
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("./components/accountitems/login.vue")
        },
        {
          path: "register",
          name: "register",
          component: () => import("./components/accountitems/register.vue")
        }
      ]
    },
    {
      path: "/news",
      component: views,
      children: [
        {
          path: "news-1",
          name: "zwzj",
          component: () => import("./components/newsitems/news-1.vue")
        },
        {
          path: "news-2",
          name: "ttkx",
          component: () => import("./components/newsitems/news-2.vue")
        }
      ]
    },
    {
      path: "/tech",
      component: views,
      children: [
        {
          path: "tech-1",
          name: "korw",
          component: () => import("./components/newsitems/tech-1.vue")
        },
        {
          path: "tech-2",
          name: "clcp",
          component: () => import("./components/newsitems/tech-2.vue")
        },
        {
          path: "tech-3",
          name: "netcommerce",
          component: () => import("./components/newsitems/tech-3.vue")
        }
      ]
    },
    {
      path: "/ent",
      component: views,
      children: [
        {
          path: "ent-1",
          name: "spnr",
          component: () => import("./components/newsitems/ent-1.vue")
        },
        {
          path: "ent-2",
          name: "cljy",
          component: () => import("./components/newsitems/ent-2.vue")
        }
      ]
    },
    {
      path: "/community",
      component: views,
      children: [
        {
          path: "community-1",
          name: "itlt",
          component: () => import("./components/newsitems/community-1.vue")
        },
        {
          path: "community-2",
          name: "bbssq",
          component: () => import("./components/newsitems/community-2.vue")
        }
      ]
    },
    {
      path: "/company",
      component: views,
      children: [
        {
          path: "company-1",
          name: "zst",
          component: () => import("./components/newsitems/company-1.vue"),
          meta: {
            requireAuth: true
          }
        },
        {
          path: "company-2",
          name: "ztf",
          component: () => import("./components/newsitems/company-2.vue"),
          meta: {
            requireAuth: true
          }
        }
      ]
    },
    {
      path: "/newslist",
      component: () => import("./components/Newslist.vue")
    },
    {
      path: "/1-1",
      component: () => import("./components/newsitems/1-1.vue"),
      meta: {
        requireAuth: true // 添加该字段，表示进入这个路由是需要登录的
      }
    },
    {
      path: "*",
      redirect: "/404",
      hidden: true
    }
  ]
});

import ElementUI from "element-ui";
// import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
import { Notification } from "element-ui";
router.beforeEach((to, from, next) => {
  const token = store.state.token;
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (token) {
      // 通过vuex state获取当前的token是否存在
      next();
    } else {
      console.log("该页面需要登陆");
      Notification.error({
        title: "警告401!",
        message: "请先登录!",
        type: "warning",
        showClose: false
      });

      next({
        path: "/401"
        // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
      });
    }
  } else {
    next();
  }
});

// 把路由对象暴露出去
export default router;

// export default new Router({
//   routes: [
//     {
//       path: "/",
//       name: "home",
//       component: Home
//     },
//     {
//       path: "/about",
//       name: "about",
//       // route level code-splitting
//       // this generates a separate chunk (about.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () =>
//         import(/* webpackChunkName: "about" */ "./views/About.vue")
//     }
//   ]
// });
