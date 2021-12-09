import { ref } from 'vue'
import pageDialog from '@/components/page-dialog/index'

type callfn = (item?: any) => void
export function usePageDialog(editFn?: callfn, newFn?: callfn) {
  const pageInfo = ref<InstanceType<typeof pageDialog>>()
  const defaulteInfo = ref({})

  //子事件
  const handEditDate = (item: any) => {
    defaulteInfo.value = { ...item.row }
    editFn && editFn(item)
    if (pageInfo.value) {
      pageInfo.value.dialogVisible = true
    }
  }
  const handNewDate = () => {
    defaulteInfo.value = {}
    newFn && newFn()
    if (pageInfo.value) {
      pageInfo.value.dialogVisible = true
    }
  }

  return [pageInfo, defaulteInfo, handEditDate, handNewDate]
}
