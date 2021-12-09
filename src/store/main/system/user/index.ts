import { Module } from 'vuex'
import { IuserListState } from './types/types'
import { rootStateType } from '@/store/types'
import {
  GetuseList,
  deleteuseList,
  CreateItem,
  EidtItem
} from '@/service/main/system/index'

const userList: Module<IuserListState, rootStateType> = {
  namespaced: true,
  state: () => {
    return {
      usersList: [],
      usersCount: 0,
      roleList: [],
      roleCount: 0,
      goodsList: [],
      goodsCount: 0,
      menuList: [],
      menuCount: 0
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
    },
    setGoodsList(state, payload: any[]) {
      state.goodsList = payload
    },
    setGoodsCount(state, payload: number) {
      state.goodsCount = payload
    },
    setMenuList(state, payload: any[]) {
      state.menuList = payload
    },
    setMenuCount(state, payload: number) {
      state.menuCount = payload
    }
  },
  getters: {
    getListDate: (state) => {
      return (value: string) => {
        return (state as any)[`${value}List`]
      }
    },
    getCountDate: (state) => {
      return (value: string) => {
        return (state as any)[`${value}Count`]
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
    },

    async deletePageList(content, payload) {
      const { pageName, id } = payload
      const pageUrl = `/${pageName}/${id}`

      await deleteuseList(pageUrl)

      //请求最新数据
      content.dispatch('getPageUserList', {
        pageName,
        query: { offset: 0, size: 10 }
      })
    },

    async userCreateItem(content, payload: any) {
      const { pageName, data } = payload
      const pageUrl = `/${pageName}`
      await CreateItem(pageUrl, data)

      //请求最新数据
      content.dispatch('getPageUserList', {
        pageName,
        query: { offset: 0, size: 10 }
      })
    },

    async userEidtItem(content, payload: any) {
      const { pageName, data, id } = payload
      const pageUrl = `/${pageName}/${id}`
      await EidtItem(pageUrl, data)

      //请求最新数据
      content.dispatch('getPageUserList', {
        pageName,
        query: { offset: 0, size: 10 }
      })
    }
  }
}

export default userList
