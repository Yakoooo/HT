import { Module } from 'vuex'
import { rootStateType } from '../../types'
import { IashboardState } from './types/types'
import {
  getCount,
  getFavor,
  getaddres,
  getSale
} from '@/service/main/system/analysis/dashboard'

const dashBoardModule: Module<IashboardState, rootStateType> = {
  namespaced: true,
  state() {
    return {
      categoroyGoodsCount: [],
      categoroyGoodsSale: [],
      categoroyGoodsFavor: [],
      addressGoodsSale: []
    }
  },
  mutations: {
    setcategoroyGoodsCount(state, value: any) {
      state.categoroyGoodsCount = value
    },
    setcategoroyGoodsSale(state, value: any) {
      state.categoroyGoodsSale = value
    },
    setcategoroyGoodsFavor(state, value: any) {
      state.categoroyGoodsFavor = value
    },
    setaddressGoodsSale(state, value: any) {
      state.addressGoodsSale = value
    }
  },
  getters: {},
  actions: {
    async getDashInfo({ commit }) {
      const lsitCount = await getCount()
      commit('setcategoroyGoodsCount', lsitCount.data)

      const lsitFavor = await getFavor()
      commit('setcategoroyGoodsFavor', lsitFavor.data)

      const lsitSale = await getSale()
      commit('setcategoroyGoodsSale', lsitSale.data)

      const lsitaddres = await getaddres()
      commit('setaddressGoodsSale', lsitaddres.data)
    }
  }
}

export default dashBoardModule
