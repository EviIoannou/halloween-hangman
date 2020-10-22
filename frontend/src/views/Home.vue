<template>
  <div class="home">
    {{/* BEM */}}
    <div class="home__content">
      <h1>
        Let's Play Some HaNgMaN 🎃🎃🎃
      </h1>
      <div class="home__inputs">
        <label for="playerone">Spelare Ett 👻</label>
        <input
          type="text"
          id="playerone"
          name="player"
          v-model="players[0].name"
          placeholder="Spelare ett"
        />
        <label for="playertwo">Spelare Två 👻</label>
        <input
          type="text"
          id="playertwo"
          name="player"
          v-model="players[1].name"
          placeholder="Spelare två"
        />
      </div>
      <button class="home__button" @click="startGame(players)">
        Start game
      </button>
    </div>
  </div>
</template>

<script>
import WordLength from '@/components/HelloWorld.vue'
export default {
  name: 'Home',
  components: {
    WordLength
  },
  data() {
    return {
      players: [
        { name: '', id: Math.random(Math.floor(1000 * 1000)) },
        { name: '', id: Math.random(Math.floor(1000 * 1000)) }
      ]
    }
  },
  methods: {
    startGame(e) {
      console.log(e)
      document.getElementById('playerone').value = ''
      document.getElementById('playertwo').value = ''
    }
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
  box-shadow: 0px 10px 14px -7px #276873;
  background: linear-gradient(to bottom, #000d21 5%, #a36700 100%);
  background-color: #000d21;
  border-radius: 8px;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-family: Arial;
  font-size: 16px;
  font-weight: bold;
  padding: 15px 50px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #3d768a;
}
</style>
