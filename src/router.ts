import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import MainLayout from './components/MainLayout.vue'
import Readme from './components/Readme.vue'
import Axios from 'axios'

Vue.use(Router)

export const routes = {
  home: '/',
  teams: '/teams',
  scoreboard: '/scoreboard',
  challenges: '/challenges',
  begginer: '/begginer',
  readme: '/readme',
  join: '/join'
}

Vue.mixin({
  data: () => ({
    routes
  })
})

export const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: routes.home,
      meta: {
        noAuth: true
      },
      component: Home
    },
    {
      path: '/*',
      name: routes.readme,
      component: MainLayout,
      children: [
        {
          path: '/readme',
          component: Readme
        }
      ]
    }
  ]
})

router.beforeEach(async (to, from, next) => {
  if (!to.meta.noAuth) {
    if (localStorage.getItem('riddleSolved')) {
      return next()
    }
    const riddleAnswer = localStorage.getItem('riddle')
    if (riddleAnswer) {
      const { data } = await Axios.post(
        'https://openwhisk.eu-gb.bluemix.net/api/v1/web/domagoj.zivanovic%40gmail.com_dev/default/riddle.json',
        {
          riddleAnswer
        }
      )
      if (data.riddle) {
        localStorage.setItem('riddleSolved', 'true')
        console.log('%c Congratulations', 'color: #ff9900')

        return next()
      }
    }
    console.log('Here\'s your clue: ')
    console.log('%c window.letMeIn = () => {...}', 'color: #ff9900')

    return next({ name: routes.home })
  }

  return next()
})
