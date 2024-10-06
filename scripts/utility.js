// hidden the screen
function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('flex');
    element.classList.add('hidden');
}

// show the screen
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
    element.classList.add('flex');
}

// get a random alphabet and return it 
function getARandomAlphabet() {
    const alphabetString = "abcdefghijklmnopqrstuvwxyz/";
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 26;
    const index = Math.round(randomNumber);
    return alphabets[index];
}

// set class list bg-orange-400
function setClassListById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}

// remove the class list bg-orang-400
function removeClassListById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getTextElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const elementText = element.innerText;
    const value = parseInt(elementText);
    return value;
}

// set inner tex  
function setInnerTextById(elementId, value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}
