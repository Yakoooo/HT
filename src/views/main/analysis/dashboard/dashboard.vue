<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <CYJcard title="分类商品数量（饼图）">
          <pageEchart :data="goodsCount"></pageEchart>
        </CYJcard>
      </el-col>
      <el-col :span="10">
        <CYJcard title="不同城市销量">
          <mapAddress :data="adderss"></mapAddress>
        </CYJcard>
      </el-col>
      <el-col :span="7">
        <CYJcard title="分类商品数量（玫瑰图）">
          <rolpe :data="goodsCount"></rolpe>
        </CYJcard>
      </el-col>
    </el-row>
    <el-row :gutter="10">
      <el-col :span="12">
        <CYJcard title="分类商品的销量">
          <zexian v-bind="goodsSofe"></zexian>
        </CYJcard>
      </el-col>
      <el-col :span="12">
        <CYJcard title="分类商品的收藏">
          <baseInfo v-bind="goodsFaovr"></baseInfo>
        </CYJcard>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
import CYJcard from '@/base-ui/CYJPanle/index'
import {
  pageEchart,
  rolpe,
  zexian,
  baseInfo,
  mapAddress
} from '@/components/page-echart/index'

export default defineComponent({
  name: 'dashboard',
  setup() {
    const store = useStore()
    store.dispatch('dash/getDashInfo')

    const goodsCount = computed(() => {
      return store.state.dash.categoroyGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })

    const goodsSofe = computed(() => {
      const xdata: string[] = []
      const data: number[] = []

      const saleInfo = store.state.dash.categoroyGoodsSale
      for (const item of saleInfo) {
        xdata.push(item.name)
        data.push(item.goodsCount)
      }

      return { xdata, data }
    })

    const goodsFaovr = computed(() => {
      const xdata: string[] = []
      const data: number[] = []

      const favorInfo = store.state.dash.categoroyGoodsFavor
      console.log(favorInfo)
      for (const item of favorInfo) {
        xdata.push(item.name)
        data.push(item.goodsFavor)
      }

      console.log(goodsFaovr)
      return { xdata, data }
    })

    const adderss = computed(() => {
      return store.state.dash.addressGoodsSale.map((item) => {
        return { name: item.address, value: item.count }
      })
    })

    return { goodsCount, goodsSofe, goodsFaovr, adderss }
  },
  components: { CYJcard, pageEchart, rolpe, zexian, baseInfo, mapAddress }
})
</script>

<style scoped></style>
