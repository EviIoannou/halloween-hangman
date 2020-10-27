<template>
  <div class="game">
    <div class="game__container">
      <header class="game__header">
        <h1>Game On</h1>
      </header>
      <main class="game__main">
        <div class="game__item grid__name">
          <h1 style="border-bottom: 2px solid #eee; margin-bottom: 1rem;">
            Spelarens namn
          </h1>
          <div
            class="player__name"
            v-for="(player, index) in players"
            :key="player.id"
          >
            <template v-if="player.name !== ''">
              Spelare {{ index + 1 }}: {{ player.name }}
            </template>
          </div>
        </div>
        <div class="game__item grid__game">
          <img src="../assets/game.png" />
        </div>
        <div class="game__item grid__words">
          <h1 style="border-bottom: 2px solid #eee; margin-bottom: 1rem;">
            Valda bokstäver
          </h1>
          <p>a, t, e ,s</p>
        </div>
        <div class="game__item grid__letters">
          <div v-for="(word, index) in listOfWords" :key="word[index]">
            <div class="wordbox">{{ word }}</div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    listOfWords() {
      return "abcdefghijklmnopqrstuvwqyzåäö".split("");
    },
  },
  data() {
    return {
      players: this.$route.query.players,
    };
  },
  mounted() {
    this.players = JSON.parse(localStorage.getItem("player-storage") || "[]");
  },
  watch: {
    players(newNames) {
      console.log(newNames);
      localStorage.players = newNames;
    },
  },
};
</script>

<style scoped>
.game {
  height: 100%;
  background-image: url("../assets/halloween.png");
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  background-position: center;
}
.game__container {
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
}
.game__header {
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
.game__main {
  display: grid;
  height: 80vh;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(12, 1fr);
}
.game__item {
  padding: 2rem;
  text-align: center;
}
.grid__game {
  grid-row: 2/12;
  grid-column: 2/3;
  margin-bottom: 2rem;
}
.grid__name {
  grid-row: 1/4;
  grid-column: 1/1;
}
.grid__words {
  grid-row: 1/4;
  align-content: center;
  grid-column: 3/4;
}
.grid__words > p {
  font-size: larger;
}
.grid__letters {
  grid-row: 8/12;
  display: flex;
  justify-content: center;
  gap: 1rem;
  grid-column: 1/4;
}
.wordbox {
  padding: 1rem;
  background-color: black;
  cursor: pointer;
}
</style>
