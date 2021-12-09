import { loginType } from './login/types'
import { IuserListState } from './main/system/user/types/types'
import { IashboardState } from './main/analysis/types/types'

export interface rootStateType {
  name: string
  entireDepartment: any[]
  entireEole: any[]
  entireMenu: any[]
}

export interface ILoginStoreType {
  login: loginType
  userList: IuserListState
  dash: IashboardState
}

export type IStroeType = ILoginStoreType & rootStateType
