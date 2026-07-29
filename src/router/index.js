import Vue from "vue";
import VueRouter from "vue-router";
import ToursView from "@/views/ToursView.vue";
import TourSingleView from "@/views/TourSingleView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "tours",
    component: ToursView,
  },
  {
    path: "/tour/:id",
    name: "tour",
    component: TourSingleView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
