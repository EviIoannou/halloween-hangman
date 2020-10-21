<template>
  <div class="home">
    {{/* BEM */}}

    <h1>HangMan</h1>
    <div class="home__start">
      <input type="text" />
      <input type="text" />
      <button>Starta spel</button>
    </div>
  </div>
</template>
'fix'
<script>
export default {
  name: 'Home',
  components: {}
}
</script>

<style scoped>
.home {
  color: white;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.home > h1 {
  text-align: center;
}
.home__start {
  display: flex;
  margin: auto;
  flex-direction: column;
}
.home__start > input {
  width: 200px;
}
.home__start > button {
}
</style>
