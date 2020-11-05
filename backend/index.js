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
    socket.on('play', () => {
        io.sockets.emit('gamestarted')
    })
 });

//  database connection
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

// use with async await when write/ read with function
const db = low(adapter)

// Functions to connect with db? put in socket.on?
// Set some defaults
//     db.defaults({ games: [], players: [], words: [] })
//     .write()

//     db.get('games')
//     .push({ game })
//     .write()
   
//     db.get('players')
//     .push({ player })
//     .write()

//  db.get('words')
//     .push({ id: 1, letters: ['K', 'A', 'T', 'T'] })
//     .write()

app.get('/word', (req,res) => {
    let dictionary = ["katt", "banan", "fotboll"];
    // choose word 
    let chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    let word = chosenWord.split('');
    res.send(word);
})