import { createStore } from 'vuex'
import { rootStateType } from './types'
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

export default store
