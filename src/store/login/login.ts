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

const loginModule: Module<loginType, rootStateType> = {
  namespaced: true,
  state: () => {
    return {
      token: ' ',
      useInfo: {},
      menu: []
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
    }
  },
  getters: {},
  actions: {
    async getAccount(context, playod: IAccount) {
      const { id, token } = await (await loginAccount(playod)).data
      context.commit('setToken', token)
      localCaChe.setCache('token', token)

      const useInfo = await loginAccountUseInfo(id)
      context.commit('setUseInfo', useInfo.data)
      localCaChe.setCache('useInfo', useInfo.data)

      const useMenu = await loginAccountUseMenu(id)
      context.commit('setUseMenu', useMenu.data)
      localCaChe.setCache('menu', useMenu.data)

      router.push('/home')
    },

    setVuexstore(context) {
      const token = localCaChe.getCaChe('token')
      console.log(token)
      if (token) {
        context.commit('setToken', token)
      }

      const useInfo = localCaChe.getCaChe('useInfo')
      console.log(useInfo)
      if (useInfo) {
        context.commit('setUseInfo', useInfo)
      }

      const menu = localCaChe.getCaChe('menu')
      console.log(menu)
      if (menu) {
        context.commit('setUseMenu', menu)
      }
    }
  }
}

export default loginModule
