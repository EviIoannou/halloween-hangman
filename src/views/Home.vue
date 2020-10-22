<template>
  <div class="home">
    {{/* BEM */}}
    <div class="home__content">
      <h1>
        HalloWeen HaNgMaN!1!1!
      </h1>
      <div class="home__inputs">
        <label for="fname">Spelare Ett</label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Spelare ett"
        />

        <label for="lname">Spelare Två</label>
        <input
          type="text"
          id="lname"
          name="lastname"
          placeholder="Spelare två"
        />
      </div>
      <button class="home__button">Button</button>
    </div>
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
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}

.home__content {
  color: white;
  margin-bottom: 200px;
}
.home__content > h1 {
  justify-content: center;
  align-items: center;
  display: flex;
  height: 200px;
}
.home__inputs {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.home__inputs > input {
  padding: 10px;
  margin: 10px 0px;
}
.home__button {
  padding: 10px;
}
</style>
