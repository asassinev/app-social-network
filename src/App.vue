<template>
  <div id="app">
    <nav-bar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  components: { NavBar },
  data () {
    return {
      links: [
        {
          path: '',
          name: 'Home'
        },
        {
          path: '/friends',
          name: 'Friends'
        },
        {
          path: '/messages',
          name: 'Messages'
        },
        {
          path: '/settings',
          name: 'Settings'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
</style>
