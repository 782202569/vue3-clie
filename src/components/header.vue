<template>
<div class="header">
  <div class="logo">
    <img src="../assets/logo_2.png" />
  </div>
  <div class="menu">
    <ul>
      <li v-for="el in titleList" :key="el.id"><span :class="el.id == 0 ? 'active' : ''">{{el.name}}</span></li>
    </ul>
    <!-- <el-icon :size="20">
      <edit />
    </el-icon> -->
  </div>
</div>
  
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
// import { Edit } from '@element-plus/icons-vue'
export default defineComponent({
  components: {
  },
  setup() {
    const titleList = reactive([
      {
        id: 0,
        name: '首页',
      },
      {
        id: 1,
        name: '大数据可视化平台',
      },
      {
        id: 2,
        name: '掘金',
      },
      {
        id: 3,
        name: 'CSDN',
      },
    ])
    return {
      titleList
    }
  },
})
</script>
<style scoped lang="less">
.header {
  display: flex;
  justify-content: center;
  align-content: center;
  .logo {
    width: 200px;
    display: flex;
    align-items: center;
    img {
      height: 40px;
    }
  }
  .menu {
    flex: 1;
    ul {
        display: flex;
        align-items: center;
        li {
          margin-right: 40px;
          color: #fff;
          cursor: pointer;
          span {
            opacity: 0.5;
          }
          .active {
            opacity: 1;
          }
        }
        span:hover {
          opacity: 1;
        }
    }
  }
}
</style>