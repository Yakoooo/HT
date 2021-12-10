import { createStore, useStore as useStroeVuex, Store } from 'vuex'
import { rootStateType, IStroeType } from './types'
import login from './login/login'
import userList from './main/system/user'
import dash from './main/analysis/dashboard'
import { GetuseList } from '@/service/main/system/index'
const store = createStore<rootStateType>({
  state: () => {
    return {
      name: 'login',
      entireDepartment: [],
      entireEole: [],
      entireMenu: []
    }
  },
  mutations: {
    setentireDepartment(state, value: any[]) {
      state.entireDepartment = value
    },
    setentireentireEole(state, value: any[]) {
      state.entireEole = value
    },
    setentireentireMenu(state, value: any[]) {
      state.entireMenu = value
    }
  },
  getters: {},
  actions: {
    async getIntiDepartment(content) {
      const departlist: any = await GetuseList('/department/list', {
        offset: 0,
        size: 1000
      })
      const rolelist: any = await GetuseList('/role/list', {
        offset: 0,
        size: 1000
      })
      const menulist: any = await GetuseList('/menu/list', {
        offset: 0,
        size: 1000
      })
      const { list: dList } = departlist.data
      const { list: rList } = rolelist.data
      const { list: mList } = menulist.data

      content.commit('setentireDepartment', dList)
      content.commit('setentireentireEole', rList)
      content.commit('setentireentireMenu', mList)
    }
  },
  modules: { login, userList, dash }
})

export function setupvuex() {
  store.dispatch('login/setVuexstore')
}

export function useStore(): Store<IStroeType> {
  return useStroeVuex()
}

export default store
