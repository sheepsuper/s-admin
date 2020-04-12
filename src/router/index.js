import Vue from "vue";
import VueRouter from "vue-router";
import routes from "./router";
import { setDocumentTitle } from "@/lib/utils";

Vue.use(VueRouter);

const router = new VueRouter({
  routes
});

const HAS_LOGIN = true;

// 路由全局守卫
router.beforeEach((to, from, next) => {
  to.meta && setDocumentTitle(to.meta.title);
  if (to.name !== "login") {
    if (HAS_LOGIN) next();
    else next("/login");
  } else {
    if (HAS_LOGIN) next({ name: "home" });
    else next();
  }
});

// 路由全局后置钩子
// router.afterEach((to,from)={
//   // loading = false
// })

export default router;
