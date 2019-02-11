<template>
  <span class="category-labels">
    <span
      v-for="label in labels"
      class="category-label"
      :class="label.className"
      :key="label.label"
    >
      {{label.name}}
    </span>
  </span>
</template>

<script>
  /**
   * @typedef {{label: LabelType, name: string, className: string}} Label
   */

  /**
   * @enum {string}
   */
  const LabelType = {
    VEGAN: 'vegan',
    VEGETARIAN: 'vegetarian',
    FISHY: 'fishy',
    MEAT: 'meat',
  }

  export default {
    props: {
      ingredients: {
        type: Array,
        required: true,
      },
    },
    computed: {
      /**
       * @returns {Array<LabelType>}
       */
      labels() {
        const labels = []

        if (this.ingredients.some(ingredient => ingredient.subIngredients.includes('meat'))) {
          labels.push(LabelType.MEAT)
        }
        if (this.ingredients.some(ingredient => ingredient.subIngredients.includes('fish'))) {
          labels.push(LabelType.FISHY)
        }

        if (labels.length === 0) {
          if (this.ingredients.some(ingredient => ingredient.subIngredients.includes('animalProducts'))) {
            labels.push(LabelType.VEGETARIAN)
          } else {
            labels.push(LabelType.VEGAN)
          }
        }

        return labels.map(label => {
          return {
            label: label,
            name: this.getLabelName(label),
            className: this.getLabelClassName(label),
          }
        })
      },

    },
    methods: {
      /**
       * @param {LabelType} label
       * @returns {string}
       */
      getLabelName(label) {
        switch (label) {
          case LabelType.VEGAN:
            return 'Vegan'
          case LabelType.VEGETARIAN:
            return 'Vegetarian'
          case LabelType.FISHY:
            return 'Fishy'
          case LabelType.MEAT:
            return 'Meaty'
        }
      },

      /**
       * @param {LabelType} label
       * @returns {string}
       */
      getLabelClassName(label) {
        switch (label) {
          case LabelType.VEGAN:
            return 'vegan'
          case LabelType.VEGETARIAN:
            return 'vegetarian'
          case LabelType.FISHY:
            return 'fishy'
          case LabelType.MEAT:
            return 'meat'
        }
      },
    },
  }
</script>

<style lang="less">
  .category-label {
    background-color: darkslategray;
    color: white;
    display: inline-block;
    border-radius: .3em;
    font-size: .5em;
    padding: .2em .5em;
    text-transform: uppercase;
    line-height: 1.5em;
    margin-right: .3em;

    &.vegan {
      background-color: darkolivegreen;
    }

    &.vegetarian {
      background-color: seagreen;
    }

    &.fishy {
      background-color: cadetblue;
    }

    &.meat {
      background-color: indianred;
    }
  }
</style>