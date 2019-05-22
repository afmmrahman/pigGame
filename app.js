var scores, roundScores, activePlayer, gamePlaying, prevDice; 

init();                                                                                                 // initialize function


// Roll-dice button

document.querySelector('.btn-roll').addEventListener('click', function(){

    if (gamePlaying){
        var dice = Math.floor(Math.random() * 6)+1;                                                    // random number

        var diceDOM = document.querySelector('.dice');                                                 // putting   selector in a variable, just for easy use
        diceDOM.style.display = 'block';                                                               // bring back the dice image 
        diceDOM.src = 'dice-' + dice + '.png';                                                         // change the dice image according to the random number
        if(dice === 6 && prevDice === 6){                                                              // playet loose entire score if rolls two 6 in a row
            scores[activePlayer] = 0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            nextPlayer();

        } else if (dice !== 1){                                                                         // adding the current player score in roundscores
            roundScores += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScores;        
        } else{                           
            nextPlayer();
        }

        prevDice = dice;
    }
});



// Hold button

document.querySelector('.btn-hold').addEventListener('click', function(){
    if (gamePlaying){

        scores[activePlayer] += roundScores;                                                             // adding CURRENt score to GLOBAL score

        document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
        
        var inputScore = document.querySelector('.final-score').value;
        var winningScore;
        
        if(inputScore){
            winningScore = inputScore;
        } else{
            winningScore = 100;
        }

        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER !';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer +'-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer +'-panel').classList.remove('active');
            gamePlaying = false;

        } else {
            nextPlayer();
        }
    }    
});



// function for to move next player
function nextPlayer(){

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');

        document.querySelector('.dice').style.display = 'none';
}



// new Button

document.querySelector('.btn-new').addEventListener('click', init);


// Initialize fumction

function init(){
        scores = [0,0];                                                                                      // score array for two player
        roundScores = 0;                                                                                     //  round score of the game
        activePlayer = 0;                                                                                    // the player who is active 
        gamePlaying = true;                                                                                  // state variable for playing the game

        document.querySelector('.dice').style.display = 'none';                                              // initially taking away dice image display from site

        document.getElementById('score-0').textContent = '0';
        document.getElementById('score-1').textContent = '0';
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.getElementById('name-0').textContent = 'Player 1';
        document.getElementById('name-1').textContent = 'Player 2';

        document.querySelector('.player-0-panel').classList.remove('winner');
        document.querySelector('.player-1-panel').classList.remove('winner');
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');


    }