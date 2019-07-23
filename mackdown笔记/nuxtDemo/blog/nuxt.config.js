const pkg = require("./package");

module.exports = {
  // mode: "universal",
  router: {
    middleware: ["stats"]
  },
  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: pkg.description }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: "~/components/loading.vue",

  /*
   ** Global CSS
   */
  css: ["~/assets/index.css","~/assets/elementUI.css"],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ["~/plugins/api.js", "~/plugins/filter.js","~/plugins/ElementUI","~/plugins/ctx-inject"],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios"
  ],
  /*
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
    extend(config, ctx) {}
  }
};
