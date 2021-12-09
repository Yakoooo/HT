type IFromType = 'input' | 'password' | 'select' | 'datepicker'

export interface IFromItem {
  type: IFromType
  label: string
  rules?: any[]
  placeholder?: string
  options?: any[]
  otherOptions?: any
  value: any
  isHidden?: boolean
}

export interface IFromConfig {
  fromitem: IFromItem[]
  labelWidth?: string
  itemStyle?: any
  colLayut?: any
}
