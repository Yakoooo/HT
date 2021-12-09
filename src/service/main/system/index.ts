import cyjRequest from '@/service/index'

export function GetuseList(url: string, data: any) {
  return cyjRequest.request({ url: url, method: 'POST', data: data })
}

export function deleteuseList(url: string) {
  return cyjRequest.request({ url: url, method: 'DELETE' })
}

export function CreateItem(url: string, data: any) {
  return cyjRequest.request({ url: url, method: 'POST', data: data })
}

export function EidtItem(url: string, data: any) {
  return cyjRequest.request({ url: url, method: 'PATCH', data: data })
}
