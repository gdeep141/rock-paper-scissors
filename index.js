let options = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return options[Math.floor(Math.random()*options.length)];
}

function playerPlay(input) {
    /*
        * return 'rock', 'paper', or 'scissors'
        */
    let playerSelection;
    while (true) {
        playerSelection = prompt('Please enter \'rock\', \'paper\', or \'scissors\'.').toLowerCase();
        if (options.indexOf(playerSelection) >= 0) return playerSelection;
    }
}

function playRound(playerSelection, computerSelection) {
    let result = compare(playerSelection, computerSelection);
    switch (result) {
        case 'win':
            return 'You win! ' + capitaliseFirst(playerSelection) + ' beats ' + computerSelection + '!';
        case 'lose':
            return 'You lose! ' + capitaliseFirst(computerSelection) + ' beats ' + playerSelection + '!';
        case 'draw':
            return 'It\'s a draw! You both chose ' + playerSelection + '!';
    }
}

function compare(a, b) {
    /*
        * return 'win' if a wins
        * return 'draw' if a and b draw
        * return 'lose' if a loses
        */
    if (a === b) return 'draw';

    switch (a) {
        case 'rock':
            return (b === 'scissors') ? 'win' : 'lose';
            
        case 'paper':
            return (b === 'rock') ? 'win' : 'lose';
            
        case 'scissors':
            return (b === 'paper') ? 'win' : 'lose';
    }
}

function capitaliseFirst(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
}

function printResult(playerScore, computerScore) {
    if (playerScore > computerScore) {
        console.log('You win! ' + playerScore + '-' + computerScore);
    } else if (playerScore === computerScore) {
        console.log('It\'s a draw! You both scored ' + playerScore + '!');
    } else {
        console.log('You lose! ' + playerScore + '-' + computerScore);
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let clicked = button.textContent.toLowerCase();
        playGame(clicked);
    });
});

let playerScore = 0;
let computerScore = 0;
let div = document.querySelector('div.result');

function playGame(clicked) {
    if (playerScore < 5 && computerScore < 5) {
        let result = playRound(clicked, computerPlay());
        if (result.includes('win')) playerScore += 1;
        else if (result.includes('lose')) computerScore += 1;
        div.innerHTML += result + ' ' + playerScore + '-' + computerScore + '</br>';
    }
}