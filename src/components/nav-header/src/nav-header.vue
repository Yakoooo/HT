<template>
  <div class="nav-header">
    <div class="iconFold">
      <el-icon @click="handleFlod"
        ><component :is="isFold ? 'expand' : 'fold'" />
      </el-icon>
    </div>
    <div class="useinfo">
      <div>面包屑</div>
      <navUseInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { Expand, Fold } from '@element-plus/icons'
import { defineComponent, ref } from 'vue'
import navUseInfo from './nav-useinfo.vue'
export default defineComponent({
  emits: ['onClickFold'],
  setup(porps, { emit }) {
    const isFold = ref(true)
    const handleFlod = (value: boolean) => {
      isFold.value = !isFold.value
      // console.log(isFold.value)
      emit('onClickFold', isFold.value)
    }
    return { handleFlod, isFold }
  },
  components: { Expand, Fold, navUseInfo }
})
</script>
<style scoped lang="less">
.nav-header {
  height: 100%;
  display: flex;
}
.iconFold {
  height: 100%;
  line-height: 60px;
  display: flex;
  align-items: center;
  .el-icon {
    font-size: 35px;
  }
  margin-right: 20px;
}
.useinfo {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 50px;
}
</style>
