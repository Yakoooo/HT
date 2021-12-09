<template>
  <div class="pageSearch">
    <cyjFrom v-bind="fromConfig" v-model="fromData">
      <template #header>
        <h2>检索</h2>
      </template>
      <template #btn>
        <div>
          <el-button type="primary" @click="handleSearchClick" :icon="Search"
            >搜索</el-button
          >
          <el-button type="primary" @click="handleResetClick" :icon="Check"
            >重置</el-button
          >
        </div>
      </template>
    </cyjFrom>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import cyjFrom from '@/base-ui/CYJFrom/index'
export default defineComponent({
  name: 'pageSearch',
  props: ['fromConfig'],
  emits: ['clickSearch', 'clickReset'],
  setup(props, { emit }) {
    //输入的数据应该由配置文件决定
    const fromItem = props.fromConfig?.fromitem ?? []
    const fromDataOrg: any = {}

    for (const item of fromItem) {
      fromDataOrg[item.value] = ''
    }
    const fromData = ref(fromDataOrg)

    const handleResetClick = () => {
      fromData.value = fromDataOrg
      emit('clickSearch')
    }
    const handleSearchClick = () => {
      emit('clickSearch', fromData.value)
    }

    return { fromData, handleResetClick, handleSearchClick }
  },
  components: { cyjFrom }
})
</script>
<style scoped lang="less"></style>
