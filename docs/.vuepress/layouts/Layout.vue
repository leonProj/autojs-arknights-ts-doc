<script setup>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue'
</script>

<template>
  <ParentLayout>
    <template #page-top>
      <div class="toc-wrapper">
        <b>本页目录</b>
        <Toc />
      </div>
    </template>
  </ParentLayout>
</template>

<style lang="css">
.toc-wrapper{
  position: fixed;
  float: right;
  top: 5.5rem;
  right: 0;
  width: 300px;
  overflow: auto;
}
@media (max-width: 1350px) {
  .toc-wrapper{
    display: none;
  }
}
</style>