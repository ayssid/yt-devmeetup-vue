<template>
  <v-app>
    <v-navigation-drawer temporary absolute v-model="sideNav">
      <v-list>
        <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link" exact>
          <v-list-tile-action @click="onLogOut">
            <v-icon>{{item.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{item.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile v-if="userIsAuthenticated">
          <v-list-tile-action>
            <v-icon>exit_to_app</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Log Out</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>  
      </v-toolbar-title>
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" >
        <v-btn flat v-for="item in menuItems" :key="item.title" :to="item.link" exact>
          <v-icon left>{{item.icon}}</v-icon>
          {{item.title}}
        </v-btn>
        <v-btn flat v-if="userIsAuthenticated" @click="onLogOut">
          <v-icon left>exit_to_app</v-icon>
          Log Out
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  methods: {
    onLogOut () {
      this.$store.dispatch('logout')
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        {icon: 'face', title: 'Sign Up', link: '/signup'},
        {icon: 'lock_open', title: 'Sign In', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          {icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          {icon: 'room', title: 'Organize Meetup', link: '/meetups/new'},
          {icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }

      return menuItems
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    }
  },
  name: 'App'
}
</script>
