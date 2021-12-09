<template>
  <div class="pageDialog">
    <el-dialog
      destroy-on-close
      v-model="dialogVisible"
      title="新建"
      width="30%"
      center
    >
      <CYJFrom v-bind="dialogConfig" v-model="fromDate"></CYJFrom>
      <slot></slot>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handCommitClick">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import CYJFrom from '@/base-ui/CYJFrom/index'
import { useStore } from '@/store/index'
export default defineComponent({
  props: {
    dialogConfig: {
      type: Object,
      required: true
    },
    defaulteInfo: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    },
    ohterInfo: {
      type: Object,
      default: () => ({})
    }
  },
  setup(props) {
    const dialogVisible = ref(false)
    const fromDate: any = ref({})

    watch(
      () => props.defaulteInfo,
      (newValue) => {
        for (const item of props.dialogConfig.fromitem) {
          fromDate.value[`${item.value}`] = newValue[`${item.value}`]
        }
      }
    )

    const store = useStore()
    //点击确定的逻辑
    const handCommitClick = () => {
      dialogVisible.value = false
      if (Object.keys(props.defaulteInfo).length) {
        //编辑
        store.dispatch('userList/userEidtItem', {
          pageName: props.pageName,
          data: { ...fromDate.value, ...props.ohterInfo },
          id: props.defaulteInfo.id
        })
      } else {
        //新建
        console.log(props.ohterInfo)
        store.dispatch('userList/userCreateItem', {
          pageName: props.pageName,
          data: { ...fromDate.value, ...props.ohterInfo }
        })
      }
    }
    return {
      dialogVisible,
      fromDate,
      handCommitClick
    }
  },
  components: { CYJFrom }
})
</script>
<style scoped lang="less"></style>
