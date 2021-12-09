import { IFromConfig } from '@/base-ui/CYJFrom/types/types'
export const fromConfig: IFromConfig = {
  fromitem: [
    {
      type: 'input',
      label: '用户名',
      placeholder: '输入用户名',
      value: 'name'
    },
    {
      type: 'input',
      label: '真实姓名',
      placeholder: '输入真实姓名',
      value: 'realname'
    },
    {
      type: 'input',
      label: '电话',
      placeholder: '输入电话',
      value: 'cellphone'
    },
    {
      type: 'select',
      label: '状态',
      placeholder: '输入状态',
      options: [
        { key: '启用', value: 1 },
        { key: '禁用', value: 0 }
      ],
      value: 'enable'
    },
    {
      type: 'datepicker',
      label: '创建时间',
      placeholder: '选择创建时间',
      otherOptions: {
        type: 'daterange',
        'range-separator': 'To',
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date'
      },
      value: 'createAt'
    }
  ]
}
