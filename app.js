'stric mode'
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.number').value = secretNumber;

// doing it DRY with functions
const message = function(message) {
    document.querySelector('.message').textContent = message;
}

const styleBg = function(bgcolor) {
    document.querySelector('body').style.backgroundColor = bgcolor;
}

document.querySelector('.check').addEventListener('click', function() {
    let guess = Number(document.querySelector('.guess').value);
    if (!guess) {
        message('💢 No number!');

        // When is guess it
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = '👑 You guess it!';
        document.querySelector('h1').textContent = '✨ You guess it 🎉';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        styleBg('#60b347');
        if (highscore < score) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
       
        
        // If the guess is different from the secret number
    } else if (guess !== secretNumber) {
        document.querySelector('.message').textContent = guess > secretNumber ? '⬆📈 Too High!' : '⬇📉 Too Low!';
        score--;
        document.querySelector('.score').textContent = score;
        

        if (score < 1) {
            message('💥 You lost :( !!');
            styleBg('#8c1e1e');
            document.querySelector('.score').textContent = 0;
            document.querySelector('h1').textContent = 'You died 👻💀'
            score=0;
        }
    }
});

// Implement the again button!!
document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...'
    document.querySelector('h1').textContent = 'Guess My Number!';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('body').style.backgroundColor = '#222';
})