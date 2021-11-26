<template>
  <div class="login">
    <div class="loginInfo"><logoPanel></logoPanel></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import logoPanel from './component/login-panel.vue'
export default defineComponent({
  components: {
    logoPanel
  }
})
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../../../src/assets/img/login-bg.svg') no-repeat;
  .loginInfo {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
