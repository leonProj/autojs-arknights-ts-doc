<template>
  <br>
  <img alt="image.png" :src="withBase(`/images/${src}`)" :width="width">
  <br>
</template>

<script setup>
import { withBase } from '@vuepress/client'
/**
 * @file 自定义图片组件添加上下换行和固定的图片目录
 */
defineProps({
  width: {
    type: [Number, String],
    default: null
  },
  src: {
    type: String,
    default: ''
  }
})
</script>

<style scoped>

</style>