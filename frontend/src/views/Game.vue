<template>
  <div class="game">
    <div class="game__container">
      <header class="game__header">
        <h1>Game On</h1>
      </header>
      <main class="game__main">
        <div class="game__main__header">
          <div class="game__left">
            <!-- Get player data via database -->
            <h1 style="border-bottom: 2px solid #eee; margin-bottom: 1rem;">
              Spelarens namn
            </h1>
            <div
              class="player__name"
              v-if="players"
            >
              <p v-for="(player, index) in players" :key="player.id">
                <span >
                  Spelare {{ index + 1 }}: {{ player.name }}
                </span> 
              </p>
            </div>
          </div>
          <div class="game__right">
            <h1 style="border-bottom: 2px solid #eee; margin-bottom: 1rem;">
              Fel bokstav
            </h1>
            <div v-if="letters" class="game__wrongwords">
              <p v-for="(letter, index) in letters" :key="letter[index]">
                {{ letter }}
              </p>
            </div>
          </div>
        </div>
        <div class="game__hangman">
          <Hangman :letters="letters" :winner="winner"/>
        </div>

        <div class="game__letters" v-if="game">
          <WordValidation
            :players="players"
            @invalidLetters="onInvalidLetter"
            @winner="onWinner"
            :socket="socket"
            :word="game.word"
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
      gameId: this.$route.query.game,
      players: null,
      winner:"",
      game: null,
    };
  },
  methods: {
    onInvalidLetter(letters) {
      this.letters = letters;
    },
    onWinner(winner){
      this.winner = winner
      this.socket.emit('gameOver', parseInt(this.gameId))
    }
  },

  async mounted() {
    this.players = []
    await this.socket.emit('get-game-data', parseInt(this.gameId))
    await this.socket.on('found-game', data => {
        let playerIds = data.players
        this.socket.emit('get-players', playerIds)
        this.socket.on('found-players', playerData => {     
        this.players = [playerData[0]] 
        if (playerData[1]) {this.players.push(playerData[1])}
        else {return null}
        })
        this.game = data
        console.log(this.game)
        console.log(this.game.word)
      })
    },
    props:['socket']
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
