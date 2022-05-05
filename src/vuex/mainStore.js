let mainStore = {
  state() {
    return {
      count: 10,
    }
  },
  mutations: {
    incCount(state) {
      state.count++
    },
    updateCount (state, val) {
      state.count = val
    }
  }
}

export default mainStore