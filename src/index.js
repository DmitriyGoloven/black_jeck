import './style/index.scss';
import {Player} from './player'
import {Game} from './game'

const game = new Game([new Player(),new Player()])

const players = document.getElementById('players');
const hitButton = document.getElementsByClassName('hit')[0];
const standButton = document.getElementsByClassName('stand')[0]

function givePlayer(player) {
    for(let i = 0; i < player.length; i++) {
        player[i].giveFirstCards();
        player[i].id = [i]
        drawPlayer(player[i])
    }
}

function drawPlayer(player){
    const div = document.createElement('div');
    const name = document.createElement('div');
    const score = document.createElement('div');
    const cardimg = document.createElement('div');

    cardimg.textContent = 'Cards: ' + player.cardImg
    score.textContent = 'Score: ' + player.scores
    name.textContent = player.name

    div.className = 'player'
    div.id = player.id

    div.appendChild(name);
    div.appendChild(score);
    div.appendChild(cardimg);
    players.appendChild(div);
 }

givePlayer(game.players)

hitButton.addEventListener('click', () => {
    game.activePlayer.hit();
    drawPlayerHit(game.activePlayer)
})

function drawPlayerHit(player){
    const newDiv = document.getElementById(player.id);

    newDiv.children[1].textContent = 'Score:' + game.activePlayer.scores
    newDiv.children[2].textContent = 'Cards:' + game.activePlayer.cardImg
}

standButton.addEventListener('click', () => {
    game.activePlayer.nextPlayer()
});



