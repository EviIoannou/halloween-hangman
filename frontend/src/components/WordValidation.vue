<template>
  <div v-if="word" id="tested-letters">
    <!-- Show secret word when game is up -->
    <h2 v-if="winner !==''">{{ completeWord }}</h2>
    <div id="missing-letters">
      <table>
        <!-- Reveal each letter if it is tested & valid, or if someone guessed the word -->
        <tr>
          <template v-for="letter in word">
            <td :key="letter.id" v-if="testedLetters.includes(letter.name) || winner !== ''">
              {{ letter.name }}
            </td>
            <td :key="letter.id" v-else> </td>
          </template>
        </tr>
        <!-- Gaps for each letter in word -->
        <tr>
          <td :key="letter.id" v-for="letter in word">_</td>
        </tr>
      </table>
    </div>

    <!-- Buttons for each letter; disabled when already tested -->
    <div id="letter-buttons">
      <button class="letter" @click="addLetter(letter)" :disabled="testedLetters.includes(letter.name)" :key="letter.id"
        v-for="letter in letters">
        {{ letter.name }}
      </button>
    </div>
    <p id="guessWord">
      <button @click="toggleHidden = !toggleHidden" v-if="winner === ''" id="guess-button">Gissa ordet</button>

      <!-- Hide these elements if players do not want to guess word yet -->
      <input v-if="!toggleHidden" id="guess" type="text" placeholder="Skriv din gissning här..."
        v-model="guessedWord" />
      <!-- Current player's id sent as parameter; Hardcoded to first player now -->
      <button @click="gameOver(players[0].id)" v-if="!toggleHidden" id="submit-guess">
        Gissa!
      </button>
    </p>

    <!-- Hide these elements if no winner yet -->
    <div v-if="winner !== ''" class="winner">
      <h1> {{ winner.name }} vinner!</h1>
      <router-link to="/">
        <button>Börja en ny spel</button>
      </router-link>
    </div>


  </div>
</template>

