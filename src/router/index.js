import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DataBinding from "../views/DataBinding.vue";
import DataBindingAttr from "../views/DataBingdingAttr.vue";
import DataBindingList from "../views/DataBindingList.vue";
import EventClick from "../views/EventClick.vue";
import EventChange from "../views/EventChange.vue";
import ComputeAndWatch from "../views/ComputeAndWatch";
import DataBindingList2 from "../views/DataBindingList2";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/databinding",
    name: "DataBinding",
    component: DataBinding,
  },
  {
    path: "/databindingAttr",
    name: "DatabindingAttr",
    component: DataBindingAttr,
  },
  {
    path: "/databindingList",
    name: "databindingList",
    component: DataBindingList,
  },
  {
    path: "/eventClick",
    name: "eventClick",
    component: EventClick,
  },
  {
    path: "/eventChange",
    name: "eventChange",
    component: EventChange,
  },
  {
    path: "/computedAndWatch",
    name: "computedAndWatch",
    component: ComputeAndWatch,
  },
  {
    path: "/dataBindingList2",
    name: "dataBindingList2",
    component: DataBindingList2,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
