<template>
  <div class="echart">
    <div ref="EchartInfo" :style="{ width: width, height: height }"></div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, ref, onMounted, withDefaults, watchEffect } from 'vue'
import { EChartsOption } from 'echarts'
import useEhart from '../hooks/index'
const EchartInfo = ref<HTMLElement>()

// props
const props = withDefaults(
  defineProps<{
    width?: string
    height?: string
    option: EChartsOption
  }>(),
  { width: '100% ', height: '360px' }
)

onMounted(() => {
  const { echartsIntans, addOptions } = useEhart(EchartInfo.value!)
  watchEffect(() => addOptions(props.option))
})
</script>
<style scoped lang="less"></style>
