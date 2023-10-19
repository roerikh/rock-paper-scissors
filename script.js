function getComputerChoice() {
    let num = Math.trunc(Math.random() * (4 - 1) + 1);
    switch (num) {
        case 1:
            return "Rock"
            break;
        case 2:
            return "Paper"
            break;
        case 3:
            return "Scissors"
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let caseInsencetivePS = playerSelection[0].toUpperCase() + playerSelection.toLowerCase().slice(1);

    if (caseInsencetivePS == computerSelection) {
        return `Draw! ${computerSelection} against ${computerSelection}`;
    } else if (caseInsencetivePS == 'Rock' && computerSelection == 'Scissors') {
        return 'You Win! Rock beats Scissors';
    } else if (caseInsencetivePS == 'Rock' && computerSelection == 'Paper') {
        return 'You Lose! Paper beats Rock';
    } else if (caseInsencetivePS == 'Paper' && computerSelection == 'Rock') {
        return 'You Win! Paper beats Rock';
    } else if (caseInsencetivePS == 'Paper' && computerSelection == 'Scissors') {
        return 'You Lose! Scissors beat Paper';
    } else if (caseInsencetivePS == 'Scissors' && computerSelection == 'Paper') {
        return 'You Win! Scissors beat Paper';
    } else if (caseInsencetivePS == 'Scissors' && computerSelection == 'Rock') {
        return 'You Lose! Rock beats Scissors';
    }


}

function game() {
    let computerSelection;
    let playerSelection;
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let result;
        let roundMessage;
        computerSelection = getComputerChoice();
        playerSelection = prompt('Your choice?', '');
        result = playRound(playerSelection, computerSelection);
        if (result.startsWith('Draw')) {
            console.log(result);
            continue;
        } else if (result.startsWith('You Win!')) {
            playerScore++;
        } else if (result.startsWith('You Lose!')) {
            computerScore++;
        }

        roundMessage = `Player's Score to Computer's Score\n${playerScore} : ${computerScore}`;
        console.log(roundMessage);
    }
    return (playerScore > computerScore) ? 'Player wins this game!' : 'Player loses this game!';
}

alert(game());
 

