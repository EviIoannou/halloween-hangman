const express = require('express')

const app = express()
app.use(express.json())


app.get('/start', (req,res) => {
    res.send("new game started")
})

app.get('/guess', (req,res) => {
    res.send("you have guessed " + req.letter)
})

app.listen(3000, () => {
    console.log('port 3000 up and running')
  })

  
  