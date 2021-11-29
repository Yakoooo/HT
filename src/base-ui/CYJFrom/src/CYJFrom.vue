<template>
  <div class="CYJFrom">
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in fromItem" :key="item.label">
          <el-col v-bind="colLayut">
            <el-form-item :label="item.label" :style="itemStyle">
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  :relus="item.relus"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  v-model="value"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-bind="item.otherOptions"
                    v-for="index in item.options"
                    :key="index.key"
                    :label="index.value"
                    :value="index.value"
                  >
                  </el-option>
                </el-select> </template
              ><template v-if="item.type === 'datepicker'">
                <el-date-picker v-bind="item.otherOptions" style="width: 100%">
                </el-date-picker> </template></el-form-item
          ></el-col>
        </template>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { IFromItem } from '../types/types'
export default defineComponent({
  name: 'CYJFrom',
  props: {
    fromItem: {
      type: Array as PropType<IFromItem[]>,
      default: () => []
    },
    labelWidth: {
      type: String,
      default: () => '100px'
    },
    itemStyle: {
      type: Object
    },
    colLayut: {
      type: Object,
      default: () => ({
        //这是el栅格的响应式
        xl: 6,
        lg: 8,
        md: 12,
        sm: 24,
        sx: 24
      })
    }
  },
  setup() {
    return {}
  }
})
</script>
<style scoped lang="less">
.CYJFrom {
  padding: 20px;
  margin-bottom: 0px;
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
}
</style>
