<template>
  <div class="block">
    <div class="demonstration">{{ title }}({{ fileSize }})</div>
    <el-image style="width: 100%; height: 100%" :src="url" fit="fill"></el-image>
  </div>
</template>

<script>
export default {
  name: "ImageAndTitle",
  props: {
    url: {
      type: String,
      required: true,
      default: function() {
        return "";
      }
    },
    title: {
      type: String,
      required: true,
      default: function() {
        return "";
      }
    }
  },
  data() {
    return {
      fileSize: ""
    };
  },
  computed: {},
  mounted() {
    this.getSize(this.url).then(size => {
      this.fileSize = (size / 1024).toFixed(2) + "KB";
    });
  },
  methods: {
    async getSize(url) {
      const fileImg = await fetch(url).then(r => r.blob());
      console.log(fileImg, "fileImg");
      return fileImg.size;
    },
    imgLoad(url, callback) {
      const img = new Image();
      img.src = url;
      if (img.complete) {
        callback(img.width, img.height);
      } else {
        img.onload = function() {
          callback(img.width, img.height);
          img.onload = null;
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.block {
  width: 30%;
  float: left;
  margin: 0px 12px 0px 12px;
  .demonstration {
    width: 100%;
    float: left;
    text-align: center;
    line-height: 32px;
    height: 32px;
    font-size: 24px;
    margin: 0px 0px 32px 0px;
    font-weight: bold;
  }
}
</style>
