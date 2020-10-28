<template>
  <div v-if="word" id="tested-letters">
    <!-- Show secret word when game is up -->
<<<<<<< HEAD
    <h2 v-if="winner !==''">{{ completeWord }}</h2>
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
=======
    <h1>{{ secretWord }}</h1>
    <div class="table__center">
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
    </div>
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
>>>>>>> main

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
<<<<<<< HEAD
      <button @click="toggleHidden = !toggleHidden" v-if="winner === ''">Gissa ordet</button>
=======
      <button class="buttonWord" @click="toggleHidden = !toggleHidden">
        Gissa ordet
      </button>
>>>>>>> main

      <!-- Hide these elements if players do not want to guess word yet -->
      <input
        v-if="!toggleHidden"
        id="guess"
        type="text"
        placeholder="Skriv din gissning här..."
        v-model="guessedWord"
      />
<<<<<<< HEAD
       <!-- Current player's id sent as parameter; Hardcoded to first player now -->
      <button @click="gameOver(players[0].id)" v-if="!toggleHidden">
        Gissa!
      </button>
=======
      <button
        @click="validateWord(123)"
        class="buttonWord"
        v-if="!toggleHidden"
      >
        Gissa!
      </button>

      <!-- Hide these elements if no winner yet -->
      <span v-if="winner !== ''"> {{ winner.name }} wins!</span>
      <router-link to="/"
        ><button v-if="winner !== ''">Börja en ny spel</button></router-link
      >
>>>>>>> main
    </p>

    <!-- Hide these elements if no winner yet -->
    <div v-if="winner !== ''">
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
<<<<<<< HEAD
        )
        this.word = letterObjects

        // complete word
        this.lettersInWord = this.word.map((w) => w.name)
        this.completeWord = this.lettersInWord.join('')

      //Get an array with all unique characters in word
        this.uniqueLetters = [...new Set(this.word.map(l=> l.name))];
      })
=======
        );
        this.word = letterObjects;
      });
>>>>>>> main
  },
  data() {
    return {
      letters: [
        {
          name: "a",
          id: 1,
        },
        {
<<<<<<< HEAD
          name: 'b',
          id: 3
=======
          name: "b",
          id: 2,
        },
        {
          name: "b",
          id: 3,
>>>>>>> main
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
<<<<<<< HEAD
      lettersInWord: [],
      completeWord: '',
      uniqueLetters: []
    }
=======
      secretWord: "",
      lettersInWord: [],
      completeWord: "",
    };
>>>>>>> main
  },
  methods: {
    addLetter(letter) {
      //When clicking on a letter, "push" to validLetters if it's included in the word,
      //otherwise push to invalidLetters
<<<<<<< HEAD
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
=======
      this.testedLetters.push(letter.name);
      if (this.word.some((l) => l.name === letter.name)) {
        this.validLetters.push(letter.name);
      } else {
        this.invalidLetters.push(letter.name);
        this.counter++;
        if (this.counter > 8) {
          this.disableLetters();
        }
      }
    },
    //When clicking on "Gissa ordet", this method is activated and takes player's id as parameter
    validateWord(playerId) {
      let player = null;
>>>>>>> main

      //Find who is the current player 
      if (playerId === this.players[0].id) {
        player = this.players[0];
      } else {
        player = this.players[1];
      }

<<<<<<< HEAD
      //If current player guessed the word right, or chose the last valid letter this player wins
      if (this.completeWord === this.guessedWord || this.validLetters.length === this.uniqueLetters.length) {
        this.winner = player
=======
      // complete word
      this.lettersInWord = this.word.map((w) => w.name);
      this.completeWord = this.lettersInWord.join("");

      //Find winner if player guessed the word right
      if (this.completeWord === this.guessedWord) {
        console.log(`${player.name} wins`);
        this.winner = player;
>>>>>>> main

      //If current player guessed wrong word or chose the last invalid letter, the other player wins
      } else {
<<<<<<< HEAD
        if (player === this.players[0]) {
          // if there are more than one players the other player wins, otherwise no one wins
          if (this.players.length > 1) {this.winner = this.players[1]}
          else {this.winner = {name: "Ingen", id: 0}}
        } 
        else { //if the second player guessed wrong, first player wins
          this.winner = this.players[0]
=======
        console.log(`${player.name} loses`);
        if (player === this.players[0]) {
          this.winner = this.players[1];
        } else {
          this.winner = this.players[0];
>>>>>>> main
        }
      }

      //Hide "Guess" input field and button; reveal button/router-link to start new game
      this.toggleHidden = true;
    },
<<<<<<< HEAD

=======
    disableLetters() {
      this.letters = [];
      this.gameOver();
      this.winner = "";
      // if disableLetters - the computer won otherwise the player won?
      // needs to also disable guess button
    },
    gameOver() {
      this.lettersInWord = this.word.map((w) => w.name);
      this.completeWord = this.lettersInWord.join("");
      this.secretWord = this.completeWord;
    },
>>>>>>> main
  },
  name: "WordValidation",
  watch: {
    invalidLetters() {
<<<<<<< HEAD
      this.$emit('invalidLetters', this.invalidLetters)
    }
  },
  props: {players: Array}
}
=======
      this.$emit("invalidLetters", this.invalidLetters);
    },
  },
};
>>>>>>> main
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

#tested-letters {
  background-color: rgba(46, 46, 46, 0.671);
}
#tested-letters > h1 {
  text-align: center;
}
#guessWord {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
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
td {
  padding-left: 10px;
  font-size: large;
}
</style>
