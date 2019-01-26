<template>
  <article class="pizzas-page">
    <h1>List of pizzas</h1>
    <ol>
      <li
        v-for="pizza in pizzas"
        :key="pizza.name"
      >
        {{pizza.name}}
        <br>
        <ul class="ingredients">
          <Ingredient
            v-for="ingredient in pizza.ingredients"
            :key="ingredient"
            :ingredient="ingredient"
          />
        </ul>
      </li>
    </ol>
  </article>
</template>

<script>
  import Ingredient from '~/components/Ingredient'

  export default {
    components: { Ingredient },
    data() {
      return {
        pizzas: [
          {
            name: 'Margherita',
            ingredients: [
              'Tomato sauce',
              'Mozzarella cheese',
              'Fresh basil',
              'Olive oil',
            ],
          },
          {
            name: 'Marinara',
            ingredients: [
              'Tomato sauce',
              'Oregano',
              'Garlic',
            ],
          },
        ],
      }
    },
    methods: {
    },
  }
</script>

<style>
  .ingredients {
    font-size: .8em;
    padding-left: 0;
  }
</style>