<template>
  <div class="goods">
    <pageContent :config="contentConfig" pageName="goods">
      <template #imageUrl="value">
        <div>
          <el-image
            style="width: 60px; height: 60px"
            :src="value.row.imgUrl"
            :preview-src-list="[value.row.imgUrl]"
            :initial-index="1"
          >
          </el-image>
        </div>
      </template>
    </pageContent>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import pageContent from '@/components/page-content/index'
import { contentConfig } from './config/content.config'

export default defineComponent({
  name: 'goods',
  setup() {
    return { contentConfig }
  },
  components: { pageContent }
})
</script>

<style scoped></style>
