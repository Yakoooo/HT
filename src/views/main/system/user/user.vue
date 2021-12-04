<template>
  <div class="user">
    <pageSearch :fromConfig="fromConfig"></pageSearch>
    <div class="userInfo">
      <pageContent :config="contentConfig" pageName="users"></pageContent>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { fromConfig } from './config/serch.config'
import pageSearch from '@/components/page-search/index'
import { useStore } from '@/store/index'
import pageContent from '@/components/page-content/index'
import { contentConfig } from './config/content.config'

export default defineComponent({
  name: 'user',
  setup() {
    const store = useStore()

    return { fromConfig, contentConfig }
  },
  components: { pageSearch, pageContent }
})
</script>

<style scoped></style>
