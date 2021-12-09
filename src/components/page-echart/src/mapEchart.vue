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
import { convertData } from '../utilt/index'

const props = defineProps<{ data: IEchartType[] }>()

const option = computed(() => {
  return {
    backgroundColor: '#ffffff',
    tooltip: {
      trigger: 'item',
      formatter: function (params: any) {
        return params.name + ' : ' + params.value[2]
      }
    },
    legend: {
      orient: 'vertical',
      right: 20,
      top: 10,
      data: ['人数'],
      textStyle: {
        color: '#fff'
      }
    },
    visualMap: {
      min: 0,
      max: 200,
      left: 20,
      bottom: 20,
      calculable: true,
      text: ['高', '低'],
      inRange: {
        color: ['rgb(70, 240, 252)', 'rgb(250, 220, 46)', 'rgb(245, 38, 186)']
      },
      textStyle: {
        color: '#fff'
      }
    },
    geo: {
      map: 'china',
      roam: 'scale',
      label: {
        emphasis: {
          show: false
        }
      },
      itemStyle: {
        normal: {
          areaColor: 'rgb(19, 91, 153)',
          borderColor: 'rgb(9, 54, 95)'
        },
        emphasis: {
          areaColor: 'rgb(10, 105, 187)'
        }
      }
    },
    series: [
      {
        name: '人数',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(props.data),
        symbolSize: 12,
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false
          }
        },
        itemStyle: {
          emphasis: {
            borderColor: '#fff',
            borderWidth: 1
          }
        }
      },
      {
        type: 'map',
        map: 'china',
        geoIndex: 0,
        aspectScale: 0.75,
        tooltip: {
          show: false
        }
      }
    ]
    // dataset: {source: mapdata}
  }
})
</script>
<style scoped lang="less"></style>