<script>
  export default {
    props: ["players"],
    created() {
      fetch("http://localhost:3000/word")
        .then((response) => response.json())
        .then((result) => {
          //Create an array to fill with word's letters
          let letterObjects = [];

          //For each letter of the word, create an object with name (letter) and unique, random id
          //to use as key in template
          result.map((l) =>
            letterObjects.push({
              name: l,
              id: Math.floor(Math.random() * 10000),
            })
          )
          this.word = letterObjects

          // complete word
          this.lettersInWord = this.word.map((w) => w.name)
          this.completeWord = this.lettersInWord.join('')

          //Get an array with all unique characters in word
          this.uniqueLetters = [...new Set(this.word.map(l => l.name))];
        })
    },
    data() {
      return {
        letters: [{
            name: "a",
            id: 1,
          },
          {
            name: 'b',
            id: 3
          },
          {
            name: "c",
            id: 4,
          },
          {
            name: "e",
            id: 5,
          },
          {
            name: "f",
            id: 6,
          },
          {
            name: "g",
            id: 7,
          },
          {
            name: "h",
            id: 8,
          },
          {
            name: "i",
            id: 9,
          },
          {
            name: "j",
            id: 10,
          },
          {
            name: "k",
            id: 11,
          },
          {
            name: "l",
            id: 12,
          },
          {
            name: "m",
            id: 13,
          },
          {
            name: "n",
            id: 14,
          },
          {
            name: "o",
            id: 15,
          },
          {
            name: "p",
            id: 16,
          },
          {
            name: "q",
            id: 17,
          },
          {
            name: "r",
            id: 18,
          },
          {
            name: "s",
            id: 19,
          },
          {
            name: "t",
            id: 20,
          },
          {
            name: "u",
            id: 21,
          },
          {
            name: "v",
            id: 22,
          },
          {
            name: "w",
            id: 23,
          },
          {
            name: "x",
            id: 24,
          },
          {
            name: "y",
            id: 25,
          },
          {
            name: "z",
            id: 26,
          },
          {
            name: "å",
            id: 27,
          },
          {
            name: "ä",
            id: 28,
          },
          {
            name: "ö",
            id: 29,
          },
        ],
        guessedWord: "",
        invalidLetters: [],
        testedLetters: [],
        toggleHidden: true,
        validLetters: [],
        winner: "",
        word: [],
        counter: 0,
        lettersInWord: [],
        completeWord: '',
        uniqueLetters: []
      }
    },
    methods: {
      addLetter(letter) {
        //When clicking on a letter, "push" to validLetters if it's included in the word,
        //otherwise push to invalidLetters
        this.testedLetters.push(letter.name)
        if (this.word.some(l => l.name === letter.name)) {
          this.validLetters.push(letter.name)

          if (this.validLetters.length === this.uniqueLetters.length) {
            this.gameOver(this.players[0].id)
          }

        } else {
          this.invalidLetters.push(letter.name)
          this.counter++
          if (this.counter === 8) {
            this.gameOver(this.players[0].id)
          }
        }
      },

      gameOver(playerId) { // When "game over" is called, 
        //we validate the word, declare winner and hide buttons with letters
        this.validateWord(playerId)
        this.letters = []
      },

      validateWord(playerId) {
        let player = null

        //Find who is the current player 
        if (playerId === this.players[0].id) {
          player = this.players[0];
        } else {
          player = this.players[1];
        }

        //If current player guessed the word right, or chose the last valid letter this player wins
        if (this.completeWord === this.guessedWord || this.validLetters.length === this.uniqueLetters.length) 
        { this.winner = player  } 
        
        else { //If current player guessed wrong word or chose the last invalid letter, the other player wins
          if (player == this.players[0]) {
            // if there are more than one players the other player wins, otherwise no one wins
            if (this.players[1].name) {
              this.winner = this.players[1]
            } else {
              this.winner = {
                name: "Ingen",
                id: 0
              }
              console.log(this.winner)
            }
          } else { //if the second player guessed wrong, first player wins
            this.winner = this.players[0]
          }
        }

        //Hide "Guess" input field and button; reveal button/router-link to start new game
        this.toggleHidden = true;
      },
    },
    name: "WordValidation",
    watch: {
      invalidLetters() {
        this.$emit('invalidLetters', this.invalidLetters)
      }
    },
    props: {
      players: Array
    }
  }
</script>

<style scoped>
  button.letter {
    padding: 0.5rem;
    background-color: black;
    color: white;
    border: none;
    cursor: pointer;
    margin: 0.3rem;
  }

  button.letter:hover {
    background-color: gray;
    color: black;
  }

  button.letter:disabled {
    background-color: white;
    color: black;
    cursor: default;
  }
  
  #letter-buttons {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  #missing-letters {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  #tested-letters {
    background-color: rgba(46, 46, 46, 0.671);
  }

  #tested-letters>h1 {
    text-align: center;
  }

  #guessWord {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    background-color: black;
  }

  .buttonWord {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.5rem;
    color: orange;
  }

  .table__center {
    width: 100%;
    text-align: center;
    justify-content: center;
    display: flex;
  }

  #guess {
    padding: 0.6rem;
    background-color: black;
    color: orange;
    margin: 0px 0.3rem;
    border: 1px solid rgb(95, 62, 1);
    outline-width: 0;
  }

  #submit-guess {
  background-color: #e56400;
  color: black;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  border-style: none;
  padding: 0.8rem;
  }

  #guess-button {
  background-color:rgb(26, 12, 10);
  color:  #e56400;
  cursor: pointer;
  font-weight: bold;
  border-radius: 4px;
  border-style: solid;
  border-color: #e56400;
  padding: 0.8rem;
  }

  td {
    padding-left: 10px;
    font-size: large;
  }
</style>