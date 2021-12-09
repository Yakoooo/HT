<template>
  <div class="user">
    <pageSearch
      :fromConfig="fromConfig"
      @clickSearch="cilckSearchCollbarck"
      @clickReset="cilckResetCollbarck"
    ></pageSearch>
    <div class="userInfo">
      <pageContent
        ref="pageContentRef"
        :config="contentConfig"
        pageName="users"
        @handEditClickInfo="handEditDate"
        @handNewClickInfo="handNewDate"
      ></pageContent>
    </div>
    <div class="pageDialog">
      <pageDialog
        ref="pageInfo"
        pageName="users"
        :defaulteInfo="defaulteInfo"
        :dialogConfig="Com_DialogConfig"
      ></pageDialog>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'
import { useStore } from '@/store/index'
import { fromConfig } from './config/serch.config'
import pageSearch from '@/components/page-search/index'
import pageContent from '@/components/page-content/index'
import { contentConfig } from './config/content.config'
import { usePageCenten } from '@/hook/usePageCenten'
import { usePageDialog } from '@/hook/usePageDialog'
import pageDialog from '@/components/page-dialog/index'
import { DialogConfig } from './config/dialog.config'

export default defineComponent({
  name: 'user',
  setup() {
    const [pageContentRef, cilckSearchCollbarck, cilckResetCollbarck] =
      usePageCenten()

    //选择框的显示与否
    const editHidden = () => {
      const item = DialogConfig.fromitem.find(
        (item) => item.value === 'password'
      )
      if (item) {
        item.isHidden = true
      }
    }
    const NewHidden = () => {
      const item = DialogConfig.fromitem.find(
        (item) => item.value === 'password'
      )
      if (item) {
        item.isHidden = false
      }
    }

    //动态添加选择部门
    const store = useStore()
    const Com_DialogConfig = computed(() => {
      const addItem = DialogConfig.fromitem.find(
        (item) => item.value == 'departmentId'
      )
      addItem!.options = store.state.entireDepartment.map((item) => {
        return { key: item.name, value: item.id }
      })

      const addItemb = DialogConfig.fromitem.find(
        (item) => item.value == 'roleId'
      )
      addItemb!.options = store.state.entireEole.map((item) => {
        return { key: item.name, value: item.id }
      })
      return DialogConfig
    })

    const [pageInfo, defaulteInfo, handEditDate, handNewDate] = usePageDialog(
      editHidden,
      NewHidden
    )

    return {
      fromConfig,
      contentConfig,
      cilckSearchCollbarck,
      pageContentRef,
      cilckResetCollbarck,
      Com_DialogConfig,
      handEditDate,
      handNewDate,
      defaulteInfo,
      pageInfo
    }
  },
  components: { pageSearch, pageContent, pageDialog }
})
</script>

<style scoped></style>
