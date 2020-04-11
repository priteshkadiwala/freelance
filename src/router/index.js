import Vue from 'vue';
import VueRouter from 'vue-router';
import feed from '@/components/feed/feed.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'feed',
    component: feed,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
