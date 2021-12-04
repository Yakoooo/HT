import { App } from 'vue'
import 'element-plus/dist/index.css'
import {
  ElButton,
  ElInput,
  ElForm,
  ElTable,
  ElTabPane,
  ElIcon,
  ElTabs,
  ElFormItem,
  ElCalendar,
  ElCheckbox,
  ElLink,
  ElCascader,
  ElAside,
  ElHeader,
  ElMain,
  ElContainer,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElCollapseTransition,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination
} from 'element-plus'

const elements = [
  ElButton,
  ElInput,
  ElForm,
  ElTable,
  ElTabPane,
  ElIcon,
  ElTabs,
  ElFormItem,
  ElCalendar,
  ElCheckbox,
  ElLink,
  ElCascader,
  ElAside,
  ElHeader,
  ElContainer,
  ElMain,
  ElMenu,
  ElSubMenu,
  ElMenuItemGroup,
  ElMenuItem,
  ElCollapseTransition,
  ElDropdown,
  ElDropdownMenu,
  ElDropdownItem,
  ElAvatar,
  ElRow,
  ElCol,
  ElSelect,
  ElOption,
  ElDatePicker,
  ElBreadcrumb,
  ElBreadcrumbItem,
  ElTableColumn,
  ElPagination
]

export default function (app: App): void {
  //遍历子项
  for (const el of elements) {
    app.component(el.name, el)
  }
}
