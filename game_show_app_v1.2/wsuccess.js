const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn_reset');
const overlay = document.getElementById('overlay');
let hearts = document.querySelectorAll('#scoreboard ol li');
btnReset.addEventListener('click', (e)=> {overlay.style.display = "none";})
let missed = 0;

// Random phrases
let phrases = [
    'You can do this',
    'Hire me now',
    'Life is good',
    'Coding is life',
    'You are awesome'
];

//Getting a random phrase Array
function getRandomPhrase(arr){
     let randomChoice = Math.floor(Math.random() * arr.length);
     let randomPhrase = arr[randomChoice];
     let splitPhrase = randomPhrase.split('');
     return splitPhrase;
} 

let phraseArray = (getRandomPhrase(phrases));

// function that loops through an array of characters
function addPhraseToDisplay(){
   for (i = 0; i , i < phraseArray.length; i++) {
       
        let li = document.createElement('li');
        let ul = document.querySelector('#phrase ul');

        li.textContent = phraseArray[i];
        ul.appendChild(li);
        
        if (phraseArray[i] != ' ') {
            li.className = 'letter';

        } else {
            li.className = 'space';
        }
   }

}

addPhraseToDisplay();

//Create a checkLetter function
const checkLetter = button => {
    let letters = document.querySelectorAll('.letter');
    let match = null;
    
    for (let i = 0; i < letters.length; i++){

        if (button === letters[i].textContent.toLowerCase()) {
           letters[i].className += ' show';
            match = letters[i].textContent;
        } 
    }     
    return match       
}   

checkLetter ();

// Add an eventListener 
qwerty.addEventListener('click', (e)=>{
    if (e.target.tagName === 'BUTTON'){
        const btnClicked = e.target;
        btnClicked.className = 'chosen';
        btnClicked.disabled = 'true';

        let letterFound = checkLetter(btnClicked.textContent);
        if (letterFound === null){
            let liveHeart = document.querySelectorAll('.tries');
            let lostHeart = document.querySelectorAll('.tries img');
            missed++;
            lostHeart[0].src = "images/lostHeart.png";
            liveHeart[0].className = ' ';
        }
    }
    checkWin () // calling out the function at every click. Any click could be the winner 
})

//CheckWin Function
function checkWin () {

    let liLetter = document.querySelectorAll('.letter');
    let liShow = document.querySelectorAll('.show');

    if (liLetter.length === liShow.length ){
        
        overlay.classList.add('win');
        overlay.querySelector('h2').textContent = 'YESS! Congrats...You WON!';
        overlay.style.display = "flex"; 
        resetTheGame ();
    }  

    if (missed > 4){
        overlay.classList.add('lose');
        overlay.querySelector('h2').textContent = "Dang it! You lost. Don't give up, though! :)";
        overlay.style.display = "flex"; 
        resetTheGame ();
    }
    return
}

function resetTheGame() {
    
    let keyboardBttn = document.querySelectorAll('.keyrow button');
    let liveHeart = document.querySelectorAll('.tries');
    let lostHeart = document.querySelectorAll('.tries img');
    let ul = document.querySelector('#phrase ul');
    
   
    if (overlay.className === 'win' || 'lose'){
        btnReset.textContent = 'Reset Game';
    }

    for (let i = 0; i < keyboardBttn.length; i++) {
        keyboardBttn[i].className = '';
        keyboardBttn[i].disabled = false;
    }
    
    ul.innerHTML = '';
    phraseArray = (getRandomPhrase(phrases));
    addPhraseToDisplay();

    for (let j = 0; j < liveHeart.length; j++) {
       let tries = document.querySelectorAll('.tries');
       tries[j].style.display = 'inline';
    }

    missed = 0;
}


