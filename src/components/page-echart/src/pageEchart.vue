<template>
  <div>
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/CYJEchart/index'
import { IEchartType } from '../types/types'

const props = defineProps<{ data: IEchartType }>()

const option = computed(() => {
  return {
    title: {
      text: '分类数据',
      subtext: 'Fake Data',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '分类数据',
        type: 'pie',
        radius: '50%',
        data: props.data,
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  }
})
</script>
<style scoped lang="less"></style>
