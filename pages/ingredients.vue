<template>
  <article class="ingredients-page">
    <h1>All ingredients</h1>

    <ul>
      <li
        v-for="ingredient in ingredients"
        class="ingredients-page-ingredient"
      >
        {{ingredient.name}}
        <CategoryLabel :ingredients="[ingredient]"/>
        <button
          type="button"
          @click="removeIngredient(ingredient)"
        >X
        </button>
      </li>
    </ul>
    <p>
      <a
        download="ingredients.json"
        :href="base64Ingredients"
      >Export ingredients</a>
    </p>

    <hr>

    <form
      @submit.prevent="addIngredient"
      autocomplete="off"
      class="new-ingredient-form"
    >
      <h2>Add new ingredient</h2>

      <h3><label for="ingredientName">Name</label></h3>
      <p>
        <input
          type="text"
          id="ingredientName"
          name="name"
        >
      </p>

      <h3>Sub ingredients</h3>
      <ul>
        <li
          v-for="(subIngredient, key) in subIngredients"
          :key="key"
        >
          <label>
            <input
              type="checkbox"
              name="subIngredients"
              :value="key"
            >
            {{subIngredient}}</label>
        </li>
      </ul>
      <p>
        <button class="big">Save</button>
      </p>
    </form>
  </article>
</template>

<script>
  import CategoryLabel from '~/components/CategoryLabel'

  export default {
    components: { CategoryLabel },
    computed: {
      ingredients() {
        return this.$store.state.ingredients.list
      },
      subIngredients() {
        return this.$store.state.subIngredients.list
      },
      base64Ingredients() {
        return 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.ingredients))
      },
    },
    async fetch({ store }) {
      return Promise.all([
        store.dispatch('ingredients/fetchList'),
        store.dispatch('subIngredients/fetchList'),
      ])
    },
    methods: {
      addIngredient(event) {
        console.log('sub', event.target.subIngredients)

        this.$store.commit('ingredients/add', {
          name: event.target.name.value,
          subIngredients: Array.from(event.target.subIngredients)
            .filter(checkbox => checkbox.checked)
            .map(checkbox => checkbox.value),
        })

        event.target.name.value = ''
      },
      removeIngredient(ingredient) {
        this.$store.commit('ingredients/remove', ingredient)
      },
    },
  }
</script>

<style lang="less">
  .ingredients-page-ingredient {
    position: relative;
    padding-bottom: .7em;

    .meatiness-label {
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }
</style>