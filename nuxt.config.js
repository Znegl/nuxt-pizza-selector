const pkg = require('./package')

const appName = 'Pizza selector'
const appDescription = 'The perfect tool for selecting the right pizza.'

module.exports = {
  mode: 'universal',

  meta: {
    name: appName,
    description: appDescription,
  },
  manifest: {
    name: appName,
    short_name: appName,
    description: appDescription,
    background_color: '#EFE9E1',
    theme_color: '#47494E',
  },

  /*
  ** Headers of the page
  */
  head: {
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/png',
        href: '/favicon.png',
      },
      {
        rel: 'preload',
        as: 'style',
        href: 'https://fonts.googleapis.com/css?family=Enriqueta|Open+Sans',
        onload: 'this.rel="stylesheet"',
      },
    ],
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ], /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    },
  },
}
