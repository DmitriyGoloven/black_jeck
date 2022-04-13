import './style/index.scss';
import {Player} from './player'
import {Game} from './game'


const players = document.getElementById('pl')
const hitButton = document.getElementsByClassName('hit')[0];
const standButton = document.getElementsByClassName('stand')[0]
standButton.addEventListener('click', () => {})
hitButton.addEventListener('click', () => {})



// const game = new Game(new Player ("dima"))

function givePlayer(player) {
    hitButton.addEventListener('click', () => {
    const div = document.createElement('div');
    let textNode = document.createTextNode(player.score)
    div.className = 'player'
    div.appendChild(textNode)
    players.appendChild(div)})
}
givePlayer(new Player('saha'))

