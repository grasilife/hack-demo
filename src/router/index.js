import Vue from "vue";
import VueRouter from "vue-router";
import Image from "../views/Image.vue";
import Video from "../views/Video.vue";
import InteractiveVideo from "../views/InteractiveVideo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/image"
  },
  {
    path: "/image",
    name: "image",
    component: Image
  },
  {
    path: "/video",
    name: "video",
    component: Video
  },
  {
    path: "/interactiveVideo",
    name: "interactiveVideo",
    component: InteractiveVideo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
