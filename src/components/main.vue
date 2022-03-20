<template>
  <div class="hello">
    <h1>我是hello world--{{computedCount}}</h1>
    <el-button type="primary" @click="addCount">+++</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import {useStore} from 'vuex'
export default defineComponent({
  name: 'HomeMain',
  setup() {
    let store = useStore()
    const computedCount = computed(():number => {
      return store.state.count
    })
    const addCount = () => {
      store.commit('incCount')
    }
    return {
      computedCount,
      addCount
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
