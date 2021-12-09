import { IFromConfig } from '@/base-ui/CYJFrom/types/types'
export const DialogConfig: IFromConfig = {
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
      label: '密码',
      placeholder: '输入密码',
      value: 'password',
      isHidden: true
    },
    {
      type: 'input',
      label: '电话',
      placeholder: '输入电话',
      value: 'cellphone'
    },
    {
      type: 'select',
      label: '选择部门',
      placeholder: '选择部门',
      value: 'departmentId',
      options: []
    },
    {
      type: 'select',
      label: '选择角色',
      placeholder: '选择角色',
      value: 'roleId',
      options: []
    }
  ],
  colLayut: { span: 24 }
}
