<template>
  <div>
    我是新闻列表
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
