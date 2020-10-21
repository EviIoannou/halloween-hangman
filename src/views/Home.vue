<template>
  <div class="home">
    {{/* BEM */}}

    <h1>HangMan</h1>
    <input type="text" />
    <input type="text" />
    <button>Starta spel</button>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.home {
  height: 100%;
  width: 100%;
  background-color: red;
}
</style>
