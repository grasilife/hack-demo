<template>
  <div class="home">
    <VideoAndTitle :url="item.url" :title="item.title" :poster="item.poster" v-for="(item, index) in imageList" :key="index"></VideoAndTitle>
  </div>
</template>

<script>
import VideoAndTitle from "@/components/VideoAndTitle";
import poster from "../assets/poster.jpg";
import h264Video from "../assets/video/h.264-720p.mp4";
// import jpgImage from "../assets/image/f1-good-jpg.jpg";
// import webpImage from "../assets/image/f1-good-webp.webp";
export default {
  data() {
    return {
      imageList: [
        {
          url: h264Video,
          title: "h.264",
          poster: poster
        }
        // {
        //   url: webpImage,
        //   title: "webp"
        // },
        // {
        //   url: avifImage,
        //   title: "avif"
        // }
      ]
    };
  },

  components: { VideoAndTitle }
};
</script>
