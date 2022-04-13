
class Player {
    score = Math.floor(Math.random() * 11);

    constructor(name) {
        this.name = name;
        this.game = null
        this.skore = this.cards();
    }
 cards(){
     return Math.floor(Math.random() * 11)
 }
}


export {Player}