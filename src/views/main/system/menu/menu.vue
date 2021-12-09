<template>
  <div class="menu">
    <pageContent
      ref="pageContentRef"
      :config="contentConfig"
      pageName="menu"
    ></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { contentConfig } from './comfig/content.config'
import pageContent from '@/components/page-content/index'
export default defineComponent({
  name: 'menu',
  setup() {
    return { contentConfig }
  },
  components: { pageContent }
})
</script>

<style scoped></style>
