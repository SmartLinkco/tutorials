const choices = document.querySelectorAll('.choice');
const playerScoreElement = document.getElementById('player-score');
const computerScoreElement = document.getElementById('computer-score');
const resultElement = document.getElementById('result');
const resetButton = document.getElementById('reset');
const rulesBtn = document.getElementById('rules-btn');
const modal = document.getElementById('rules-modal');
const closeBtn = document.querySelector('.close');

let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
};

const getWinner = (playerChoice, computerChoice) => {
    if (playerChoice === computerChoice) return 'draw';
    
    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    }
    
    return 'computer';
};

const updateScore = (winner) => {
    if (winner === 'player') playerScore++;
    if (winner === 'computer') computerScore++;
    
    playerScoreElement.textContent = playerScore;
    computerScoreElement.textContent = computerScore;
};

const updateResult = (playerChoice, computerChoice, winner) => {
    const messages = {
        draw: "It's a draw!",
        player: 'You win! 🎉',
        computer: 'Computer wins! 😢'
    };
    
    resultElement.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${messages[winner]}`;
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.dataset.choice;
        const computerChoice = getComputerChoice();
        const winner = getWinner(playerChoice, computerChoice);
        
        updateScore(winner);
        updateResult(playerChoice, computerChoice, winner);
    });
});

resetButton.addEventListener('click', () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreElement.textContent = '0';
    computerScoreElement.textContent = '0';
    resultElement.textContent = 'Choose your weapon!';
});

rulesBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
