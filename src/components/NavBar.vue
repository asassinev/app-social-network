<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" to="/">Creative Society</router-link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="container">
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="menu">
          <li class="menu__item" v-for="(link, i) in links" :key="i">
            <router-link class="menu__link" exact active-class="active-link" :to="link.path">{{ link.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      links: [
        {
          path: '/home',
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
        },
        {
          path: '/',
          name: 'Logout'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
  .menu {
    display: flex;
    list-style: none;
    margin: 0;
    &__link {
      padding: 10px 20px;
      color: black;

      &:hover {
        color: rgb(34, 12, 158);
        text-decoration: none;
      }
    }
  }
</style>
