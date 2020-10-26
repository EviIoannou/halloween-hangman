<template>
  <div id="tested-letters">
      <p>Du har testat: <span v-for="letter in testedLetters" :key="letter"> {{letter}} </span></p> 
      <button class="letter" @click="addTestedLetter(letter)" :disabled="testedLetters.includes(letter)"
      :key="letter" v-for="letter in letters">
          {{letter}}
    </button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q",
             "r", "s", "t", "u", "v", "w", "x", "y", "z", "å", "ä", "ö"],
            testedLetters: [],
            counter: 0
        }
    },
    methods: {
        addTestedLetter (letter) {
            this.testedLetters.push(letter)
            this.counter++
            if(this.counter > 8){
                this.disableLetters()
            }
        },
        disableLetters() {
            this.letters = []; 
            // this.gameOver()
            // maybe alert game over - also call upon gameOver func (in secretWord component) to show the word.
            // if disableLetetrs - the computer won otherwise the player won?
        }
    },
    name:"TestedLetters"
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
</style> 