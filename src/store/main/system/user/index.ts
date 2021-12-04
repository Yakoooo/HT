import { Module } from 'vuex'
import { IuserListState } from './types/types'
import { rootStateType } from '@/store/types'
import { GetuseList } from '@/service/main/system/index'

const userList: Module<IuserListState, rootStateType> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0
    }
  },
  mutations: {
    setUsersList(state, payload: any[]) {
      state.usersList = payload
    },
    setUsersCount(state, payload: number) {
      state.usersCount = payload
    },
    setRoleList(state, payload: any[]) {
      state.roleList = payload
    },
    setRoleCount(state, payload: number) {
      state.roleCount = payload
    }
  },
  getters: {
    getListDate: (state) => {
      return (value: string) => {
        switch (value) {
          case 'users':
            return state.usersList
            break
          case 'role':
            return state.roleCount
        }
      }
    }
  },
  actions: {
    async getPageUserList(context, payload) {
      let pageName = payload.pageName
      const Upone = (value: string) => {
        return value.slice(0, 1).toUpperCase() + value.slice(1)
      }
      //根据接口拼接请求
      const add: any = await GetuseList(`${pageName}/list`, payload.query)
      const { list, totalCount } = add.data
      pageName = Upone(pageName)
      //根据接口拼接请求
      context.commit(`set${pageName}List`, list)
      context.commit(`set${pageName}Count`, totalCount)
    }
  }
}

export default userList
