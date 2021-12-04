import cyjRequest from '@/service/index'

export function GetuseList(url: string, data: any) {
  return cyjRequest.request({ url: url, method: 'POST', data: data })
}
