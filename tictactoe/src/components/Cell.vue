<template>
    <div class="cell">
      <span v-if="value !== ''">{{ value }}</span>
    </div>
</template>

<script>
  export default {
    props: {
      value: String,
    }
  }
</script>
<style>
  .cell {
    width: 64px;
    height: 64px;
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }