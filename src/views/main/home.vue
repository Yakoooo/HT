<template>
  <div class="home">
    <el-container class="home-container">
      <el-aside class="isTanstion" :width="isFold ? '200px' : '60px'"
        ><navMenu :isFold="isFold"
      /></el-aside>
      <el-container>
        <el-header> <navHeader @onClickFold="foldClick" /> </el-header>
        <el-main>
          <div class="main">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import navMenu from '@/components/nav-menu/index'
import navHeader from '@/components/nav-header/index'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'home',
  setup() {
    const isFold = ref(true)
    const foldClick = (value) => {
      isFold.value = value
    }
    return { foldClick, isFold }
  },
  components: { navMenu, navHeader }
})
</script>

<style lang="less">
.home {
  width: 100%;
  height: 100%;
  .home-container {
    height: 100%;
    .isTanstion {
      transition: 0.2s;
    }
  }
  .el-header,
  .el-footer {
    background-color: #fff;
    color: var(--el-text-color-primary);
    height: 60px;
  }

  .el-aside {
    background-color: #3c4d5e;
    color: var(--el-text-color-primary);
    text-align: center;
  }

  .el-main {
    border: none;
    background-color: #e9eef3;
    color: var(--el-text-color-primary);
    text-align: center;
  }

  body > .el-container {
    margin-bottom: 40px;
  }

  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }

  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  ul {
    border: none;
  }
}
.main {
  background-color: #fff;
}

// @keyframes name {
//   50% {
//     display: none;
//   }
// }
// .why.enter.active {
//   animetion: name 1s ease;
// }
// .why.leave.active {
//   animetion: name 1s ease reveres;
// }
// .fold-enter-from，.fold-leave-to {
// }
// .fold-enter-to，.fold-leave-from {
// }
// .fold-enter-active .fold-leave-active {
//   transition: 2s all;
// }
</style>
