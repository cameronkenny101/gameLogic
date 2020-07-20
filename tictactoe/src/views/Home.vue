<template>
  <div class="home">
    <Particles></Particles>
    <div class="centered_board">
      <Board></Board>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Particles from "@/components/Particles.vue";
import Board from "@/components/Board.vue";
export default {
  name: "Home",
  components: { Particles, Board }
};
</script>
<style scoped>
.home {
  background-color: #18bc9c;
  width: 100%;
  height: 100%;
}
.centered_board {
  position: absolute;
  align-content: center;
  top: 30%;
  width: 100%;
}
</style>
