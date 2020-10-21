<template>
  <div class="home">
    {{/* BEM */}}

    <h1>HangMan</h1>
    <div class="home__start">
      <label for="fname">First name:</label>
      <input type="text" id="fname" name="fname" />
      <label for="lname">Last name:</label>
      <input type="text" id="lname" name="lname" />
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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.home > h1 {
  text-align: center;
  margin-top: 10%;
}
.home__start {
  display: flex;
  flex-direction: column;
  margin: auto;
}
.home__start > input {
  width: 200px;
}
.home__start > button {
}
</style>
