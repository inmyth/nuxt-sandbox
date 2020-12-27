export default {
    components: true,
    modules: [
      '@nuxtjs/vuetify',
      '@nuxtjs/axios',
      '@nuxtjs/auth'
    ],
    plugins: [
      { src: '~/plugins/amplify.js', mode: 'client' }
    ],
    axios: {
      baseURL: 'http://localhost:3004'
    },
    auth: {
      redirect: {
        login: '/login', 
        logout: '/login',
        callback: false,
        home: '/'
      },
      strategies: {
        local: {
          endpoints: {
            login: { url: '/auth/sign_in', method: 'post', propertyName: false },
            logout: false,
            user: false
          }
        }
      }  
    }
  }
  