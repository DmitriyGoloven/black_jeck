import {shuffle} from './card'
import {game} from "./index";

class Game {
    losers = []
    winners = []

    constructor(players) {
        this.players = players
        this.activePlayer = null
        this.cardDeck = shuffle()
        this.addPlayer(players)
    }

    addPlayer(players) {
        for (let i = 0; i < this.players.length; i++) {
            this.players[i].game = this;
        }
        this.activePlayer = players[0]
    }
    checkScoreHit(){
        if (game.activePlayer.scores > 21) {
            game.losers.push(game.activePlayer)
            game.activePlayer.nextPlayer()
        } else if (game.activePlayer.scores === 21) {
            game.winners.push(game.activePlayer)
            game.activePlayer.nextPlayer()
        }

    }
    checkScoreStand(){
        if (game.activePlayer.scores <= 21) {
            game.winners.push(game.activePlayer)
            game.activePlayer.nextPlayer()
        }
    }
}

export {Game}