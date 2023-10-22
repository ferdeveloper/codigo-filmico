import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import EpisodeListView from '../views/EpisodeListView/EpisodeListView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: EpisodeListView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
