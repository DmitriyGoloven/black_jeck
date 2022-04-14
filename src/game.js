import { Player } from './player'
import { shuffle, Card } from './card'


class Game {

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




}

export {Game}