import { createStore, useStore as useStroeVuex, Store } from 'vuex'
import { rootStateType, IStroeType } from './types'
import login from './login/login'
const store = createStore<rootStateType>({
  state: () => {
    return {
      name: 'login'
    }
  },
  mutations: {},
  getters: {},
  actions: {},
  modules: { login }
})

export function setupvuex() {
  store.dispatch('login/setVuexstore')
}

export function useStore(): Store<IStroeType> {
  return useStroeVuex()
}

export default store
