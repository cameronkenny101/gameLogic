<template>
  <nav>
    <v-toolbar dark app elevation>
      <v-toolbar-title class="white--text">
        <v-btn app>
          <router-link class="anchor" to="/">TicTacToe</router-link>
        </v-btn>
        <v-btn app>
          <router-link class="anchor" to="/about">About</router-link>
        </v-btn>
      </v-toolbar-title>
    </v-toolbar>
  </nav>
</template>

<script>
export default {};
</script>

<style scoped>
.anchor {
  text-decoration: none;
  color: #18bc9c;
}
</style>