// router/index.ts
import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Menu from "../views/Menu.vue";
import Locations from "../views/Locations.vue";
import Contact from "../views/Contact.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/menu",
    component: Menu,
  },
  {
    path: "/locations",
    component: Locations,
  },
  {
    path: "/contact",
    component: Contact,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
