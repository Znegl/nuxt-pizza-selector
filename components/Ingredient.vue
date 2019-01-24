<template>
  <li class="ingredient">{{ingredient}}</li>
</template>

<script>
  export default {
    props: {
      ingredient: {
        type: String,
        default: undefined,
      },
    },
  }
</script>

<style lang="less">
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
      background: #BBE2A0;
    }
  }
</style>