<template>
  <div class="CYJFrom">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <el-form :label-width="labelWidth">
      <el-row>
        <template v-for="item in fromitem" :key="item.label">
          <el-col v-bind="colLayut">
            <el-form-item
              v-if="!item.isHidden"
              :label="item.label"
              :style="itemStyle"
            >
              <template
                v-if="item.type === 'input' || item.type === 'password'"
              >
                <el-input
                  :placeholder="item.placeholder"
                  v-bind="item.otherOptions"
                  :show-password="item.type === 'password'"
                  :relus="item.relus"
                  :model-value="modelValue[item.value]"
                  @update:modelValue="changeValue($event, item.value)"
                ></el-input>
              </template>
              <template v-if="item.type === 'select'">
                <el-select
                  :model-value="modelValue[item.value]"
                  @update:modelValue="changeValue($event, item.value)"
                  :placeholder="item.placeholder"
                  style="width: 100%"
                >
                  <el-option
                    v-bind="item.otherOptions"
                    v-for="index in item.options"
                    :key="index.key"
                    :label="index.key"
                    :value="index.value"
                  >
                  </el-option>
                </el-select> </template
              ><template v-if="item.type === 'datepicker'">
                <el-date-picker
                  :model-value="modelValue[item.value]"
                  @update:modelValue="changeValue($event, item.value)"
                  v-bind="item.otherOptions"
                  style="width: 100%"
                >
                </el-date-picker> </template></el-form-item
          ></el-col>
        </template>
      </el-row>
    </el-form>
    <div class="btn">
      <slot name="btn"> </slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Search, Check } from '@element-plus/icons'
import { defineComponent, PropType, ref, watch } from 'vue'
import { IFromItem } from '../types/types'
export default defineComponent({
  name: 'CYJFrom',
  props: {
    modelValue: {
      type: Object,
      default: () => {
        return {}
      }
    },
    fromitem: {
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
        xl: 8,
        xs: 24,
        sm: 24,
        md: 12,
        lg: 12
      })
    }
  },
  setup(props, { emit }) {
    //双向绑定
    //拿到的数据创建本地响应
    const fromDate = ref({ ...props.modelValue })

    //监听源头修改本地
    // watch(
    //   () => props.modelValue,
    //   (newValue) => {
    //     fromDate.value = newValue
    //   }
    // )

    //监听本地响应 ，变化后就反映到 源头
    //   watch(
    //     fromDate,
    //     (newvalue) => {
    //       emit('update:modelValue', newvalue)
    //     },
    //     { deep: true }
    //   )

    const changeValue = (newValue: any, item: string) => {
      emit('update:modelValue', { ...props.modelValue, [item]: newValue })
    }
    return { fromDate, Search, Check, changeValue }
  }
})
</script>
<style scoped lang="less">
.CYJFrom {
  overflow: hidden;
  padding: 20px;
  margin-bottom: 0px;
  // width: 100%;
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

  .btn {
    float: right;
    line-height: 0px;
  }
}
</style>
