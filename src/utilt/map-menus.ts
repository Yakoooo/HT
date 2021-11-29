import { RouteRecordRaw } from 'vue-router'

export default function (value: any[]): any {
  // 1.获取文件路径
  const Allrouters: any[] = []
  const roters: RouteRecordRaw[] = []
  const routerFlie = require.context('@/router/main', true, /\.ts/)
  routerFlie.keys().forEach((item) => {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    const route = require('../router/main' + item.split('.')[1])
    Allrouters.push(route.default)
  })

  // 2.根据角色菜单匹配,用递归
  const _recurgeRouter = (value: any[]) => {
    for (const item of value) {
      if (item.type === 2) {
        const router = Allrouters.find((index) => {
          return index.path === item.url
        })
        if (router) {
          roters.push(router)
        }
      } else {
        _recurgeRouter(item.children)
      }
    }
  }
  _recurgeRouter(value)

  return roters
}
