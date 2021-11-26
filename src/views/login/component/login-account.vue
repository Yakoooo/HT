<template>
  <div>
    <el-form :model="account" :rules="rules" ref="fromRef">
      <el-form-item label="账户" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="pwd">
        <el-input v-model="account.pwd" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { rules } from '../config/loginconfig'
import { ElForm } from 'element-plus'
import loadcaChe from '@/utilt/loadcaChe'
import { useStore } from 'vuex'
export default defineComponent({
  setup() {
    const account = reactive({
      name: loadcaChe.getCaChe('name') ?? '',
      pwd: loadcaChe.getCaChe('pwd') ?? ''
    })

    const store = useStore()
    //获取组件类型
    const fromRef = ref<InstanceType<typeof ElForm>>()

    //根据获取的判断，决定登录时机；
    const loginAction = (isKeepPwd: boolean) => {
      fromRef.value?.validate((value) => {
        store.dispatch('login/gtecommit')
        if (isKeepPwd) {
          loadcaChe.setCache('name', account.name)
          loadcaChe.setCache('pwd', account.pwd)
        } else {
          loadcaChe.clearCaChe()
        }
      })
    }
    return { account, rules, loginAction, fromRef }
  }
})
</script>
<style scoped lang="less"></style>
