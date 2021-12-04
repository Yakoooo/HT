<template>
  <div class="bread">
    <el-breadcrumb separator="/">
      <template v-for="(item, index) in breadItem" :key="index">
        <el-breadcrumb-item :to="{ path: item.path }">{{
          item.name
        }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IbreadType } from '../types/types'
export default defineComponent({
  name: 'bread',
  props: {
    breadItem: {
      type: Array as PropType<IbreadType[]>,
      default: () => []
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped lang="less"></style>
