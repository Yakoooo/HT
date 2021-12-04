<template>
  <div class="role">
    <fromSeatch :fromConfig="fromConfig"></fromSeatch>
    <pageContent :config="contentConfig" pageName="users"></pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/index'
import fromSeatch from '@/components/page-search/index'
import { contentConfig } from './confiig/content.config'
import { fromConfig } from './confiig/serch.config'

export default defineComponent({
  name: 'role',
  setup() {
    return { contentConfig, fromConfig }
  },
  components: { pageContent, fromSeatch }
})
</script>

<style scoped></style>
