<template>
  <div class="home">
    {{/* BEM */}}
    <div class="home__title">
      <h1>😈 Halloween Hängagubbe 😈</h1>
      <p>
        Välkommen till Halloween Hangman 2.0. Detta är en spökig upplevelse att
        ta dig an själv eller utmana en vän.
      </p>
    </div>
    <div class="home__cont">
      <div class="home__content">
        <h1>
          🦇🎃 Välj namn 🎃🦇
        </h1>
        <div class="home__inputs">
          <span>
            Spelare Ett 👻
          </span>
          <input
            type="text"
            id="playerone"
            name="player"
            v-model="players[0].name"
            placeholder="Spelare ett"
          />
        </div>
        <div class="home__inputs">
          <span>
            Spelare Två 👻
          </span>
          <input
            type="text"
            id="playertwo"
            name="player"
            v-model="players[1].name"
            placeholder="Spelare två"
          />
        </div>
      </div>
      <button
        class="home__button"
        :disabled="!players[0].name"
        @click="startGame(players)"
      >
        Start game
      </button>
    </div>

  </div>
</template>

<script>

import { v4 as uuidv4 } from 'uuid'

export default {
  name: 'Home',
  data() {
    return {
      players: [
        { name: '', id: uuidv4() },
        { name: '', id: uuidv4() }
      ]
    }
  },
  methods: {
    startGame(players) {
      document.getElementById('playerone').value = ''
      document.getElementById('playertwo').value = ''
      localStorage.setItem('player-storage', JSON.stringify(players))
      this.$router.push({
        path: 'game',
        query: { players: players }
      })
    }
  },
    props:['socket']
}
</script>

<style scoped>
.home {
  height: 100%;
  background-image: url('../assets/halloween.png');
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  background-size: cover;
  flex-direction: column;
}
.home__title {
  height: 20%;
  color: #e56400;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}
.home__title > h1 {
  padding-bottom: 50px;
}

.home__cont {
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
.home__content {
  width: 600px;
  border: 2px solid #e56400;
  border-radius: 5px;
  background-color: rgba(0, 0, 0, 0.241);
  padding: 100px;
}
.home__content > h1 {
  margin-bottom: 3rem;
  text-align: center;
  color: #e56400;
}
.home__inputs {
  width: 100%;
  align-items: center;
  margin-bottom: 10px;
  display: flex;
}

.home__inputs > span {
  font-size: 20px;
  color: #e56400;
  font-weight: bold;
  width: 40%;
}

.home__inputs > input {
  padding: 15px;
  border: none;
  border-radius: 4px;
  background-color: black;
  color: orange;
}
.home__button {
  margin-top: 1rem;
  padding: 1.5rem;
  background-color: #e56400;
  color: black;
  font-size: 1.5rem;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 4px 4px 4px rgba(82, 36, 31, 0.5);
  border-radius: 4px;
}
</style>

const lte = (num) => { prop(från wrongcount ex) props.wrongcount >= num }
