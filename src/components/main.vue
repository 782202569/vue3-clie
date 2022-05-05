<template>
  <div class="hello">
    <h1>我是hello world--{{computedCount}}</h1>
    <span> 有开始循环了-开端 </span>  
    <el-button type="primary" @click="addCount">+++</el-button>
    <el-button type="primary" @click="updateCount">设置vuex</el-button>
    <el-button type="primary" @click="submit">节流1</el-button>
    <el-button type="primary" @click="submit1">节流2</el-button>
    <el-button type="primary" @click="debounceSubmit">防抖</el-button>
    <el-button type="primary" @click="debounceSubmit1">防抖加强版</el-button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, reactive,ref,onMounted } from 'vue';
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
    const updateCount = () => {
      store.commit('updateCount',10)
    }
    const submit = throttle(()=>{ console.log('节流') },2000)
    const submit1 = throttle1(()=>{ console.log('节流') },2000)
    onMounted(()=>{
        document.addEventListener('scroll', throttle(()=>{
          console.log('节流')
        },2000), true)
    })
    // 节流2
    function throttle1 (fn:any, delay:number) {
      let last = 0 
      return () => {
        let now = +new Date()
        if(now-last >= delay) {
          last = now
          fn()
        }
      }
    }
     // 节流1
    function throttle (fn:any, delay:number) {
      let isThrottle = ref(true)
      return () => {
        if(!isThrottle.value) return
        isThrottle.value = false
        setTimeout(()=> {
          fn()
          isThrottle.value = true
        },delay)
      }
    }
    const debounceSubmit = debounce(()=> {console.log(`防抖`)}, 2000)
    const debounceSubmit1 = debounce1(()=> {console.log(`防抖`)}, 2000)
  // 防抖
  function debounce (fn: any, delay:number) {
    let timeout: any
    return () => {
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        fn()
      }, delay)
    }
  }
  // 防抖加强版
  function debounce1(fn:any, delay: number) {
    let timeout:any, last:number = 0
    return () => {
      let now = +new Date()
      if(now -last >= delay) {
        last = now
        fn()
      } else {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          fn()
          last = now
        },delay)
      }
    }
  }
  // 懒加载
  function lazyLoad() {
    let imgs: any = document.getElementsByTagName('img')
    let count = 0
    let clientHeight = window.innerHeight
    for(let i=count; i<imgs.length; i++) {
      if(clientHeight >= imgs[i].getBoundingClientRect().top) {
        imgs[i].src = imgs[i].getAttribute('data-src')
        count++
      }
    }
  }
    console.log(store.state.main.count +  '-- 我是main里面的count')
    const state = reactive({
    color: 'red'
  })
    return {
      computedCount,
      addCount,
      updateCount,
      state,
      submit,
      submit1,
      debounceSubmit,
      debounceSubmit1,
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
    /* 使用v-bind绑定state中的变量 */
    color: v-bind('state.color');
  } 
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
