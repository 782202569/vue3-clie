<template>
  <div>
    Home组件 -- {{title}}
    Home组件 -- {{description}}
    Home组件 -- {{count}}
    Home组件 -- {{content}}
  </div>
  <button @click="setUsername('wwwwwwww')">改变数字</button>
  {{userName}}
  <br />
  {{reserveTitle}}
</template>
<script lang="ts">
import { defineComponent, reactive, computed, toRefs, ref } from 'vue'
// 接口定义
interface Home{
  title: string;
  description: string;
  count: number;
  content?:string;
}

interface User {
  userName: string,
  age: number,
  setUsername(username: string):void,
  getUsername():string,
}

// let HomeData: Home = {
//   title: '我是一条新闻',
//   description: '我是一个新闻描述',
//   count: 12,
//   content:'我是内容'
// }
let HomeData = reactive({
  title: '我是一条新闻',
  description: '我是一个新闻描述',
  count: 12,
  content:'我是内容'
}) as Home
export default defineComponent({
  name: 'Home',
  // data() {
  //   return HomeData
  // },
  setup(){
    const btnClick = ():void => {
      HomeData.count = 666
    }
    // 1.实现接口的第一种写法
    let user: User = reactive({
      userName: '章三',
      age: 20,
      setUsername(username: string) {
        this.userName = username
      },
      getUsername(){
        return this.userName
      }
    })
    // 2.实现接口的第二种写法
    // let user = reactive<User>({
    //   userName: '章三',
    //   age: 20,
    //   setUsername(username: string) {
    //     this.userName = username
    //   },
    //   getUsername(){
    //     return this.userName
    //   }
    // })
    // 3.实现接口的第三种写法
    // let user = reactive({
    //   userName: '章三',
    //   age: 20,
    //   setUsername(username: string) {
    //     this.userName = username
    //   },
    //   getUsername(){
    //     return this.userName
    //   }
    // }) as User
    const reserveTitle = computed(():string => {
      return HomeData.title.split('').reverse().join("")
    })
    let countNumber = ref<number | string>('20')
    return {
      ...toRefs(HomeData),
      btnClick,
      reserveTitle,
      ...toRefs(user),
      countNumber
    }
  }
})
</script>