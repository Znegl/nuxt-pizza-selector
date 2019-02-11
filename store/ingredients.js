export const state = () => ({
  list: [],
})

export const getters = {
  get(state) {
    return (id) => {
      return state.list.find(ingredient => {
        return ingredient.id === id
      }) || { name: 'Not found' }
    }
  },
}

export const mutations = {
  setList(state, ingredients) {
    state.list = ingredients
  },
  add(state, data) {
    if (data && data.name) {
      state.list.push(data)
    }
  },
  remove(state, ingredient) {
    if (ingredient) {
      state.list.splice(state.list.indexOf(ingredient), 1)
    }
  },
}

export const actions = {
  async fetchList({commit}) {
    await this.$axios.get('/ingredients.json')
      .then(response => {
        commit('setList', response.data)
      }).catch(err => {
      console.error('argh!', err)
    })
  },
}