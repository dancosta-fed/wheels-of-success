const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn_reset');
btnReset.addEventListener('click', (e)=> {overlay.style.display = "none";})
const missed = 0;

// Random phrases
let phrases = [
    'You can be better than this',
    'Hire me and see what happens',
    'Life is not about what is better than',
    'Give me a chance to shine',
    'You are deserve success in life'
];

//Getting a random phrase Array
function getRandomPhraseAsArray(arr){
     let randomChoice = Math.floor(Math.random() * arr.length);
     let randomPhrase = arr[randomChoice];
     let splitPhrase = randomPhrase.split('');
     return splitPhrase;
} 

const phraseArray = (getRandomPhraseAsArray(phrases));

console.log(getRandomPhraseAsArray(phrases));
