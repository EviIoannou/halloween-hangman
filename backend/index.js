const express = require('express')
const app = express()
const server = app.listen(3000, () => {
    console.log('port 3000 up and running')
  })
const socket = require('socket.io');
const io = socket(server);
const cors = require('cors')

app.use(express.json())
app.use(cors())


io.on('connection', socket => { 
    console.log('connected with', socket.id)
    // functions socket.on etc
    socket.on('addedLetter', letter => {
        console.log(letter)
        io.sockets.emit('userAddedLetter', letter)
        console.log('backend received and emitted')
    })
 });


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
   
    // send array
    res.send(word);
})

