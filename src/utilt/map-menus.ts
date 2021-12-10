import { RouteRecordRaw } from 'vue-router'
import { IbreadType } from '@/base-ui/CYJbread/types/types'
let fristCur: any = undefined
export { fristCur }

export function mapRouterPathName(useMenu: any[], cur: string): any {
  const bread: IbreadType[] = []
  mapRouterPath(useMenu, cur, bread)
  return bread
}

export function mapRouterPath(
  useMenu: any[],
  cur: string,
  breadItem?: IbreadType[]
): any {
  // 1.从角色菜单中匹配到路由，返回id（因为是根据id绑定的）
  for (const item of useMenu) {
    if (item.type === 1) {
      const findCur = mapRouterPath(item.children ?? [], cur, breadItem)
      if (findCur) {
        breadItem?.push({ name: item.name, path: item.url })
        breadItem?.push({ name: findCur.name, path: findCur.url })
        return findCur
      }
    } else if (item.type === 2 && item.url === cur) {
      return item
    }
  }
}

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
          if (!fristCur) {
            fristCur = router
          }
        }
      } else {
        _recurgeRouter(item.children)
      }
    }
  }
  _recurgeRouter(value)

  return roters
}

export function mapMenusToPermissions(userMenus: any[]) {
  const permissions: string[] = []

  const _getPermission = (menus: any[]) => {
    for (const menu of menus) {
      if (menu.type === 1 || menu.type === 2) {
        _getPermission(menu.children ?? [])
      } else if (menu.type === 3) {
        permissions.push(menu.permission)
      }
    }
  }

  _getPermission(userMenus)

  return permissions
}

export function mapMenuTeap(menuList: any[]) {
  const menuListNumber: number[] = []

  const _getTeap = (value: any[]) => {
    for (const item of value) {
      if (item.children) {
        _getTeap(item.children)
      } else {
        menuListNumber.push(item.id)
      }
    }
  }

  _getTeap(menuList)

  return menuListNumber
}
