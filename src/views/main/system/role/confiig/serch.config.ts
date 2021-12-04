import { IFromConfig } from '@/base-ui/CYJFrom/types/types'
export const fromConfig: IFromConfig = {
  fromitem: [
    { type: 'input', label: '名称', placeholder: '输入名称', value: 'name' },
    {
      type: 'input',
      label: '权限',
      placeholder: '输入权限',
      value: 'intro'
    },
    {
      type: 'datepicker',
      label: '时间',
      placeholder: '输入时间',
      otherOptions: {
        type: 'daterange',
        'range-separator': 'To',
        'start-placeholder': 'Start date',
        'end-placeholder': 'End date'
      },
      value: 'date'
    }
  ]
}
