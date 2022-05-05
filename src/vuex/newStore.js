let newStore = {
  state() {
    return {
      count: 20,
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

export default newStore