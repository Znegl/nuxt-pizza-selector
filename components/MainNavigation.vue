<template>
  <nav class="main-navigation">
    <ul>
      <li><nuxt-link to="/">Front page</nuxt-link></li>
      <li><nuxt-link to="/pizzas">Pizzas</nuxt-link></li>
      <li><nuxt-link to="/style">Style playground</nuxt-link></li>
    </ul>
  </nav>
</template>

<style lang="less" scoped>
  .main-navigation {
    a.nuxt-link-exact-active {

    }
  }
</style>