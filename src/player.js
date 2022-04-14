import { game } from './game'

class Player {
    scores = 0;
    cardImg = []
    constructor(cards) {
        this.name = this.randomName();
        this.game = null;
        this.cards = [];
    }
    randomName(){
        let names = ['Саргей','Иван','Алексей','Владимир','Ира','Лена','Саша','Марина', 'Дмитрий', 'Карина']
            return  names[Math.floor(Math.random() * 10)]
    }

    scoreSum() {
        for (const card of this.cards) {
            this.scores += card.count;
            this.cardImg.push (card.picture)
        }

    }
    giveFirstCards() {
            this.cards.push(this.game.cardDeck.shift())
            this.cards.push(this.game.cardDeck.shift())
            this.scoreSum()


    }
    hit(){
        this.cards.push(this.game.cardDeck.shift())
        this.cardImg.length = 0
        this.scores = 0
        this.scoreSum()

    }
}


export {Player}
