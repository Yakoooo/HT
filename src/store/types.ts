import { loginType } from './login/types'
import { IuserListState } from './main/system/user/types/types'

export interface rootStateType {
  name: string
}

export interface ILoginStoreType {
  login: loginType
  userList: IuserListState
}

export type IStroeType = ILoginStoreType & rootStateType
