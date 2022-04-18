import './style/index.scss';
import {Player} from './player'
import {Game} from './game'

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
    cardimg.id = `${player.id} + cardImg`
    score.textContent = 'Score: ' + player.scores
    score.id = `${player.id} + score`
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
    game.checkScoreHit()
    game.activePlayer.hit();
    drawPlayerHit(game.activePlayer)
})

function drawPlayerHit(player) {
    const score = document.getElementById(`${player.id} + score`)
    score.textContent = 'Score:' + game.activePlayer.scores
    const cardimg = document.getElementById(`${player.id} + cardImg`)
    cardimg.textContent = game.activePlayer.cardImg

}

standButton.addEventListener('click', () => {
    game.checkScoreStand()
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

export {game, createModalWindow, modalContent}

