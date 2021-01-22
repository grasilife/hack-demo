<template>
  <div class="block">
    <div class="demonstration">{{ title }}</div>
    <div class="video">
      <div id="mse"></div>
      <div class="control">
        <div class="button">
          <el-button type="primary">主要按钮</el-button>
        </div>
        <div class="button">
          <el-button type="primary">主要按钮</el-button>
        </div>
      </div>
    </div>

    <!-- <video style="width: 100%; height: 100%" :src="url" controls :poster="poster" ref="video" @onplay="onplay">
      <source :src="url" />
    </video> -->
  </div>
</template>

<script>
import Player from "xgplayer";
export default {
  name: "VideoAndTitle",
  props: {
    list: {
      type: Array,
      required: true,
      default: function() {
        return [];
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
      url: "",
      poster: "",
      player: null
    };
  },
  computed: {},
  mounted() {
    this.init();
    this.player = new Player({
      id: "mse",
      url: this.url,
      fluid: true,
      videoInit: true,
      poster: this.poster
    });
    this.player.once("ready", () => {
      this.initEvent();
    });
  },
  methods: {
    init() {
      if (this.list.length != 0) {
        this.url = this.list[0].url;
        this.poster = this.list[0].poster;
      }
    },
    initEvent() {
      this.player.on("play", this.play);
      this.player.on("ended", this.ended);
    },
    play() {
      console.log("播放开始");
    },
    ended() {
      console.log("播放结束");
    },
    switchVideo(url) {
      this.player.src = url;
      this.player.play();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.block {
  width: 60%;
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
  .video {
    width: 100%;
    float: left;
    position: relative;
    .control {
      width: 100%;
      height: 56px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      position: absolute;
      bottom: 70px;
      z-index: 100;
      .button {
        flex: 1;
      }
    }
  }
}
</style>
