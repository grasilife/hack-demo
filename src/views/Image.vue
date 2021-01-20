<template>
  <div class="home">
    <ImageAndTitle :url="item.url" :title="item.title" v-for="(item, index) in imageList" :key="index"></ImageAndTitle>
  </div>
</template>

<script>
import ImageAndTitle from "@/components/ImageAndTitle";
import avifImage from "../assets/f1-good-avif.avif";
import jpgImage from "../assets/f1-good-jpg.jpg";
import webpImage from "../assets/f1-good-webp.webp";
export default {
  name: "Home",
  data() {
    return {
      imageList: [
        {
          url: jpgImage,
          title: "jpg"
        },
        {
          url: webpImage,
          title: "webp"
        },
        {
          url: avifImage,
          title: "avif"
        }
      ]
    };
  },

  components: { ImageAndTitle }
};
</script>
