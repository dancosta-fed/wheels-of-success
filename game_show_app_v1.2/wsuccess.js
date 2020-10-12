const qwerty = document.getElementById('qwerty');
const phrase = document.getElementById('phrase');
const btnReset = document.querySelector('.btn_reset');
const overlay = document.getElementById('overlay');
btnReset.addEventListener('click', (e)=> {overlay.style.display = "none";})
const missed = 0;

// Random phrases
let phrases = [
    'You can do this',
    'Hire me and see what happens',
    'Life is not about what is better than',
    'Give me a chance to shine',
    'You deserve success in life'
];

//Getting a random phrase Array
function getRandomPhraseAsArray(arr){
     let randomChoice = Math.floor(Math.random() * arr.length);
     let randomPhrase = arr[randomChoice];
     let splitPhrase = randomPhrase.split('');
     return splitPhrase;
} 

const phraseArray = (getRandomPhraseAsArray(phrases));

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
})

//CheckWin Function
function checkWin () {

    let liLetter = document.classList.add('.letter');
    let liShow = document.classList.add('.show');

    if (liLetter.length === liShow.length ){
        
        overlay.classList.add('win');
        overlay.querySelector('h2').textContent = 'YESS! Congrats...You WON!';
        overlay.style.display = "flex"; 
    }  

    if (missed > 5){

    }
}


