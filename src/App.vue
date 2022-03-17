<template>
<div class="common-layout">
    <el-container style="height:100%">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">Aside</el-aside>
        <el-main>
          <!-- 路由匹配到的组件将渲染在这里 -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <ul>
    <li>
      <router-link to="/">首页</router-link>
    </li>
    <li>
      <router-link to="/Home">主页</router-link>
    </li>
    <li>
      <router-link to="/NewsList">新闻列表</router-link>
    </li>
  </ul>
  <router-view></router-view> -->
</template>

<script lang="ts">
import Header from './components/header.vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Header,
  }
});
</script>

<style>
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.common-layout {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
  /* -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
