import { createStore, useStore as useStroeVuex, Store } from 'vuex'
import { rootStateType, IStroeType } from './types'
import login from './login/login'
import userList from './main/system/user'
const store = createStore<rootStateType>({
  state: () => {
    return {
      name: 'login'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: { login, userList }
})

export function setupvuex() {
  store.dispatch('login/setVuexstore')
}

export function useStore(): Store<IStroeType> {
  return useStroeVuex()
}

export default store
