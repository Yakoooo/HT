import axios from '../../../index'

enum DashApi {
  Count = '/goods/category/count',
  Sale = '/goods/category/sale',
  Favor = '/goods/category/favor',
  addres = '/goods/address/sale'
}

export function getCount(): any {
  return axios.request({ method: 'GET', url: DashApi.Count })
}
export function getSale(): any {
  return axios.request({ method: 'GET', url: DashApi.Sale })
}
export function getFavor(): any {
  return axios.request({ method: 'GET', url: DashApi.Favor })
}
export function getaddres(): any {
  return axios.request({ method: 'GET', url: DashApi.addres })
}
