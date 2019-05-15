var scores, roundScores, activePlayer; 

scores = [0,0];  // score array for two player
roundScores = 0; //  round score of the game
activePlayer = 1; // the player who is active 



// document.querySelector('#current-' + activePlayer).textContent = dice; // roll the dice for active player

document.querySelector('.dice').style.display = 'none'; // initially taking away dice image display from site

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = Math.floor(Math.random() * 6)+1; // random number
    
    var diceDOM = document.querySelector('.dice'); // putting selector in a variable, just for easy use
    diceDOM.style.display = 'block'; // bring back the dice image 
    diceDOM.src = 'dice-' + dice + '.png'; // change the dice image according to the random number
});