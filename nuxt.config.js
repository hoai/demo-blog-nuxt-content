import getRoutes from './utils/getRoutes'

export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  //ssr: false,
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'static',//'static', 'server'
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: 'Youtube subtitles extractor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Download subtitles directly from Youtube, VIU, Viki, Vlive and more. We supports downloading all subtitles/captions formats such as: SRT, TXT, VTT'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: ['~/plugins/axios.js'],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    //'@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt/content
    '@nuxt/content',
    '@nuxtjs/sitemap',
    '@nuxtjs/axios'
  ],
  /*
   ** Content module configuration
   ** See https://content.nuxtjs.org/configuration
   */
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-material-oceanic.css'
      }
    },
    nestedProperties: ['author.name']
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://blog.subtitlevideo.com/',
    routes() {
      return getRoutes()
    }
  },
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:5000'
  },
  generate: {
    fallback: '404.html'
  }
}
