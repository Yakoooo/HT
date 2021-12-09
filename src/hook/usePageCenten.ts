import { ref } from 'vue'
import pageContent from '@/components/page-content/index'

export function usePageCenten() {
  //获取组件
  const pageContentRef = ref<InstanceType<typeof pageContent>>()

  //字组件触发事件 ， 父组件接受 然后去调用额外的子组件
  const cilckSearchCollbarck = (value: any) => {
    pageContentRef.value?.getPageList(value)
  }
  const cilckResetCollbarck = () => {
    pageContentRef.value?.getPageList()
  }

  return [pageContentRef, cilckSearchCollbarck, cilckResetCollbarck]
}
