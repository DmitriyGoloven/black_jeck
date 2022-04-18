import {createModalWindow, game, modalContent} from './index'

class Player {
    scores = 0;
    cardImg = []

    constructor() {
        this.name = this.randomName();
        this.game = null;
        this.cards = [];
    }

    randomName() {
        let names = ['Саргей', 'Иван', 'Алексей', 'Владимир', 'Ира', 'Лена', 'Саша', 'Марина', 'Дмитрий', 'Карина']
        return names[Math.floor(Math.random() * 10)]
    }

    scoreSum() {
        for (const card of this.cards) {
            this.scores += card.count;
            this.cardImg.push(card.picture)
        }
    }

    giveFirstCards() {
        this.cards.push(this.game.cardDeck.shift())
        this.cards.push(this.game.cardDeck.shift())
        this.scoreSum()
    }

    hit() {
        this.cards.push(this.game.cardDeck.shift())
        this.cardImg.length = 0
        this.scores = 0
        this.scoreSum()
    }

    nextPlayer() {
        if ((this.game.players.indexOf(this) + 1) !== this.game.players.length) {
            this.game.activePlayer = this.game.players[this.game.players.indexOf(this) + 1];
        } else {
            this.checkWinner()
            this.game.activePlayer.game = null
        }
    }

    checkWinner() {

        if (game.winners.length === 0) {
            modalContent.textContent = "NO winners"
            createModalWindow()
        } else {
            let scoreWinners = game.winners.map((player) => {
                return player.scores
            })

            let winner = scoreWinners.indexOf(Math.max(...scoreWinners))
            modalContent.textContent = `${game.winners[winner].name}` + ' WINNER'
            createModalWindow()
        }
    }
}

export {Player}