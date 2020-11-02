<template>
  <div class="game">
    <div class="game__container">
      <header class="game__header">
        <h1>Game On</h1>
      </header>
      <main class="game__main">
        <div class="game__main__header">
          <div class="game__left">
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
          <div class="game__right">
            <h1 style="border-bottom: 2px solid #eee; margin-bottom: 1rem;">
              Fel bokstav
            </h1>
            <div class="game__wrongwords">
              {{ letters.length }} / 8
              <p v-for="(letter, index) in letters" :key="letter[index]">
                {{ letter }}
              </p>
            </div>
          </div>
        </div>
        <div style="text-align: center;">
          du har valt genre
          <span style="font-size: 2rem; display: block; font-weight: bold;">{{
            pickedGenre
          }}</span>
        </div>
        <div class="game__hangman">
          <Hangman :letters="letters" :winner="winner" />
        </div>

        <div class="game__letters">
          <WordValidation
            :players="players"
            @invalidLetters="onInvalidLetter"
            @winner="onWinner"
          />
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Hangman from '../components/Hangman'
import WordValidation from '@/components/WordValidation.vue'
export default {
  components: {
    Hangman,
    WordValidation
  },
  data() {
    return {
      letters: [],
      players: this.$route.query.players,
      winner: '',
      pickedGenre: this.$route.query.pickedGenre
    }
  },
  methods: {
    onInvalidLetter(letters) {
      this.letters = letters
    },
    onWinner(winner) {
      this.winner = winner
    }
  },
  mounted() {
    this.players = JSON.parse(localStorage.getItem('player-storage') || '[]')
  },
  watch: {
    players(newNames) {
      localStorage.players = newNames
    }
  }
}
</script>

<style scoped>
.game {
  height: 100%;
  background-image: url('../assets/halloween.png');
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
  height: 5vh;
  justify-content: center;
  align-items: center;
}
.game__main {
  height: 100%;
  display: flex;
  width: 100%;
  flex-direction: column;
}
.game__hangman {
  justify-content: center;
  display: flex;
  align-items: center;
  height: 53vh;
}
.game__main__header {
  display: flex;
  width: 100%;
}
.game__left {
  flex: 0.5;
  text-align: center;
}
.game__right {
  flex: 0.5;
  text-align: center;
}
.game__wrongwords {
  display: flex;
  justify-content: center;
}
.game__wrongwords > p {
  padding: 0.5rem;
  background-color: black;
  color: white;
  border-radius: 50%;
  margin-left: 0.5rem;
}
.game__letters {
  width: 100%;
}
</style>
