import { IFromConfig } from '@/base-ui/CYJFrom/types/types'
export const DialogConfig: IFromConfig = {
  fromitem: [
    {
      type: 'input',
      label: '命名名',
      placeholder: '输入命名',
      value: 'name'
    },
    {
      type: 'input',
      label: '真实权限',
      placeholder: '输入角色',
      value: 'intro'
    }
  ],
  colLayut: { span: 24 }
}
