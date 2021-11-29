<template>
  <div class="user">
    <cyjFrom v-bind="fromConfig" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import cyjFrom from '@/base-ui/CYJFrom/index'
import { fromConfig } from './config/serch.config'

export default defineComponent({
  name: 'user',
  setup() {
    return { fromConfig }
  },
  components: { cyjFrom }
})
</script>

<style scoped></style>
