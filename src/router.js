import Vue from 'vue'
import Router from 'vue-router'
import Ability from './views/Ability.vue'
import Work from './views/Work.vue'
import Use from './views/Use.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'ability',
      component: Ability
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path: '/use',
      name: 'use',
      component: Use,
    }
  ]
})
