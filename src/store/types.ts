import { loginType } from './login/types'

export interface rootStateType {
  name: string
}

export interface ILoginStoreType {
  login: loginType
}

export type IStroeType = ILoginStoreType & rootStateType
