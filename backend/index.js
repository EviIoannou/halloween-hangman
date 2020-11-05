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

//  database connection
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')

// use with async await when write/ read with function
const db = low(adapter)

db.get('players').remove().value()
// Set some defaults
db.defaults({
        games: [],
        players: [],
        words: []
    })
    .write()
// 


// // Add a word ? ex. Skapa en func som itererar över alla ord i ordlistan och skapar en lista i databasen? 
// db.get('words')
//     .push({
//         id: 1,
//         letters: ['K', 'A', 'T', 'T']
//     })
//     .write()


let dictionary = ["katt", "banan", "fotboll"];
// choose word 

io.on('connection', socket => {
    console.log('connected with', socket.id)
    // add to function create game
    socket.on('start-game', p => {
        // choose word 
        let chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
        let wordLetters = chosenWord.split('');
        
        let player = {
            name: p,
            id: socket.id,
            turn: true
        }
        console.log("player backend " + player.id)
        let game = {
            id: Math.floor(Math.random() * 1000),
            players: {
                player1: player.id,
                player2: null
            },
            word: wordLetters,
            room: socket.id,
            gameOver: false
        }

        console.log(`${game} + ${player}`)
        db.get('games')
            .push(
                game
            )
            .write()

        //Add a player ? add to func   
        db.get('players')
            .push(
                player
            )
            .write()

        socket.emit('created-game', game.id)
    })
    socket.on('addedLetter', letter => {
        console.log(letter)
        io.sockets.emit('userAddedLetter', letter)
        console.log('backend received and emitted')
    })

    socket.on('get-game-data', gameId => {
        console.log(gameId)
        let data = db.get('games').find({ id : gameId}).value()
        console.log(data)
        io.sockets.emit('found-game', data) 
    })

    socket.on('get-players', playerIds => {
        let playerData = [];
        for (let value of Object.values(playerIds)) {
            playerData.push(db.get('players').find({ id: value}).value())
        };
        socket.emit('found-players', playerData)
    })
})
app.get('/word', (req, res) => {
    let dictionary = ["katt", "banan", "fotboll"];
    // choose word 
    let chosenWord = dictionary[Math.floor(Math.random() * dictionary.length)];
    let word = chosenWord.split('');
    res.send(word);
})