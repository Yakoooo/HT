<template>
  <div class="table">
    <div class="header">
      <div class="tilte">{{ tilte }}</div>
      <div><slot name="header"> </slot></div>
    </div>
    <el-table
      :data="ListData"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange"
      v-bind="childrenProps"
    >
      <el-table-column
        v-if="isSelection"
        type="selection"
        width="55"
        align="center"
      />
      <el-table-column
        v-if="isIndex"
        width="60"
        type="index"
        label="序号"
        align="center"
      ></el-table-column>
      <template v-for="item in TableConfig" :key="item.prop">
        <el-table-column v-bind="item" align="center " show-overflow-tooltip>
          <template #default="itema">
            <slot :name="item.soltName" :row="itema.row">
              {{ itema.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"
        ><el-pagination
          :page-sizes="[10, 20, 30]"
          :page-size="page.pageSize"
          :current-page="page.pageCur"
          layout="total, sizes, prev, pager, next, jumper"
          :total="ListCount"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    tilte: { type: String },
    ListData: {
      type: Array,
      required: true
    },
    ListCount: {
      type: Number,
      required: true
    },
    TableConfig: {
      type: Array,
      required: true
    },
    isSelection: {
      type: Boolean,
      default: () => true
    },
    isIndex: {
      type: Boolean,
      default: () => true
    },
    childrenProps: {
      type: Object,
      default: () => ({})
    },
    page: {
      type: Object,
      required: true
    }
  },
  emits: ['getDate', 'update:page'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any[]) => {
      emit('getDate', value)
    }
    const handleSizeChange = (value: number) => {
      emit('update:page', { ...props.page, pageSize: value })
    }
    const handleCurrentChange = (value: number) => {
      emit('update:page', { ...props.page, pageCur: value })
    }
    return { handleSelectionChange, handleSizeChange, handleCurrentChange }
  }
})
</script>
<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
}
.footer {
  margin-top: 20px;
  float: right;
}
.table {
  overflow: hidden;
}
</style>
