import { createRouter, createWebHistory } from 'vue-router';

import PromocodeView from '../views/PromocodeView.vue';
import PlinkoView from '../views/PlinkoView.vue';
import RouletteView from '../views/RouletteView.vue';
import CrashView from '../views/CrashView.vue';

const routes = [
  {
    path: '/',
    name: 'promocodes',
    component: PromocodeView,
    meta: {
      title: 'Vensus',
    },
  },
  {
    path: '/plinko',
    name: 'plinko',
    component: PlinkoView,
    meta: {
      title: 'Plinko',
    },
  },
  {
    path: '/roulette',
    name: 'roulette',
    component: RouletteView,
    meta: {
      title: 'Roulette',
    },
  },
  {
    path: '/crash',
    name: 'crash',
    component: CrashView,
    meta: {
      title: 'Crash',
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});
