<template>
  <div class="page-wrapper">
    <MainNavigation/>
    <main class="main-content">
      <nuxt v-if="supportsIndexedDb"/>
      <article
        v-else
        class="error-message"
      >
        <h1>Sadly, your browser isn't (yet) supported</h1>
        <p>The foundation of this site is build on top of IndexedDB (a browser feature).</p>
        <p>To see a list of supported browsers, please refer to the <a href="https://caniuse.com/#feat=indexeddb2">"Can
          I use" page for Indexed DB 2.0</a>.</p>
      </article>
    </main>
    <button
      @click="darkModeEnabled = !darkModeEnabled"
      class="dark-mode-button"
      type="button"
      title="Toggle dark mode"
    >
      {{darkModeEnabled ? '☀️' : '🌙'}}
    </button>
  </div>
</template>

<script>
  import MainNavigation from '~/components/MainNavigation'

  export default {
    components: { MainNavigation },
    data() {
      return {
        darkModeEnabled: false,
        supportsIndexedDb: process.server || window.indexedDB,
      }
    },
    head() {
      return {
        bodyAttrs: {
          class: this.darkModeEnabled ? 'dark-mode' : '',
        },
      }
    },
  }
</script>
<style lang="less">
  // Main colors
  @main-background-color: #EFE9E1;
  @input-field-background-color: lighten(@main-background-color, 10);
  @link-color: navy;
  @text-color: black;

  // Navigation colors
  @navigation-background-color: #47494E;
  @navigation-link-color: white;
  @navigation-text-color: @main-background-color;

  // UI element colors
  @button-color: @navigation-background-color;
  @button-text-color: @main-background-color;

  :root {
    // Main colors
    --main-background-color: @main-background-color;
    --input-field-background-color: @input-field-background-color;
    --link-color: @link-color;

    // Navigation colors
    --navigation-background-color: @navigation-background-color;
    --navigation-link-color: @navigation-link-color;

    // UI element colors
    --button-color: @button-color;
    --button-text-color: @button-text-color;
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
    color: var(--text-color);

    &.dark-mode {
      // Main colors
      --main-background-color: darken(@navigation-background-color, 5);
      --input-field-background-color: mix(@navigation-background-color, @input-field-background-color);
      --link-color: @navigation-link-color;
      --text-color: @navigation-text-color;

      // Navigation colors
      --navigation-background-color: darken(@navigation-background-color, 10);
      --navigation-link-color: @navigation-link-color;

      // UI element colors
      --button-color: @button-text-color;
      --button-text-color: @button-color;
    }
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

  input:not([type=range],[type=checkbox]),
  select {
    background: var(--input-field-background-color, @input-field-background-color);
    border: 0;
    font-size: .8em;
    font-family: inherit;
    box-shadow: 0 .1em .3em rgba(0, 0, 0, .1);
    padding: 0 .7em;
    height: 2em;
    border-radius: .3em;
  }

  button,
  .fake-button,
  input[type=submit] {
    border: none;
    background: var(--button-color, @button-color);
    color: var(--button-text-color, @button-text-color);
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

    &.big {
      font-size: 1.1em;
    }
  }

  .error-message {
    background: #D67171;
    padding: 1em 1.5em;

    > *:first-child {
      margin-top: 0;
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
    color: var(--navigation-text-color, white);

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

  .dark-mode-button {
    @size: 2em;
    position: absolute;
    display: block;
    right: 1em;
    bottom: 1em;
    height: @size;
    width: @size;
    padding: 0;
    text-align: center;
    text-indent: .2em;
    border-radius: 100%;
  }
</style>
