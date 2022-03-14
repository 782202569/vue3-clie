import { createRouter, createWebHashHistory } from 'vue-router'

// 引入组件
import Main from '@/components/main.vue'
import Home from '@/views/home/home.vue'
import NewsList from '@/views/news/newsList.vue'
import NewsDetails from '@/views/news/newsDetails.vue'
// 配置路由
const router = createRouter({
  // 4. 内部提供了 history 模式的实现。为了简单起见，我们在这里使用 hash 模式。
  history: createWebHashHistory(),
  routes: [
    // { path: '', redirect: '/NewsList' },
    { path: '/', component: Main, name: 'main' },
    { path: '/Home', component: Home, name: 'home' },
    { path: '/NewsList', component: NewsList, name: 'newsList', alias: ["/list"] },
    { path: '/NewsDetails/:aid', component: NewsDetails, name: 'newsDetails' },
  ], // `routes: routes` 的缩写
})

export default router