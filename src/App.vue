<template>
  <div id="app">
    <h1>hack大赛</h1>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="图片" name="image"></el-tab-pane>
      <el-tab-pane label="视频" name="video"></el-tab-pane>
      <el-tab-pane label="互动视频" name="interactiveVideo"></el-tab-pane>
    </el-tabs>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "image"
    };
  },

  components: {},
  methods: {
    handleClick(e) {
      console.log(e);
      this.$router.push(`/${e.name}`);
    }
  }
};
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
