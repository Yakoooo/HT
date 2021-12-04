<template>
  <div class="nav-header">
    <div class="iconFold">
      <el-icon @click="handleFlod"
        ><component :is="isFold ? 'expand' : 'fold'" />
      </el-icon>
    </div>
    <div class="useinfo">
      <div>
        <bread :breadItem="breadItem" />
      </div>
      <navUseInfo />
    </div>
  </div>
</template>

<script lang="ts">
import { Expand, Fold } from '@element-plus/icons'
import { defineComponent, ref, computed } from 'vue'
import navUseInfo from './nav-useinfo.vue'
import bread from '@/base-ui/CYJbread/index'
import type { IbreadType } from '@/base-ui/CYJbread/types/types'
import { mapRouterPathName } from '@/utilt/map-menus'
import { useRoute } from 'vue-router'
import { useStore } from '@/store'
export default defineComponent({
  emits: ['onClickFold'],
  setup(porps, { emit }) {
    const isFold = ref(true)
    const handleFlod = (value: boolean) => {
      isFold.value = !isFold.value
      // console.log(isFold.value)
      emit('onClickFold', isFold.value)
    }
    const store = useStore()
    const route = useRoute()

    const breadItem: any = computed(() => {
      const usemenu = store.state.login.menu
      const path = route.path
      return mapRouterPathName(usemenu, path)
    })
    return { handleFlod, isFold, breadItem }
  },
  components: { Expand, Fold, navUseInfo, bread }
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
