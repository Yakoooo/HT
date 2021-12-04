<template>
  <div class="page">
    <Cyjtable :ListData="List" v-bind="config" @getDate="getTabItem">
      <template #enable="value">
        <el-button
          :type="value.row.enable === 1 ? 'success' : 'danger'"
          size="mini"
          plain
          >{{ value.row.enable === 1 ? '正常' : '禁止' }}</el-button
        >
      </template>
      <template #createAt="value">
        <span> {{ $filters.formatTime(value.row.createA) }} </span>
      </template>
      <template #updateAt="value">
        <span> {{ $filters.formatTime(value.row.updateAt) }} </span>
      </template>
      <template #btn>
        <div class="btn">
          <el-button type="text">编辑</el-button>
          <el-button type="text">删除</el-button>
        </div>
      </template>

      <template #header>
        <div class="btn">
          <el-button type="primary" size="mini">新建</el-button>
          <el-button type="primary" size="mini">刷新</el-button>
        </div>
      </template>

      <template #footer>
        <div class="footer">
          <el-pagination
            :page-sizes="[100, 200, 300, 400]"
            :page-size="100"
            layout="total, sizes, prev, pager, next, jumper"
            :total="400"
          >
          </el-pagination>
        </div>
      </template>
    </Cyjtable>
  </div>
</template>

<script lang="ts">
import Cyjtable from '@/base-ui/CYJtable/index'
import { defineComponent, computed } from 'vue'
import { useStore } from '@/store/index'
export default defineComponent({
  props: {
    config: {
      type: Object,
      required: true
    },
    pageName: {
      type: String,
      required: true
    }
  },
  name: '',
  setup(props) {
    const store = useStore()

    //获取页面数据
    store.dispatch('userList/getPageUserList', {
      pageName: props.pageName,
      query: { offset: 0, size: 10 }
    })

    const List = computed(() =>
      store.getters['userList/getListDate'](props.pageName)
    )

    //获取选中的数据
    const getTabItem = (value: any[]) => {
      console.log(value)
    }
    return { List, getTabItem }
  },
  components: { Cyjtable }
})
</script>
<style scoped lang="less">
.page {
  padding: 20px;
}
</style>
