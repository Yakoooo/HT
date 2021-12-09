<template>
  <div>
    <baseEchart :option="option"></baseEchart>
  </div>
</template>

<script lang="ts" setup>
import { defineComponent, defineProps, computed } from 'vue'
import baseEchart from '@/base-ui/CYJEchart/index'
import { IEchartType } from '../types/types'
import * as echarts from 'echarts'

const props = defineProps<{ xdata: string[]; data: number[] }>()

const option = computed(() => {
  return {
    xAxis: {
      data: props.xdata,
      axisLabel: {
        inside: true,
        color: '#fff'
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      z: 10
    },
    yAxis: {
      axisLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#999'
      }
    },
    dataZoom: [
      {
        type: 'inside'
      }
    ],
    series: [
      {
        type: 'bar',
        showBackground: true,
        itemStyle: {
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            { offset: 0, color: '#83bff6' },
            { offset: 0.5, color: '#188df0' },
            { offset: 1, color: '#188df0' }
          ])
        },
        emphasis: {
          itemStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              { offset: 0, color: '#2378f7' },
              { offset: 0.7, color: '#2378f7' },
              { offset: 1, color: '#83bff6' }
            ])
          }
        },
        data: props.data
      }
    ]
  }
})
</script>
<style scoped lang="less"></style>
