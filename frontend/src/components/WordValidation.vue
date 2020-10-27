<template>
  <div v-if="word" id="tested-letters">
    <!-- Show secret word when game is up -->
    <h1>{{ secretWord }}</h1>
    <table>
      <!-- Reveal each letter if it is tested & valid, or if someone guessed the word -->
      <tr>
        <template v-for="letter in word">
          <td
            :key="letter.id"
            v-if="testedLetters.includes(letter.name) || winner !== ''"
          >
            {{ letter.name }}
          </td>
          <td :key="letter.id" v-else></td>
        </template>
      </tr>
      <!-- Gaps for each letter in word -->
      <tr>
        <td :key="letter.id" v-for="letter in word">_</td>
      </tr>
    </table>

    <!-- maybe letters that have been tested and letters in the word do not need to appear here -->
    <p>
      Du har testat:
      <span v-for="letter in testedLetters" :key="letter"> {{ letter }} </span>
    </p>
    <p>
      Bokstäver i ordet:
      <span v-for="letter in validLetters" :key="letter"> {{ letter }} </span>
    </p>

    <!-- Show letters that have been tested and are wrong -->
    <p>
      Felaktiga bokstäver:
      <span v-for="letter in invalidLetters" :key="letter"> {{ letter }} </span>
    </p>

    <!-- Buttons for each letter; disabled when already tested -->
    <button
      class="letter"
      @click="addLetter(letter)"
      :disabled="testedLetters.includes(letter.name)"
      :key="letter.id"
      v-for="letter in letters"
    >
      {{ letter.name }}
    </button>

    <p id="guessWord">
      <button @click="toggleHidden = !toggleHidden">Gissa ordet</button>

      <!-- Hide these elements if players do not want to guess word yet -->
      <input
        v-if="!toggleHidden"
        id="guess"
        type="text"
        placeholder="Gissa"
        v-model="guessedWord"
      />
      <button @click="validateWord(123)" v-if="!toggleHidden">Gissa!</button>

      <!-- Hide these elements if no winner yet -->
      <span v-if="winner !== ''"> {{ winner.name }} wins!</span>
      <router-link to="/"
        ><button v-if="winner !== ''">Börja en ny spel</button></router-link
      >
    </p>
  </div>
</template>

<script>
export default {
  props: ['players'],
  created() {
    fetch('http://localhost:3000/word')
      .then((response) => response.json())
      .then((result) => {
        //Create an array to fill with word's letters
        let letterObjects = []

        //For each letter of the word, create an object with name (letter) and unique, random id
        //to use as key in template
        result.map((l) =>
          letterObjects.push({
            name: l,
            id: Math.floor(Math.random() * 10000)
          })
        )
        this.word = letterObjects
      })
  },
  data() {
    return {
      letters: [
        {
          name: 'a',
          id: 1
        },
        {
          name: 'b',
          id: 2
        },
        {
          name: 'b',
          id: 3
        },
        {
          name: 'c',
          id: 4
        },
        {
          name: 'e',
          id: 5
        },
        {
          name: 'f',
          id: 6
        },
        {
          name: 'g',
          id: 7
        },
        {
          name: 'h',
          id: 8
        },
        {
          name: 'i',
          id: 9
        },
        {
          name: 'j',
          id: 10
        },
        {
          name: 'k',
          id: 11
        },
        {
          name: 'l',
          id: 12
        },
        {
          name: 'm',
          id: 13
        },
        {
          name: 'n',
          id: 14
        },
        {
          name: 'o',
          id: 15
        },
        {
          name: 'p',
          id: 16
        },
        {
          name: 'q',
          id: 17
        },
        {
          name: 'r',
          id: 18
        },
        {
          name: 's',
          id: 19
        },
        {
          name: 't',
          id: 20
        },
        {
          name: 'u',
          id: 21
        },
        {
          name: 'v',
          id: 22
        },
        {
          name: 'w',
          id: 23
        },
        {
          name: 'x',
          id: 24
        },
        {
          name: 'y',
          id: 25
        },
        {
          name: 'z',
          id: 26
        },
        {
          name: 'å',
          id: 27
        },
        {
          name: 'ä',
          id: 28
        },
        {
          name: 'ö',
          id: 29
        }
      ],
      guessedWord: '',
      invalidLetters: [],
      testedLetters: [],
      toggleHidden: true,
      validLetters: [],
      winner: '',
      word: [],
      counter: 0,
      secretWord: '',
      lettersInWord: [],
      completeWord: ''
    }
  },
  methods: {
    addLetter(letter) {
      //When clicking on a letter, "push" to validLetters if it's included in the word,
      //otherwise push to invalidLetters
      this.testedLetters.push(letter.name)
      if (this.word.includes(letter.name)) {
        this.validLetters.push(letter.name)
      } else {
        this.invalidLetters.push(letter.name)
        this.counter++
        if (this.counter > 8) {
          this.disableLetters()
        }
      }
    },
    //When clicking on "Gissa ordet", this method is activated and takes player's id as parameter
    validateWord(playerId) {
      let player = null

      //Find who is the player that guessed the word
      if (playerId === this.players[0].id) {
        player = this.players[0]
      } else {
        player = this.players[1]
      }

      // complete word
      this.lettersInWord = this.word.map((w) => w.name)
      this.completeWord = this.lettersInWord.join('')

      //Find winner if player guessed the word right
      if (this.completeWord === this.guessedWord) {
        console.log(`${player.name} wins`)
        this.winner = player

        //Find winner if player didn't guess the word right
      } else {
        console.log(`${player.name} loses`)
        if (player === this.players[0]) {
          this.winner = this.players[1]
        } else {
          this.winner = this.players[0]
        }
      }

      //Hide "Guess" input field and button; reveal button/router-link to start new game
      this.toggleHidden = true
    },
    disableLetters() {
      this.letters = []
      this.gameOver()
      this.winner = ''
      // if disableLetters - the computer won otherwise the player won?
      // needs to also disable guess button
    },
    gameOver() {
      this.lettersInWord = this.word.map((w) => w.name)
      this.completeWord = this.lettersInWord.join('')
      this.secretWord = this.completeWord
    }
  },
  name: 'WordValidation',
  watch: {
    invalidLetters() {
      this.$emit('invalidLetters', this.invalidLetters)
    }
  }
}
</script>

<style scoped>
button.letter {
  border-color: rgb(218, 215, 215);
  border-radius: 0.3em;
  cursor: pointer;
  height: 2em;
  margin: 0.5em;
  width: 2em;
}

#tested-letters {
  margin-top: 1em;
  background-color: rgb(172, 172, 172);
}

td {
  padding-left: 10px;
  font-size: large;
}
</style>
