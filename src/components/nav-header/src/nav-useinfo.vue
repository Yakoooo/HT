<template>
  <div>
    <el-dropdown>
      <span class="el-dropdown-link">
        <el-avatar
          :size="35"
          src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fnimg.ws.126.net%2F%3Furl%3Dhttp%253A%252F%252Fdingyue.ws.126.net%252F2021%252F1121%252F216068c8j00r2wgjc001jc000fy00jcg.jpg%26thumbnail%3D650x2147483647%26quality%3D80%26type%3Djpg&refer=http%3A%2F%2Fnimg.ws.126.net&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1640681524&t=0950e71908c33c5e1d638db53ebc4918"
        ></el-avatar>
        <span>cyj</span>
        <el-icon class="el-icon--right">
          <arrow-down />
        </el-icon>
      </span>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="ArrowDown">退出登录</el-dropdown-item>
          <el-dropdown-item>用户信息</el-dropdown-item>
          <el-dropdown-item>系统管理</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { ArrowDown } from '@element-plus/icons'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { ArrowDown }
})
</script>
<style scoped lang="less">
.el-dropdown-link {
  display: flex;
  align-items: center;
  span {
    margin-left: 20px;
  }
}
</style>
