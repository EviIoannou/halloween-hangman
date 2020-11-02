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
    // choose word 
    let chosenWord = finalWord
    // amount of letters in chosen word 
    // let amountOfLetters = chosenWord.length;
    // make an array in which to fetch the answers from
    let word = chosenWord.split('');
    // console.log(word);
    // send array
    res.send(word);
})
app.get('/word/:word', (req,res)=> { 
  let chosenWordFromuser = req.params.word
  console.log(typeof chosenWordFromuser)
  let chosenWord = genre(chosenWordFromuser)
  console.log(chosenWord)
 // ...do your logic with the word here
 let word = chosenWord.split('');
  // send it back to the front-end
  res.send(word)
})
let finalWord;
function genre(chosenGenre) {
  console.log(chosenGenre)
  let halloween = ["Spöke", "Ghost", "fotboll"];
  let sport = ["Fotboll", "Basket", "fotboll"];
  let tv = ['tre','fyra','fem'];

  if(chosenGenre === 'halloween') {
     finalWord = halloween[Math.floor(Math.random() * halloween.length)]
  } else if(chosenGenre === 'sport') {
    finalWord  =  sport[Math.floor(Math.random() * sport.length)];
  } else if(chosenGenre === 'tv') {
    finalWord  = tv[Math.floor(Math.random() * tv.length)];
  }
return finalWord
}
app.listen(3000, () => {
    console.log('port 3000 up and running')
  })