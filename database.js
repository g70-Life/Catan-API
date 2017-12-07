const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const players = [{
    id: 1,
    name: "Bryan",
    wins: 6,
    quote: "Nobody wants your fucking sheep."
  },{
    id: 2,
    name: "Kevin",
    wins: 3,
    quote: "I'm a strong and independant woman."
  },{
    id: 3,
    name: "Kyle",
    wins: 2,
    quote: "Roads? Where we're going, we don't need roads."
  },{
    id: 4,
    name: "Ross",
    wins: 1,
    quote: "Oh um fuck. I don't know."
  },{
    id: 5,
    name: "OG Settler",
    wins: 10,
    quote: "You've never seen such raw power!"
  },{
    id: 6,
    name: "Paul",
    wins: 1,
    quote: "That was delicious"
  }]

const app = express()
app.use(cors())



function findLeader(array){
  let manip = array

  let topScores = []
  let leftovers = []

  let first = 0
  let second = 0
  let third = 0
  let fourth = 0
  let fifth = 0
  let sixth = 0

  manip.forEach(play => {
    if (play.wins > first){
      topScores[0] = play
      first = play.wins
    }
  })
  manip.forEach(play => {
    if (play.wins >= second && play.wins < first){
      topScores[1] = play
      second = play.wins
    }
  })
  manip.forEach(play => {
    if(play.wins >= third && play.wins < second){
      topScores[2] = play
      third = play.wins
    }
  })
  manip.forEach(play => {
    if (play.wins >= fourth && play.wins < third){
      topScores[3] = play
      fourth = play.wins
    }
  })
  manip.forEach(play => {
    if (play.wins >= fifth && play.wins < fourth){
      topScores[4] = play
      fifth = play.wins
    }
  })
  manip.forEach(play => {
    if (play.wins >= sixth && play.wins < fifth){
      topScores[5] = play
      sixth = play.wins
    }
  })
  manip.forEach(play => {
    if (play.wins <= sixth){
      leftovers.push(play)
    }
  })
  return topScores
}

app.get('/', function(request, response){
  response.json(players)
})

app.get('/leaders', function(request, response){
  let leaders = findLeader(players)
  response.json(leaders)
})

app.listen(process.env.PORT || 3000)
