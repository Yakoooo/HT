import { useStore } from '@/store/index'

export function usePermissions(pageName: string, handeName: string) {
  const store = useStore()
  const Permissions = store.state.login.Permissions
  const ver = `system:${pageName}:${handeName}`

  return !!Permissions.find((item) => item === ver)
}
