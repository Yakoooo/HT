<template>
  <div class="loginPhono">
    <el-form :model="account" :rules="rules2">
      <el-form-item label="手机号" prop="phono">
        <el-input v-model="account.phono"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="cmd">
        <div class="cmd">
          <el-input v-model="account.cmd"></el-input
          ><el-button type="primary">获取</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules2 } from '../config/loginconfig'
export default defineComponent({
  setup() {
    const account = reactive({ phono: '', cmd: '' })
    return { account, rules2 }
  }
})
</script>
<style scoped lang="less">
.loginPhono {
  .cmd {
    display: flex;
    > :last-child {
      margin-left: 8px;
    }
  }
}
</style>
