<template>
  <!-- App.vue -->

  <v-app>
    <v-navigation-drawer app temporary>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Title</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text>Link One</v-btn>
        <v-btn text>Link Two</v-btn>
        <v-btn text>Link Three</v-btn>
      </v-toolbar-items>
    </v-app-bar>

    <v-main>

        <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
