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
  {{count}}
</template>

<script lang="ts">
import { defineComponent, reactive,computed } from 'vue'
import { useRouter } from 'vue-router';
import { mapState, useStore } from 'vuex';
interface News {
  list:string[];
}
interface stateCount {
  count: string,
}
export default defineComponent({
  setup() {
    const store = useStore()
    const router = useRouter();
    let list:string[] = reactive([])
    for(let i=1;i<10;i++) {
      list.push(`我是第${i}个新闻`)
    }
    const goDetail = (index: number) => {
      router.push(`/NewsDetails/${index + 1}`)
    }
    const state:any = mapState(['count'])
    const storeState:any = {}
        Object.keys(state).forEach((el:string):void=> {
            const fn = state[el].bind({$store: store})
            // 遍历生成这种数据结构 => {name: ref(), age: ref()}
            storeState[el] = computed(fn)
        })
    return {
      list,
      goDetail,
      ...storeState
    } as News
  },
})
</script>
