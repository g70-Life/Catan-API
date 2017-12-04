const express = require('express')
const cors = require('cors')

const players = [{
    id: 1,
    name: "Bryan",
    wins: 5,
    quote: "Nobody wants your fucking sheep."
  },{
    id: 2,
    name: "Kevin",
    wins: 2,
    quote: "I'm a strong and independant woman."
  },{
    id: 3,
    name: "Kyle",
    wins: 2,
    quote: "Roads? Where we're going, we don't need roads."
  },{
    id: 4,
    name: "Ross",
    wins: 2,
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

function findLeader(players){
  let leaderboard = []
  let mostWins = 0
  let nextMost = 0
  for (var i = 0; i < players.length; i++){
    if (players[i].wins > mostWins){
      leaderboard.unshift(players[i])
      mostWins = players[i].wins;
    } else {
      leaderboard.push(players[i])
    }
  }
  return leaderboard
}

app.get('/', function(request, response){
  response.json(players)
})

app.get('/leaders', function(request, response){
  let leaders = findLeader(players)
  response.json(leaders)
})

app.listen(process.env.PORT || 3000)
