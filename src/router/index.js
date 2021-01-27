import Vue from 'vue'
import VueRouter from 'vue-router'
import Auth from '../components/Auth'
import Home from '../components/Home'
import Friends from '../components/Friends'
import Messages from '../components/Messages'
import Settings from '../components/Settings'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'auth',
      component: Auth
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/friends',
      name: 'Friends',
      component: Friends
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    }
  ],
  mode: 'history'
})
