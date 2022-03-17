<template>
  <div>
    我是新闻列表
    <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
    <div v-for="(item,index) in list" :key="index" @click="goDetail(index)">{{item}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useRouter } from 'vue-router';
interface News {
  list:string[];
}
export default defineComponent({
  setup() {
    const router = useRouter();
    let list:string[] = reactive([])
    for(let i=1;i<10;i++) {
      list.push(`我是第${i}个新闻`)
    }
    const goDetail = (index: number) => {
      router.push(`/NewsDetails/${index + 1}`)
    }
    return {
      list,
      goDetail
    } as News
  },
})
</script>
