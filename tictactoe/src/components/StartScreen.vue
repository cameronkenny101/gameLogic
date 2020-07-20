<template>
  <v-overlay :absolute="absolute" :opacity="opacity" :value="overlay">
    <v-btn class="ma-2" color="red" @click="overlay = false">online</v-btn>
    <v-btn class="ma-2" color="blue" @click="overlay = false">offline</v-btn>
  </v-overlay>
</template>
<script>
export default {
  data: () => ({
    absolute: true,
    opacity: 1,
    overlay: true
  })
};
</script>
