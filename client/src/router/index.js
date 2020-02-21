import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fiture from '../views/Fiture.vue';
import Game from '../views/Game.vue';
import Room from '../views/Room.vue';
import Finish from '../views/Finish.vue';

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/test',
    name: "Fiture",
    component: Fiture,
    meta: { requiresAuth: true },
  },
  {
    path: '/game/:id',
    name: "Game",
    component: Game,
    props: true,
    meta: { requiresAuth: true },
  },
  {
    path: '/room',
    name:'Room',
    component: Room,
    meta: { requiresAuth: true },
  },
  {
    path:'/finish',
    name:'Finish',
    component: Finish,
    meta: { requiresAuth: true },
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.id) {
      next({ name: 'Home' });
    } else {
      next();
    }
  } else {
    console.log('test')
    if (to.name === 'Home' && localStorage.id) {
      next({ name: 'Room' });
    }
    next();
  }
});

export default router;
