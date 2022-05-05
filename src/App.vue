<template>
<div class="common-layout">
    <el-container class="mainContent">
      <el-header>
        <Header></Header>
      </el-header>
      <el-container class="mainContainer">
        <el-aside width="180px" style="background: #17174c;">
          <Aside></Aside>
        </el-aside>
        <el-main>
          <!-- 路由匹配到的组件将渲染在这里 -->
          <el-tabs
                v-model="editableTabsValue"
                type="card"
                class="demo-tabs"
                closable
                @tab-remove="removeTab"
              >
                <el-tab-pane
                  v-for="item in editableTabs"
                  :key="item.name"
                  :label="item.title"
                  :name="item.name"
                >
                </el-tab-pane>
           </el-tabs>
           <el-button size="small" @click="addTab(editableTabsValue)">
              add tab
            </el-button>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import Header from './components/header.vue'
import Aside from './components/aside.vue'
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'App',
  components: {
    Header,
    Aside,
  },
  setup() {
    let tabIndex = 2
    const editableTabsValue = ref('2')
    const editableTabs = ref([
      {
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content',
      },
      {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content',
      },
    ])

    const addTab = (targetName: string) => {
      const newTabName = `${++tabIndex}`
      editableTabs.value.push({
        title: 'New Tab',
        name: newTabName,
        content: 'New Tab content',
      })
      editableTabsValue.value = newTabName
    }
    const removeTab = (targetName: string) => {
      const tabs = editableTabs.value
      let activeName = editableTabsValue.value
      if (activeName === targetName) {
        tabs.forEach((tab, index) => {
          if (tab.name === targetName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
              activeName = nextTab.name
            }
          }
        })
      }
      editableTabsValue.value = activeName
      editableTabs.value = tabs.filter((tab) => tab.name !== targetName)
    }
    return {
      removeTab,
      addTab,
      editableTabs,
      editableTabsValue,
    }
  }
});
</script>

<style lang="less">
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
}
ol, ul, li {
    list-style: none;
}
.common-layout {
  height: 100%;
  .mainContent{
    height:100%;
    overflow: hidden;
    .mainContainer {
      height: 100%;
      overflow-y: auto;
    }
  }
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  height: 100%;
}
</style>
<style lang="less" scoped>
.common-layout {
  :deep(.el-header) {
    padding: 40px 20px;
    background: #17174c;
    display: flex;
    align-items: center;
  }
  :deep(.demo-tabs > .el-tabs__content){
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  :deep(.el-tabs__content) {
    display: none;
  }
}
</style>
