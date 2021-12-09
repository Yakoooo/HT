<template>
  <div class="page">
    <Cyjtable
      :ListData="List"
      :ListCount="Count"
      v-bind="config"
      @getDate="getTabItem"
      v-model:page="pageInfo"
    >
      <!-- 常驻的插槽 -->
      <template #enable="value">
        <el-button
          :type="value.row.enable === 1 ? 'success' : 'danger'"
          size="mini"
          plain
          >{{ value.row.enable === 1 ? '正常' : '禁止' }}</el-button
        >
      </template>
      <template #status="value">
        <el-button
          :type="value.row.status === 1 ? 'success' : 'danger'"
          size="mini"
          plain
          >{{ value.row.status === 1 ? '正常' : '禁止' }}</el-button
        >
      </template>
      <template #createAt="value">
        <span> {{ $filters.formatTime(value.row.createA) }} </span>
      </template>
      <template #updateAt="value">
        <span> {{ $filters.formatTime(value.row.updateAt) }} </span>
      </template>
      <template #btn="value">
        <div class="btn">
          <el-button v-if="isUpdate" @click="handEditClick(value)" type="text"
            >编辑</el-button
          >
          <el-button v-if="isDelete" @click="deleteItem(value.row)" type="text"
            >删除</el-button
          >
        </div>
      </template>
      <template #header>
        <div class="btn">
          <el-button
            v-if="isCreate"
            @click="handNewClick"
            type="primary"
            size="mini"
            >新建</el-button
          >
        </div>
      </template>

      <!-- 动态插槽 -->
      <template
        v-for="item in soltItem"
        :key="item.props"
        #[item.soltName]="value"
      >
        <slot :name="item.soltName" :row="value.row"></slot>
      </template>
    </Cyjtable>
  </div>
</template>

<script lang="ts">
import Cyjtable from '@/base-ui/CYJtable/index'
import { usePermissions } from '@/hook/usePermissions'
import { defineComponent, computed, ref, watch } from 'vue'
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
  emits: ['handEditClickInfo', 'handNewClickInfo'],
  setup(props, content) {
    const store = useStore()

    //获取权限
    const isCreate = usePermissions(props.pageName, 'create')
    const isUpdate = usePermissions(props.pageName, 'update')
    const isDelete = usePermissions(props.pageName, 'delete')
    const isQuery = usePermissions(props.pageName, 'query')

    //分页数据
    const pageInfo = ref({ pageSize: 10, pageCur: 1 })
    watch(pageInfo, () => {
      getPageList()
    })

    //获取页面数据
    const getPageList = (value?: any) => {
      if (!isQuery) return
      store.dispatch('userList/getPageUserList', {
        pageName: props.pageName,
        query: {
          offset: pageInfo.value.pageSize * (pageInfo.value.pageCur - 1),
          size: pageInfo.value.pageSize,
          ...value
        }
      })
    }
    getPageList()

    //冲vuex获取数据
    const List = computed(() =>
      store.getters['userList/getListDate'](props.pageName)
    )
    const Count = computed(() =>
      store.getters['userList/getCountDate'](props.pageName)
    )

    //获取动态插槽
    const soltItem = props.config?.TableConfig.filter((item: any) => {
      if (item.prop === 'enable') return false
      if (item.prop === 'createAt') return false
      if (item.prop === 'updateAt') return false
      if (item.prop === 'status') return false
      if (item.prop === 'btn') return false
      return true
    })

    //获取选中的数据
    const getTabItem = (value: any[]) => {
      console.log(value)
    }

    //删除数据
    const deleteItem = (value: any) => {
      console.log('触发时间')
      store.dispatch('userList/deletePageList', {
        pageName: props.pageName,
        id: value.id
      })
    }
    const handEditClick = (value: any) => {
      content.emit('handEditClickInfo', value)
    }
    const handNewClick = () => {
      content.emit('handNewClickInfo')
    }

    return {
      List,
      Count,
      getTabItem,
      getPageList,
      pageInfo,
      soltItem,
      isCreate,
      isUpdate,
      isDelete,
      deleteItem,
      handEditClick,
      handNewClick
    }
  },
  components: { Cyjtable }
})
</script>
<style scoped lang="less">
.page {
  padding: 20px;
}
</style>
