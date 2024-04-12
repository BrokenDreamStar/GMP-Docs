<script setup>
import { ref } from "vue"

const props = defineProps({
  lang: {
    type: String,
    required: true,
  },
})

const zhImgList = ref([
  { imgName: "记录器" },
  { imgName: "经济系统" },
  { imgName: "拍卖行" },
  { imgName: "全球市场" },
  { imgName: "高度自定义" },
  { imgName: "个人档案" },
  { imgName: "个人邮箱" },
  { imgName: "管理员命令" },
])

const enImgList = ref([
  { imgName: "globalmarket" },
  { imgName: "PlayerAuctions" },
  { imgName: "mailbox" },
  { imgName: "profile" },
  { imgName: "currencies" },
  { imgName: "recorder" },
  { imgName: "Admin" },
  { imgName: "customizable" },
])
</script>

<template>
  <div class="container">
    <img class="title" src="/img/shared/插件介绍.webp" alt="" />
    <div class="introduce" v-if="lang === 'zh'">
      <img
        v-for="item in zhImgList"
        :key="item.id"
        :src="`/img/zh/${item.imgName}.webp`"
        alt="" />
    </div>
    <div class="introduce" v-if="lang === 'en'">
      <img
        v-for="item in enImgList"
        :key="item.id"
        :src="`/img/en/${item.imgName}.webp`"
        alt="" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.container {
  margin-top: 1.25rem;
  margin: 0 auto;
  width: 80%;
  height: 100%;

  .title {
    margin-bottom: 0.1875rem;
  }

  .introduce {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    img {
      display: block;
      box-sizing: border-box;
      padding: 0.1875rem;
      width: 50%;
      @media (max-width: 768px) {
        width: 100%;
      }
      height: fit-content;
    }
  }
}
</style>
