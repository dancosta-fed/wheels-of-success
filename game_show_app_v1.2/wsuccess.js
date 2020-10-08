const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.getElementsByClassName('btn_reset');
const missed = 0;

btnReset.addEventListener('click',  (e) => {overlay.style.display = "none"});

let phrases = [
    'You can be better than this',
    'Hire me and see what happens',
    'Life is not about what is better than',
    'Give me a chance to shine',
    'You are deserve success in life'
];

console.log(btnReset);