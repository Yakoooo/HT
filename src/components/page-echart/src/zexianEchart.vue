<template>
  <div>
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/CYJEchart/index'

const props = defineProps<{ xdata: string[]; data: number[] }>()

const option = computed(() => {
  return {
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: props.xdata
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data,
        type: 'line',
        areaStyle: {}
      }
    ]
  }
})
</script>
<style scoped lang="less"></style>
