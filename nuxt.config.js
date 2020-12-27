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
      baseURL: 'https://6hv0hej4sk.execute-api.us-east-1.amazonaws.com/helloworld'
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
  