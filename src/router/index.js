import { createRouter, createWebHistory } from "vue-router";

import Home from "@/pages/home/Main.vue";
import FizzBuzz from "@/solutions/fizzbuzz/Main.vue";

const routes = [
  {
    path: "/",
    component: Home,
    meta: {
      title: "Homepage | Nocode Rebels",
    },
  },
  {
    path: "/solutions/question-one",
    name: "fizzbuzz",
    component: FizzBuzz,
    meta: {
      title: "Question One | Nocode Rebels",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return savedPosition || { left: 0, top: 0 };
  },
});

router.beforeEach((toRoute, fromRoute, next) => {
  let titleFromParams = toRoute.query?.pageTitle;

  if (titleFromParams) {
    window.document.title = `${titleFromParams}` + " | Nocode Rebels";
  } else {
    window.document.title =
      toRoute.meta && toRoute.meta.title ? toRoute.meta.title : "Home";
  }
  next();
});

export default router;