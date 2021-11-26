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
  ElLink
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
  ElLink
]

export default function (app: App): void {
  //遍历子项
  for (const el of elements) {
    app.component(el.name, el)
  }
}
