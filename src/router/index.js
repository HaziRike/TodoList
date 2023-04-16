import Vue from "vue";
import VueRouter from "vue-router";
import index from "../views/indexPage.vue";
import notePage from "../views/notePage.vue";
import indexPug from "../views/indexPuge.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: index,
  },
  {
    path: "/cart",
    name: "notepage",
    component: notePage,
    props: true,
  },
  {
    path: "/sult",
    name: "notepuge",
    component: indexPug,
    props: true,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
