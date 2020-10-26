<template>
<div v-if="word">
    <h1>{{secretWord}}</h1>
    <button @click="gameOver()">Game Over</button> 
    <!-- exchange command to guess word button? with testedletters component -->
    <table>
        <tr>
        <td :key="letter.id" v-for="letter in word">_</td>
        </tr>
    </table>
    </div>
</template>

<script>
export default {
    created() {
        fetch("http://localhost:3000/word")
        .then(response => response.json())
        .then(result => {
            let letterObjects = []
            result.map(l => letterObjects.push ({name: l, id: Math.floor(Math.random () * 10000)}))
            this.word = letterObjects
        });
    },
    data() {
        return {
        word: [],
        wordObjects: [],
        secretWord: '',
        };
    },
    methods:{
        gameOver() {
            this.word.map(l => this.wordObjects.push(l.name));
            this.secretWord = this.wordObjects.join("")
        }
    },
  name: "WordLength"
};
</script>

<style scoped>
    td{
        padding-left: 10px;
        font-size: xx-large;
    }
</style>