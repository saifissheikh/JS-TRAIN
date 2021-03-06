/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

let scores, roundScore, activePlayer, gamePlaying, prevRoll;
let winningScore = 100;

function init() {

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
prevRoll = 0;
gamePlaying = true;

document.querySelector('#score-0').textContent = '0';
document.querySelector('#score-1').textContent = '0';
document.querySelector('#current-0').textContent = '0';
document.querySelector('#current-1').textContent = '0';
document.querySelector('#name-0').textContent = 'Player 1';
document.querySelector('#name-1').textContent = 'Player 2';
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-1-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-roll').addEventListener('click', function() {
    if(gamePlaying) {
        
        let dice = Math.floor(Math.random() * 6 + 1);
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + dice + '.png';
        if(prevRoll === dice) {
            score[activePlayer] = 0;
            nextPlayer();
        }
        prevRoll = dice;

        if(dice !== 1) {
            roundScore = roundScore + dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
        else {
         nextPlayer();
        }
    }

});

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(gamePlaying) {
        scores[activePlayer] = scores[activePlayer] + roundScore;

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        if(scores[activePlayer] >= winningScore) {
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            gamePlaying = false;
        }
        else {
            nextPlayer();
        }
        roundScore = 0;
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundScore = 0;
    prevRoll = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector('#current-0').textContent = '0';
    document.querySelector('#current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    
}

init();