
// handle the keyboard key and control the game , life span and score
function handleKeyUpEvent(event) {
    const pressedKey = event.key;
    const currentAlphabet = document.getElementById('current-alphabet').innerText.toLowerCase();
    if (pressedKey === 'Escape') {
        showElementById('home-screen');
        removeClassListById(currentAlphabet);
    }
    if (currentAlphabet === pressedKey) {
        // update score
        // get the score and increas it's value
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setInnerTextById('current-score', newScore)

        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // const newScore = currentScore + 1;
        // currentScoreElement.innerText = newScore;

        removeClassListById(currentAlphabet);
        continueGame()


    } else {
        // update life score
        // remove 1 life for pressing wrong key
        const currentLife = getTextElementValueById('current-life');
        const newLife = currentLife - 1;
        setInnerTextById('current-life', newLife)


        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // const newLife = currentLife - 1;
        // currentLifeElement.innerText = newLife;
        if (newLife < 0) {
            gameOver();
            removeClassListById(currentAlphabet)
        }
    }
}

document.addEventListener('keyup', handleKeyUpEvent);


// continue the game 
function continueGame() {
    const alphabet = getARandomAlphabet();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setClassListById(alphabet);

}

// start the game
function play() {
    hideElementById('home-screen');
    hideElementById('score-ground');
    showElementById('play-ground');
    continueGame();
}

// game over
function gameOver() {
    hideElementById('play-ground');
    showElementById('score-ground');

    const currentScore = getTextElementValueById('current-score');
    setInnerTextById('total-score', currentScore)


    setInnerTextById('current-life', 5);
    setInnerTextById('current-score', 0);
}