import { createStore, Store } from 'vuex'
import { ComponentCustomProperties } from 'vue'
// 配置vue + ts 项目使用vuex

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    count: number
  }

  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
import mainStore from './mainStore'
import newStore from './newStore'
const store = createStore({
  state() {
    return {
      count: 1,
    }
  },
  mutations: {
    incCount(state: any) {
      state.count++
    },
    updateCount(state: any, val: number) {
      state.count = val
    }
  },
  modules: {
    main: mainStore,
    new: newStore,
  }
})

export default store