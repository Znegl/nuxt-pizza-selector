<template>
  <article class="pizzas-page">
    <h1>List of pizzas</h1>
    <ol>
      <li
        v-for="pizza in pizzasWithIngredients"
        :key="pizza.name"
      >
        {{pizza.name}}
        <CategoryLabel :ingredients="pizza.ingredients"/>
        <br>
        <ul class="ingredients">
          <Ingredient
            v-for="ingredient in pizza.ingredients"
            :key="ingredient.name"
            :ingredient="ingredient"
          />
        </ul>
      </li>
    </ol>
  </article>
</template>

<script>
  import CategoryLabel from '~/components/CategoryLabel'
  import Ingredient from '~/components/Ingredient'

  export default {
    components: {
      CategoryLabel,
      Ingredient,
    },
    data() {
      return {
        pizzas: [
          {
            name: 'Margherita',
            ingredients: [
              1,
              2,
              5,
              12,
            ],
          },
          {
            name: 'Marinara',
            ingredients: [
              1,
              6,
              4,
            ],
          },
        ],
      }
    },
    computed: {
      pizzasWithIngredients() {
        const store = this.$store

        return this.pizzas.map(pizza => {
          let pizzaClone = { ...pizza }

          pizzaClone.ingredients = pizza.ingredients.map(id => {
            return store.getters['ingredients/get'](id)
          })

          return pizzaClone
        })
      },
    },
    async fetch({ store }) {
      await store.dispatch('ingredients/fetchList')
    },
  }
</script>

<style>
  .ingredients {
    font-size: .8em;
    padding-left: 0;
  }
</style>