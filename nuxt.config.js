export default {
    components: true,
    modules: [
      '@nuxtjs/vuetify',
      '@nuxtjs/axios',
      '@nuxtjs/auth'
    ],
    axios: {
      baseURL: 'http://localhost:3004'
    },
    auth: {
      redirect: {
        login: '/login', 
        logout: '/login',
        callback: false,
        home: '/user'
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
    },
    router: {
      middleware: ['auth']
    }
  }
  