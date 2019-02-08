import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import MainLayout from './components/MainLayout.vue'
import Readme from './components/Readme.vue'
import Join from './components/Join.vue'
import Challenges from './components/Challenges.vue'
import CreateTeam from './components/CreateTeam.vue'
import Scoreboard from './components/Scoreboard.vue'
import Teams from './components/Teams.vue'

Vue.use(Router)

export const routes = {
  home: '/',
  teams: '/teams',
  scoreboard: '/scoreboard',
  challenges: '/challenges',
  begginer: '/begginer',
  readme: '/readme',
  join: '/join',
  createTeam: '/create-team',
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
      component: MainLayout,
      children: [
        {
          path: '/readme',
          name: routes.readme,
          component: Readme,
        },
        {
          path: '/join',
          name: routes.join,
          component: Join,
        },
        {
          path: '/create-team',
          name: routes.createTeam,
          component: CreateTeam,
        },
        {
          path: '/challenges',
          name: routes.challenges,
          component: Challenges,
        },
        {
          path: '/scoreboard',
          name: routes.scoreboard,
          component: Scoreboard,
        },
        {
          path: '/teams',
          name: routes.teams,
          component: Teams,
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
      if (riddleAnswer === 'solved') {
        localStorage.setItem('riddleSolved', 'true')
        console.log('%c Congratulations', 'color: #ff9900')

        return next()
      }
    }

    return next({ name: routes.home })
  }

  return next()
})
