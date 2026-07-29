import Vue from "vue";
import VueRouter from "vue-router";
import ToursView from "@/views/ToursView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tours",
    component: ToursView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
