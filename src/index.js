import './style/index.scss';
import {Player} from './player'
import {Game} from './game'

const gamePlayers = [new Player(), new Player(), new Player()]

let game = new Game([new Player(), new Player(), new Player()])

const body = document.getElementById('body');
const players = document.getElementById('players');
const hitButton = document.getElementsByClassName('hit')[0];
const standButton = document.getElementsByClassName('stand')[0]
const modalBackground = document.getElementsByClassName('divModalBackground')[0]

function givePlayer(player) {

    for (let i = 0; i < player.length; i++) {
        player[i].giveFirstCards();
        player[i].id = [i]
        drawPlayer(player[i])
    }
}

function drawPlayer(player) {
    const div = document.createElement('div');
    const name = document.createElement('div');
    const score = document.createElement('div');
    const cardimg = document.createElement('div');

    cardimg.textContent = player.cardImg
    cardimg.classList.add('cardImg')
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

    if (game.activePlayer.scores > 21) {
        game.losers.push(game.activePlayer)
        game.activePlayer.nextPlayer()
    } else if (game.activePlayer.scores === 21) {
        game.winners.push(game.activePlayer)
        game.activePlayer.nextPlayer()
    }

    game.activePlayer.hit();
    drawPlayerHit(game.activePlayer)
})

function drawPlayerHit(player) {
    const newDiv = document.getElementById(player.id);

    newDiv.children[1].textContent = 'Score:' + game.activePlayer.scores
    newDiv.children[2].textContent = game.activePlayer.cardImg
}

standButton.addEventListener('click', () => {

    if (game.activePlayer.scores <= 21) {
        game.winners.push(game.activePlayer)
        game.activePlayer.nextPlayer()
    }
});
const modal = document.createElement('div')
const divModalBackground = document.createElement('div');
const divModal = document.createElement('div');
const modalContent = document.createElement('div');

function createModalWindow() {

    modalContent.classList.add('modalContent')
    divModal.classList.add('divModal')
    divModalBackground.classList.add('divModalBackground')

    divModal.appendChild(modalContent);
    modal.appendChild(divModal);
    modal.appendChild(divModalBackground);
    modal.classList.add('modal')
    body.appendChild(modal)
    setTimeout(() => {
        window.location.reload()
    }, 3000)
}

// modalBackground.addEventListener('click', ()=>{window.location.reload()})

export {game, gamePlayers, createModalWindow, modalContent}

