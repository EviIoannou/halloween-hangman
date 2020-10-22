const express = require('express')
const cors = require('cors')


const app = express()
app.use(express.json())
app.use(cors())



app.get('/start', (req,res) => {
    res.send("new game started")
})

app.get('/guess', (req,res) => {
    res.send("you have guessed " + req.letter)
})

app.get('/word', (req,res) => {
    let dictionary = ["katt", "banan", "fotboll"];
    // choose word 
    let chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    // amount of letters in chosen word 
    // let amountOfLetters = chosenWord.length;
    // make an array in which to fetch the answers from
    let word = chosenWord.split('');
    // console.log(word);
    // send array
    res.send(word);
})

app.listen(3000, () => {
    console.log('port 3000 up and running')
  })