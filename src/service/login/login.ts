import cyjRequestinsterface from '../index'
import type {
  IAccount,
  RootDataType,
  RootObject,
  menuRootObject
} from './types'

const loginApi = {
  AccountLogin: '/login',
  AccountInfo: '/users',
  AccountMenu: '/role'
}

export function loginAccount(account: IAccount) {
  return cyjRequestinsterface.request<RootDataType>({
    method: 'POST',
    url: loginApi.AccountLogin,
    data: account
  })
}

export function loginAccountUseInfo(id: number) {
  return cyjRequestinsterface.request<RootObject>({
    method: 'GET',
    url: loginApi.AccountInfo + `/${id}`
  })
}

export function loginAccountUseMenu(id: number) {
  return cyjRequestinsterface.request<menuRootObject>({
    method: 'GET',
    url: loginApi.AccountMenu + `/${id}/menu`
  })
}
