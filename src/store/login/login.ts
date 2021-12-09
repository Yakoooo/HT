import { Module } from 'vuex'
import router from '@/router'
import { loginType } from './types'
import { rootStateType } from '../types'
import {
  loginAccount,
  loginAccountUseInfo,
  loginAccountUseMenu
} from '@/service/login/login'
import { IAccount } from '@/service/login/types'
import localCaChe from '@/utilt/loadcaChe'
import mapRouterUse, { mapMenusToPermissions } from '@/utilt/map-menus'

const loginModule: Module<loginType, rootStateType> = {
  namespaced: true,
  state: () => {
    return {
      token: ' ',
      useInfo: {},
      menu: [],
      Permissions: []
    }
  },
  mutations: {
    setToken(state, value: string) {
      state.token = value
    },
    setUseInfo(state, value: any) {
      state.useInfo = value
    },
    setUseMenu(state, value: any) {
      state.menu = value

      const routers = mapRouterUse(state.menu)
      routers.forEach((add: any) => {
        router.addRoute('main', add)
      })

      const Permissions = mapMenusToPermissions(value)
      state.Permissions = Permissions
    }
  },
  getters: {},
  actions: {
    async getAccount(context, playod: IAccount) {
      const { id, token } = await (await loginAccount(playod)).data
      context.commit('setToken', token)
      localCaChe.setCache('token', token)

      //调用根方法
      context.dispatch('getIntiDepartment', {}, { root: true })

      const useInfo = await loginAccountUseInfo(id)
      context.commit('setUseInfo', useInfo.data)
      localCaChe.setCache('useInfo', useInfo.data)

      const useMenu = await loginAccountUseMenu(id)
      context.commit('setUseMenu', useMenu.data)
      localCaChe.setCache('menu', useMenu.data)

      router.push('/main')
    },

    setVuexstore(context) {
      const token = localCaChe.getCaChe('token')
      if (token) {
        context.commit('setToken', token)
      }

      //调用根方法
      context.dispatch('getIntiDepartment', {}, { root: true })

      const useInfo = localCaChe.getCaChe('useInfo')
      if (useInfo) {
        context.commit('setUseInfo', useInfo)
      }

      const menu = localCaChe.getCaChe('menu')
      if (menu) {
        context.commit('setUseMenu', menu)
      }
    }
  }
}

export default loginModule
