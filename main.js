window.addEventListener('load', init);


//available levels
const levels = {
  easy: 5,
  medium: 3,
  hard: 2
}

//change level
const currentLevel = levels.easy;

let time = currentLevel;
let score = 0;
let isPlaying;

//DOM Elements
const wordInput = document.querySelector('#answer-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');

const words = [
  'confidence','brilliance','reasonable','productive','reluctance','decorative',
  'conference','conclusion','distortion','unpleasant','negligence','compliance',
  'admiration','remunerate','conspiracy','photograph','depression','relaxation',
  'substitute','definition','chimpanzee','correction','protection','difficulty',
  'mastermind','discourage','attraction','government','disability','management',
  'hemisphere','excavation','motorcycle','repetition','conviction','accountant',
  'separation','literature','retirement','prediction','cell', 'phone','articulate',
  'projection','allocation','perception','obligation',
  'diplomatic','enthusiasm','confession','inhibition','mainstream','discipline',
  'inhabitant','acceptable','mechanical','convention','wilderness','assignment',
  'profession','transition','concession','simplicity','tournament','federation',
  'revolution','foundation','thoughtful','systematic','censorship','television',
  'understand','houseplant','exaggerate','settlement','proportion','competence',
  'brainstorm','folk music','convulsion','helicopter','continuous','indication',
  'nomination','laboratory','constraint','attachment','appearance','overcharge',
  'girlfriend','incredible','experience','restaurant','reflection','resolution',
  'redundancy','decoration','dependence','psychology','accessible','difference',
  'technology','permission','first-hand','temptation','right wing','illustrate',
  'motivation','memorandum','acceptance','preference','functional','goalkeeper',
  'curriculum','excitement','presidency','stereotype','compromise','relinquish',
  'prevalence'
];

//Initize game
function init() {
  // load word from array
  showWord(words);
  //start matching on word input
  wordInput.addEventListener('input', startMatch);
  //Call countdown every sec
  setInterval(countdown, 1000);
  //check game status
  setInterval(checkStatus, 50);
}

//start match
function startMatch() {
  if(matchWords()) {
    isPlaying = true;
    time = currentLevel + 1;
    showWord(words);
    wordInput.value = '';
    score++;
  }

  //If score is -1, display 0
  if(score === -1) {
    scoreDisplay.innerHTML = 0;
  }else {
    scoreDisplay.innerHTML = score;
  }
}

//Match currentword to wordInput
function matchWords() {
  if(wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}

//Pick & show random word
function showWord(words) {
  //Generate random array index
  const randIndex = Math.floor(Math.random() * words.length);
  //Output random word
  currentWord.innerHTML = words[randIndex];
}

//Countdown timer
function countdown() {
  //make sure time is not run out
  if(time > 0) {
    //decrease time
    time--;
  } else if (time === 0) {
    //game over
    isPlaying = false;
  }
  //show time
  timeDisplay.innerHTML = time;
}

//check game status
function checkStatus() {
  if (!isPlaying && time == 0) {
    message.innerHTML = 'Game Over!!!';
    score = -1;
  }
}
