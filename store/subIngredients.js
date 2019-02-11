export const state = () => ({
  list: [],
})

export const getters = {
  get(state) {
    return state.list
  },
}

export const mutations = {
  setList(state, ingredients) {
    state.list = ingredients
  },
}

export const actions = {
  async fetchList({commit}) {
    await this.$axios.get('/sub-ingredients.json')
      .then(response => {
        commit('setList', response.data)
      }).catch(err => {
        console.error('argh!', err)
      })
  },
}