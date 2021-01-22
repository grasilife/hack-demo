<template>
  <div class="home">
    <InteractiveVideoCom :list="list" title="创造一颗属于你的星球！23个星球形态+14种结局"></InteractiveVideoCom>
  </div>
</template>

<script>
import InteractiveVideoCom from "@/components/InteractiveVideoCom";
import poster from "../assets/poster.jpg";
import h264Video from "../assets/video/h.264-720p.mp4";
export default {
  data() {
    return {
      list: [
        {
          url: h264Video,
          poster: poster,
          children: [
            {
              url: h264Video,
              title: "降落在刚下过雨的草地上",
              children: [
                {
                  url: h264Video,
                  title: "回溯到上一个节点,继续主流线程"
                }
              ]
            },
            {
              url: h264Video,
              title: "降落在一只老鼠身上",
              children: [
                {
                  url: h264Video,
                  title: "与皮皮鼠的胃酸结合",
                  children: [
                    {
                      url: h264Video,
                      title: "告诉他们你们是天上派下来管理他们的神",
                      children: [
                        {
                          url: h264Video,
                          title: "回溯到上一个节点,继续主流线程"
                        }
                      ]
                    },
                    {
                      url: h264Video,
                      title: "跟他们一样低头吃肉",
                      children: [
                        {
                          url: h264Video,
                          title: "相信老细菌"
                        },
                        {
                          url: h264Video,
                          title: "相信那个病毒"
                        }
                      ]
                    }
                  ]
                },
                {
                  url: h264Video,
                  title: "与皮皮鼠的肌肉结合"
                }
              ]
            }
          ]
        }
      ]
    };
  },

  components: { InteractiveVideoCom }
};
</script>
