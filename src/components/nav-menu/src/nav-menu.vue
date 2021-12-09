<template>
  <div class="nav-menu">
    <div class="logo">
      <img src="~@/assets/img/logo.svg" alt="logo" />
      <h6>vue3 + ts</h6>
    </div>

    <el-menu
      :default-active="defaultActive.id + ''"
      class="el-menu-vertical-demo"
      background-color="#3c4d5e"
      :unique-opened="true"
      active-text-color="#ffd04b"
      text-color="#fff"
      :collapse="!isFold"
    >
      <!-- 一级导航 -->
      <template v-for="item in useMenu" :key="item.id">
        <el-sub-menu v-if="item.type == 1" :index="item.id + ''">
          <!-- 图标 -->
          <template #title>
            <el-icon> <component :is="item.icon" /> </el-icon>
            <span>{{ item.name }}</span>
          </template>
          <!-- 二级导航 -->
          <template v-for="sub in item.children" :key="sub.id">
            <el-menu-item @click="onRouterPush(sub)" :index="sub.id + ''">{{
              sub.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
        <!-- 一级导航 -->
        <el-menu-item v-else :index="item.id + ''">
          <el-icon><component :is="item.icon" /></el-icon>
          <span>{{ item.name }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Monitor, Setting, Goods, ChatLineRound } from '@element-plus/icons'
import { defineComponent, computed, ref } from 'vue'
import { useStore } from '@/store/index'
import { useRouter, useRoute } from 'vue-router'
import { mapRouterPath, fristCur } from '@/utilt/map-menus'
export default defineComponent({
  name: 'navMenu',
  props: ['isFold'],
  setup() {
    const route = useRouter()
    const store = useStore()
    const routePath = useRoute()
    const useMenu = computed(() => {
      return store.state.login.menu
    })
    const defaultActive = ref(fristCur + '')
    defaultActive.value = mapRouterPath(useMenu.value, routePath.path)
    console.log(defaultActive.value)

    const onRouterPush = (value: any) => {
      if (value.url) {
        route.push(value.url)
      } else {
        route.push('/notFount')
      }
    }
    return { useMenu, onRouterPush, defaultActive }
  },
  components: {
    'el-icon-monitor': Monitor,
    'el-icon-setting': Setting,
    'el-icon-goods': Goods,
    'el-icon-chat-line-round': ChatLineRound
  }
})
</script>
<style scoped lang="less">
.nav-menu {
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    width: 200px;
    color: white;
    img {
      width: 25px;
      height: 25px;
    }
  }
  .is-active {
    background-color: #409eff;
  }
}
</style>
