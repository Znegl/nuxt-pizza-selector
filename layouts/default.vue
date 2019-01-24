<template>
  <div class="page-wrapper">
    <MainNavigation/>
    <main class="main-content">
      <nuxt/>
    </main>
  </div>
</template>

<script>
  import MainNavigation from '~/components/MainNavigation'

  export default {
    components: { MainNavigation },
  }
</script>
<style lang="less">
  // Main colors
  @main-background-color: #EFE9E1;
  @input-field-background-color: lighten(@main-background-color, 10);
  @link-color: navy;

  // Navigation colors
  @navigation-background-color: #47494E;
  @navigation-link-color: white;

  :root {
    // Main colors
    --main-background-color: @main-background-color;
    --input-field-background-color: @input-field-background-color;
    --link-color: @link-color;

    // Navigation colors
    --navigation-background-color: @navigation-background-color;
    --navigation-link-color: @navigation-link-color;
  }

  *,
  *:before,
  *:after {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    font-family: 'Open Sans', serif;
    background: var(--main-background-color);
  }

  h1, h2, h3, h4 {
    font-family: 'Enriqueta', serif;
  }

  h1, h2, h3, h4, h5 {
    margin: .25em 0;
  }

  p, ul, ol {
    margin: .5em 0;
  }

  ul, ol {
    padding-left: 1.8em;
  }

  a {
    color: var(--link-color, @link-color);
  }

  input, select {
    background: var(--input-field-background-color, @input-field-background-color);
    border: 0;
    font-size: .8em;
    font-family: inherit;
    box-shadow: 0 .1em .3em rgba(0, 0, 0, .1);
    padding: 0 .7em;
    height: 2em;
    border-radius: .3em;
  }

  input[type=checkbox] {
    height: auto;
  }

  button,
  .fake-button,
  input[type=submit] {
    border: none;
    background: var(--navigation-background-color);
    color: var(--main-background-color);
    border-radius: 0.3em;
    font-size: .8em;
    font-family: inherit;
    -webkit-appearance: none;
    box-shadow: 0 .1em .3em rgba(0, 0, 0, .1);
    padding: 0 .7em;
    height: 2em;

    &:hover {
      opacity: .9;
    }

    &:active {
      transform: scale(.95);
      box-shadow: none;
    }
  }

  .page-wrapper {
    display: flex;
    min-height: 100vh;
  }

  .main-navigation,
  .main-content {
    padding: 1.5em 2em;

    > *:first-child {
      margin-top: 0;
    }
  }

  .main-navigation {
    padding-top: 2em;
    background: var(--navigation-background-color, black);
    color: var(--main-background-color, white);

    ul {
      list-style: none;
      padding-left: 0;
    }

    a {
      color: var(--navigation-link-color, @navigation-link-color);
    }
  }

  .main-content {

  }

</style>
