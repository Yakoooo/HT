import { IFromConfig } from '@/base-ui/CYJFrom/types/types'
export const fromConfig: IFromConfig = {
  fromitem: [
    { type: 'input', label: 'input', placeholder: '输入用户名' },
    { type: 'password', label: 'password', placeholder: '输入用户名' },
    {
      type: 'select',
      label: 'select',
      placeholder: '输入用户名',
      options: [
        { key: '1', value: '一号' },
        { key: '2', value: '二号' },
        { key: '3', value: '三号' }
      ]
    },
    {
      type: 'datepicker',
      label: 'datepicker',
      placeholder: '输入用户名',
      otherOptions: {
        type: 'daterange',
        'range-separator': 'To',
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date'
      }
    }
  ]
}
