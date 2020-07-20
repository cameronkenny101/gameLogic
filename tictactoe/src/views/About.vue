<template>
  <div class="about">
    <Particles></Particles>
  </div>
</template>

<script>
// @ is an alias to /src
import Particles from "@/components/Particles.vue";
export default {
  name: "About",
  components: { Particles }
};
</script>
<style>
.about {
  background-color: #18bc9c;
  width: 100%;
  height: 100%;
}
</style>
