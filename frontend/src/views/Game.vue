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
          <Hangman :letters="letters" />
        </div>
        <div class="game__item grid__words">
          <h1 style="border-bottom: 2px solid #eee; margin-bottom: 1rem;">
            Valda bokstäver
          </h1>
          <div class="grid__word">
            <p v-for="(letter, index) in letters" :key="letter[index]">
              {{ letter }}
            </p>
          </div>
        </div>
        <div class="game__item grid__letters">
          <WordValidation
            :players="players"
            @invalidLetters="onInvalidLetter"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Hangman from "../components/Hangman";
import WordValidation from "@/components/WordValidation.vue";
export default {
  components: {
    Hangman,
    WordValidation,
  },
  data() {
    return {
      letters: [],
      players: this.$route.query.players,
    };
  },
  methods: {
    onInvalidLetter(letters) {
      console.log(letters);
      this.letters = letters;
    },
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
  display: flex;
  justify-content: center;
  align-items: center;
}
.game__main {
  display: grid;
  height: 100%;
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
.grid__word {
  display: flex;
  letter-spacing: 0.5rem;
}
.grid__words > p {
  font-size: larger;
}
.grid__letters {
  grid-row: 8/14;
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
  grid-column: 1/4;
}
.wordbox {
  padding: 1rem;
  background-color: black;
  cursor: pointer;
}
</style>
