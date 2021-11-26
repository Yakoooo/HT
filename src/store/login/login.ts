import { Module } from 'vuex'
import { loginType } from './types'
import { rootStateType } from '../types'

const loginModule: Module<loginType, rootStateType> = {
  namespaced: true,
  state: () => {
    return {
      token: 'token',
      useInfo: ''
    }
  },
  mutations: {},
  getters: {},
  actions: {
    gtecommit(context) {
      console.log(context)
    }
  }
}

export default loginModule
