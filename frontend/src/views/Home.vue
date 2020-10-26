<template>
  <div class="home">
    {{/* BEM */}}
    <div class="home__content">
      <h1>
        HalloWeen HaNgMaN!1!1!
      </h1>
      <div class="home__inputs">
        <label for="playerone">Spelare Ett</label>
        <input
          type="text"
          id="playerone"
          name="firstname"
          :v-model="player1"
          placeholder="Spelare ett"
        />

        <label for="playertwo">Spelare Två</label>
        <input
          type="text"
          id="playertwo"
          name="lastname"
          :v-model="player2"
          placeholder="Spelare två"
        />
      </div>
      <button class="home__button">Button</button>
    </div>
    <WordLength msg="3" />
    <WordValidation />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import WordLength from "@/components/WordLength.vue";
import WordValidation from "@/components/WordValidation.vue"

export default {
  name: 'Home',
  components: {
    WordValidation,
    WordLength
  },
  data() {
    return {
      player1: '',
      player2: ''
    }
  },
  mounted() {
    this.player1
  }
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
