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

//  database connection
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

// use with async await when write/ read with function
const db = low(adapter)

// Set some defaults
db.defaults({ games: [], players: [], words: [] })
  .write()
 
// Add a game
let game = {
    id: id,
    players: {
        player1: player1,
        player2: null
    },
    word: word,
    room: room,
    gameOver: false
    // kan joina spel om det inte är gameOver?
}
// add to function create game
// 
db.get('games')
  .push({ game })
  .write()

let player = {
    id: id,
    turn: false,
    room: room,
    game: game.id
} 
// Add a player ? add to func   
db.get('players')
.push({ player })
.write()

// Add a word ? ex. Skapa en func som itererar över alla ord i ordlistan och skapar en lista i databasen? 
db.get('words')
.push({ id: 1, letters: ['K', 'A', 'T', 'T'] })
.write()

app.get('/word', (req,res) => {
    let dictionary = ["katt", "banan", "fotboll"];
    // choose word 
    let chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    let word = chosenWord.split('');
    res.send(word);
})