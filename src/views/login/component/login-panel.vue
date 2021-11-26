<template>
  <div class="loginPanel">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch v-model="curRef">
      <el-tab-pane name="accoutRef">
        <template #label>
          <span>
            <el-icon><avatar /></el-icon>账号登录
          </span>
        </template>
        <loginAccount ref="accoutRef" />
      </el-tab-pane>
      <el-tab-pane label="Config" name="phonoRef ">
        <template #label>
          <span>
            <el-icon><cellphone /></el-icon>手机登录
          </span>
        </template>
        <loginPhono ref="phonoRef"
      /></el-tab-pane>
    </el-tabs>
    <div class="record">
      <el-checkbox v-model="isRemember" label="记住密码"></el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button type="primary" class="login-btn" @click="AccountClick"
      >立即登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { Avatar, Cellphone } from '@element-plus/icons'
import { defineComponent, ref } from 'vue'
import loginAccount from './login-account.vue'
import loginPhono from './login-phono.vue'
export default defineComponent({
  setup() {
    const isRemember = ref(true)
    const accoutRef = ref<InstanceType<typeof loginAccount>>()
    const phonoRef = ref<InstanceType<typeof loginAccount>>()
    const curRef = ref('accoutRef')
    const AccountClick = () => {
      if (curRef.value == 'accoutRef') {
        accoutRef.value?.loginAction(isRemember.value)
      } else {
        console.log('手机登录')
      }
    }

    return { isRemember, AccountClick, accoutRef, phonoRef, curRef }
  },
  components: {
    Avatar,
    Cellphone,
    loginAccount,
    loginPhono
  }
})
</script>
<style scoped lang="less">
.loginPanel {
  width: 320px;
  h2 {
    text-align: center;
  }
  .record {
    display: flex;
    justify-content: space-between;
  }
  .login-btn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
