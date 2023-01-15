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
  },
  {
    path: '/plinko',
    name: 'plinko',
    component: PlinkoView,
  },
  {
    path: '/roulette',
    name: 'roulette',
    component: RouletteView,
  },
  {
    path: '/crash',
    name: 'crash',
    component: CrashView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
