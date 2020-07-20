<template>
  <v-row align="center" justify="center">
    <div class="text-center">
      <v-card color="white" width="325px" height="325px" elevation="24" rounded>
        <Start></Start>
        <v-img src="@/assets/board.svg"></v-img>
      </v-card>
    </div>
  </v-row>
</template>

<script>
import Start from "@/components/StartScreen";
export default {
  name: "Board",
  components: { Start }
};
</script>
