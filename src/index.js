import './style/index.scss';
import {Player} from './player'
import {Game} from './game'


const game = new Game([new Player(),new Player()])


const players = document.getElementById('players');
const hitButton = document.getElementsByClassName('hit')[0];
const standButton = document.getElementsByClassName('stand')[0]
standButton.addEventListener('click', () => {});
hitButton.addEventListener('click', () => {});



function givePlayer(player) {
    for(let i = 0; i < player.length; i++) {
        player[i].giveFirstCards();
        drawPlayer(player[i])
    }
}

function drawPlayer(player){
        const div = document.createElement('div');
        const name = document.createElement('div');
        const score = document.createElement('div');
        const cardimg = document.createElement('div');

        const textNode = document.createTextNode(player.name);
        const scoreNode = document.createTextNode('score: ' + player.scores);
        const imgNode = document.createTextNode('cards: ' + player.cardImg);
        div.className = 'player'

        name.appendChild(textNode);
        score.appendChild(scoreNode);
        cardimg.appendChild(imgNode);

        div.appendChild(name);
        div.appendChild(score);
        div.appendChild(cardimg);
        players.appendChild(div);

 }
givePlayer(game.players)


hitButton.addEventListener('click', () => {
    game.activePlayer.hit();
    drawPlayer(game.activePlayer)
    console.log(game.activePlayer)})




