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
        <el-table-column v-bind="item" align="center ">
          <template #default="itema">
            <slot :name="item.soltName" :row="itema.row">
              {{ itema.row[item.prop] }}
            </slot>
          </template>
        </el-table-column>
      </template>
    </el-table>
    <div class="footer">
      <slot name="footer"> </slot>
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
    }
  },
  emits: ['getDate'],
  setup(props, { emit }) {
    const handleSelectionChange = (value: any[]) => {
      emit('getDate', value)
    }
    return { handleSelectionChange }
  }
})
</script>
<style scoped lang="less">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 40px;
  // line-height: 40px;
}
.footer {
  margin-top: 20px;
  float: right;
}
.table {
  overflow: hidden;
}
</style>
