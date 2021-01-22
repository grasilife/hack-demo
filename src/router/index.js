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
    name: "Image",
    component: Image
  },
  {
    path: "/video",
    name: "Video",
    component: Video
  },
  {
    path: "/interactiveVideo",
    name: "InteractiveVideo",
    component: InteractiveVideo
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
