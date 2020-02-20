import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Fiture from '../views/Fiture.vue';
import Game from '../views/Game.vue';
import Room from '../views/Room.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: '/test',
    name: "Fiture",
    component: Fiture
  },
  {
    path: '/game',
    name: "Game",
    component: Game
  },
  {
    path: '/room',
    name:'Room',
    component: Room
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
