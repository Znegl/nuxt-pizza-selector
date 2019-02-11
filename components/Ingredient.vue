<template>
  <li class="ingredient">{{ingredient.name}}</li>
</template>

<script>
  export default {
    props: {
      ingredient: {
        type: Object,
        default: {
          id: undefined,
          name: '',
          subIngredients: [],
        },
      },
    },
  }
</script>

<style lang="less">
  @ingredient-hover-color: #BBE2A0;

  .ingredient {
    display: inline-block;
    padding: 0 .4em;
    margin-left: -.2em;
    transition: background .2s ease-out;

    &:first-child {
      margin-left: -.4em;
    }

    &:not(:last-child):after {
      content: ', ';
    }

    &:hover {
      background: @ingredient-hover-color;
    }
  }

  .dark-mode .ingredient {
    &:hover {
      background: darken(@ingredient-hover-color, 45);
    }
  }
</style>