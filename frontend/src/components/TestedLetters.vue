<template>
    <div id="tested-letters">
            <table>
            <tr>
                <!-- plats att fylla i bokstäver för framtida spelet -->
                <template v-for="letter in word">
                   <td :key="letter" v-if="testedLetters.includes(letter)" >{{letter}}</td> 
                   <td :key="letter" v-else> </td>
                </template>
            </tr>
            <tr>
                <td :key="letter" v-for="letter in word">_</td>
            </tr>
        </table>
        <p>Du har testat: <span v-for="letter in testedLetters" :key="letter"> {{letter}} </span></p>
        <p>Bokstäver i ordet: <span v-for="letter in validLetters" :key="letter"> {{letter}} </span></p>
        <p>Felaktiga bokstäver: <span v-for="letter in invalidLetters" :key="letter"> {{letter}} </span></p>
        <button class="letter" @click="addLetter(letter)" :disabled="testedLetters.includes(letter.name)"
            :key="letter.id" v-for="letter in letters">
            {{letter.name}}
        </button>
    
    </div>
</template>

<script>
    export default {
        created() {
            fetch("http://localhost:3000/word")
            .then(response => response.json())
            .then(result => {
                this.word = result;
                // console.log(result);
            });
    },
        data() {
            return {
                letters: [{
                        name: "a",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "b",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "b",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "c",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "e",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "f",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "g",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "h",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "i",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "j",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "k",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "l",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "m",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "n",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "o",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "p",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "q",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "r",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "s",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "t",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "u",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "v",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "w",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "x",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "y",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "z",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "å",
                        id: Math.floor(Math.random() * 1000)
                    }, {
                        name: "ä",
                        id: Math.floor(Math.random() * 1000)
                    },
                    {
                        name: "ö",
                        id: Math.floor(Math.random() * 1000)
                    }
                ],
                testedLetters: [],
                validLetters: [],
                invalidLetters: [],
                word: [],

            }
        },
        methods: {
            addLetter(letter) {
                this.testedLetters.push(letter.name)
                if (this.word.includes(letter.name)) {this.validLetters.push(letter.name)}
                else {this.invalidLetters.push(letter.name)}
            }
        },
        name: "TestedLetters"
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

    td{
        padding-left: 10px;
        font-size: large;
    }
</style>