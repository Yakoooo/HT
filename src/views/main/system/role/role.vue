<template>
  <div class="role">
    <fromSeatch
      :fromConfig="fromConfig"
      @clickSearch="cilckSearchCollbarck"
      @clickReset="cilckResetCollbarck"
    ></fromSeatch>
    <pageContent
      ref="pageContentRef"
      :config="contentConfig"
      pageName="role"
      @handEditClickInfo="handEditDate"
      @handNewClickInfo="handNewDate"
    ></pageContent>
    <div class="pageDialog">
      <pageDialog
        ref="pageInfo"
        pageName="role"
        :defaulteInfo="defaulteInfo"
        :dialogConfig="DialogConfig"
        :ohterInfo="ohterInfo"
        ><el-tree
          ref="Eltree"
          :data="menus"
          show-checkbox
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          @check="handtreeInfo"
      /></pageDialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, nextTick } from 'vue'
import { useStore } from '@/store/index'
import pageContent from '@/components/page-content/index'
import fromSeatch from '@/components/page-search/index'
import { contentConfig } from './confiig/content.config'
import { fromConfig } from './confiig/serch.config'
import { usePageCenten } from '@/hook/usePageCenten'
import { usePageDialog } from '@/hook/usePageDialog'
import pageDialog from '@/components/page-dialog/index'
import { DialogConfig } from './confiig/dialog.config'
import { mapMenuTeap } from '@/utilt/map-menus'
import { ElTree } from 'element-plus'

export default defineComponent({
  name: 'role',
  setup() {
    const [pageContentRef, cilckSearchCollbarck, cilckResetCollbarck] =
      usePageCenten()

    const Eltree = ref<InstanceType<typeof ElTree>>()

    const fn2 = (value: any) => {
      const menuInfo = mapMenuTeap(value.row.menuList)
      nextTick(() => {
        Eltree.value?.setCheckedKeys(menuInfo, false)
      })
    }

    const [pageInfo, defaulteInfo, handEditDate, handNewDate] = usePageDialog(
      fn2,
      undefined
    )

    const stroe = useStore()
    const menus = computed(() => stroe.state.entireMenu)

    const ohterInfo = ref<any>({})
    const handtreeInfo = (data1: any, data2: any) => {
      const menuList = [...data2.checkedKeys, ...data2.halfCheckedKeys]
      ohterInfo.value = { menuList }
    }

    return {
      contentConfig,
      fromConfig,
      cilckSearchCollbarck,
      pageContentRef,
      cilckResetCollbarck,
      pageInfo,
      defaulteInfo,
      handEditDate,
      handNewDate,
      DialogConfig,
      menus,
      handtreeInfo,
      ohterInfo,
      Eltree
    }
  },
  components: { pageContent, fromSeatch, pageDialog }
})
</script>

<style scoped></style>
