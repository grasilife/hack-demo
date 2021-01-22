<template>
  <div class="block">
    <div class="demonstration">{{ title }}</div>
    <div class="video">
      <div id="mse"></div>
      <div class="control" v-if="showHandle">
        <div class="button" v-for="(item, index) in controlList" :key="index">
          <el-button type="primary" @click="switchVideo(item)">{{ item.title }}</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Player from "xgplayer";
import { Hash } from "@/utils/generateHash";
import { valInDeep } from "@/utils/arrayUtil";
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
      showHandle: false,
      url: "",
      poster: "",
      player: null,
      controlList: [],
      key: ""
    };
  },
  computed: {},
  created() {
    this.createHashTree(this.list);
    console.log(this.list, "this.list");
  },
  mounted() {
    this.init();
    this.player = new Player({
      id: "mse",
      url: this.url,
      fluid: true,
      videoInit: true,
      poster: this.poster,
      ignores: []
    });
    this.player.once("ready", () => {
      this.initEvent();
    });
  },
  methods: {
    createHashTree(list) {
      for (let i = 0; i < list.length; i++) {
        list[i].key = Hash.create(32);
        if (list[i].children && list[i].children.length != 0) {
          let childrenList = list[i].children;
          this.createHashTree(childrenList);
        }
      }
    },
    init() {
      if (this.list.length != 0) {
        this.url = this.list[0].url;
        this.poster = this.list[0].poster;
        this.setControlList(this.list[0].children);
        this.key = this.list[0].key;
      }
    },
    setControlList(list) {
      this.controlList = list;
    },
    initEvent() {
      this.player.on("play", this.play);
      this.player.on("ended", this.ended);
      this.player.on("timeupdate", this.timeupdate);
    },
    play() {
      console.log("播放开始");
    },
    ended() {
      console.log("播放结束");
    },
    timeupdate() {
      let currentTime = this.player.currentTime;
      let duration = this.player.duration;
      console.log(currentTime, duration - 0.2);
      if (currentTime > duration - 0.3) {
        //防止播放完成黑屏
        this.player.pause();
        this.finderChildren(this.key);
        this.showhandle(true);
      }
    },
    finderChildren(key) {
      const target = valInDeep(this.list, key, "key", "children");
      console.log(target, "target");
      if (target.length != 0) {
        if (target[0].children && target[0].children.length != 0) {
          this.setControlList(target[0].children);
        }
      }
    },
    showhandle(state) {
      this.showHandle = state;
    },
    switchVideo(item) {
      this.player.src = item.url;
      this.key = item.key;
      this.player.play();
      this.showhandle(false);
    }
  }
};
</script>

<style>
.xgplayer-skin-default.xgplayer-pause .xgplayer-start {
  display: none;
}
</style>

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
      z-index: 200;
      .button {
        flex: 1;
      }
    }
  }
}
</style>
