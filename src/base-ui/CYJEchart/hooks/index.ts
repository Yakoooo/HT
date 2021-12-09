import * as echarts from 'echarts'
import china from '../data/china.json'
echarts.registerMap('china', china)

export default function (el: HTMLElement) {
  const echartsIntans = echarts.init(el)
  function addOptions(value: any) {
    echartsIntans.setOption({ ...value })
  }

  function updataResize() {
    echartsIntans.resize()
  }

  window.addEventListener('resize', () => {
    echartsIntans.resize()
  })

  return { echartsIntans, addOptions, updataResize }
}
