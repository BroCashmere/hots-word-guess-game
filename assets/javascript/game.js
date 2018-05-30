let winCount = 0;
let lossCount = 0;
let incorrectGuesses = [];
let lettersGuessed = [];
let lives = 6;
let remainingLetters = [];

let hotsImages = [
  "https://blzmedia-a.akamaihd.net/heroes/deckard/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/fenix/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/maiev/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/blaze/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/hanzo/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/alexstrasza/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/junkrat/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/ana/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/kelthuzad/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/garrosh/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/stukov/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/malthael/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/dva/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/genji/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/cassia/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/probius/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/lucio/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/valeera/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/zuljin/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/ragnaros/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/varian/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/samuro/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/zarya/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/alarak/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/auriel/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/guldan/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/medivh/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/chromie/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/tracer/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/dehaka/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/xul/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/li-ming/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/greymane/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/lunara/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/chogall/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/artanis/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/lt-morales/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/rexxar/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/kharazim/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/leoric/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/the-butcher/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/johanna/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/kaelthas/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/sylvanas/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/the-lost-vikings/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/thrall/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/jaina/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/anubarak/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/azmodan/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/chen/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/rehgar/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/zagara/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/murky/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/brightwing/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/li-li/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/tychus/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/diablo/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/zeratul/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/illidan/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/raynor/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/tassadar/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/uther/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/sgt-hammer/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/nazeebo/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/malfurion/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/kerrigan/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/tyrael/bust.jpg",
  "https://scontent.xx.fbcdn.net/v/t1.15752-0/p280x280/34067451_10105909090407284_52716007684308992_n.jpg?_nc_cat=0&_nc_ad=z-m&_nc_cid=0&oh=306d04ddc57e36b6e8530b9a86dbd027&oe=5B7F4DED",
  "https://blzmedia-a.akamaihd.net/heroes/valla/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/etc/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/gazlowe/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/tyrande/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/nova/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/abathur/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/muradin/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/stitches/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/arthas/bust.jpg",
  "https://blzmedia-a.akamaihd.net/heroes/falstad/bust.jpg"
];

//Possible Answer Words

let possibleWords = [
    "DECKARD",
    "FENIX",
    "MAIEV",
    "BLAZE",
    "HANZO",
    "ALEXSTRASZA",
    "JUNKRAT",
    "ANA",
    "KEL'THUZAD",
    "GARROSH",
    "STUKOV",
    "MALTHAEL",
    "D.VA",
    "GENJI",
    "CASSIA",
    "PROBIUS",
    "LUCIO",
    "VALEERA",
    "ZUL'JIN",
    "RAGNAROS",
    "VARIAN",
    "SAMURO",
    "ZARYA",
    "ALARAK",
    "AURIEL",
    "GUL'DAN",
    "MEDIVH",
    "CHROMIE",
    "TRACER",
    "DEHAKA",
    "XUL",
    "LI-MING",
    "GREYMANE",
    "LUNARA",
    "CHO'GALL",
    "ARTANIS",
    "LT.MORALES",
    "REXXAR",
    "KHARAZIM",
    "LEORIC",
    "THE BUTCHER",
    "JOHANNA",
    "KAEL'THAS",
    "SYLVANAS",
    "THE LOST VIKINGS",
    "THRALL",
    "JAINA",
    "ANUB'ARAK",
    "AZMODAN",
    "CHEN",
    "REHGAR",
    "ZAGARA",
    "MURKY",
    "BRIGHTWING",
    "LI LI",
    "TYCHUS",
    "DIABLO",
    "ZERATUL",
    "ILLIDAN",
    "RAYNOR",
    "TASSADAR",
    "UTHER",
    "SGT.HAMMER",
    "NAZEEBO",
    "MALFURION",
    "KERRIGAN",
    "TYRAEL",
    "SONYA",
    "VALLA",
    "E.T.C.",
    "GAZLOWE",
    "TYRANDE",
    "NOVA",
    "ABATHUR",
    "MURADIN",
    "STITCHES",
    "ARTHAS",
    "FALSTAD"
];

//Choose Random Word on startup and create Game Interface

console.log(possibleWords);

//Starting Functions
window.onload = function() {
  createWord();
  createBlanks();
  displayGame();
  welcome.play();
}

//Audio Functions
//Welcome
let welcome = new Audio("assets/sounds/GoblinVO_Deckard_008.mp3");
let win = new Audio("assets/sounds/GoblinVO_Deckard_018.mp3");
let loss = new Audio("assets/sounds/0_CreepVO_RavenKing_082.mp3");

//Randomize Word Function

function createWord() {
  word = possibleWords[Math.floor(Math.random() * possibleWords.length)];
  word = word.toUpperCase();
  console.log("Word: " + word);
  remainingLetters = word.length;
  console.log("Remaining Letters: " + remainingLetters);
}

//Create answer blanks

function createBlanks() {
  answerArray = [];
  for (let i = 0; i<word.length; i++) {
  answerArray[i] = "_";
  }
  console.log(answerArray);
}

//Replacing Blank with Correct Letter

function replaceArray() {
  for (let i = 0; i < word.length; i++) {
    if (userGuess === word[i]) {
    answerArray[i] = userGuess;
    console.log("New Array: " + answerArray);
    console.log(answerArray[i]);
    remainingLetters--;
    console.log("Remaining Letters " + remainingLetters);
    }
}
}

//Prevent Space Bar from Scrolling Page
window.onkeydown = function(e) { 
  return !(e.keyCode == 32);
};

//Display Array and Game Stats

function displayGame() {

  let board = document.getElementById('board');
  let displayArray = "";
  for (let i = 0; i < answerArray.length; i++) {
    displayArray += answerArray[i] + " ";
  }
  board.innerHTML = "Current Word: " + displayArray;

  let game = document.getElementById('game');
      game.innerHTML = `
        <div>Incorrect Letters Guessed: ${incorrectGuesses}</div>
        <div>Lives: ${lives}</div>
        <div>Wins: ${winCount}</div>
        <div>Losses: ${lossCount}</div>
        `
}

//Update Word Image 
function displayImage() {
    cI = possibleWords.indexOf(word);
    console.log("Image Index: " + cI);
    document.getElementById("picture").src = hotsImages[cI];
}

//Reset Stats Function

function resetStats() {
  lives = 6;
  incorrectGuesses = [];
  lettersGuessed = [];
  remainingLetters = [];
}

//Game and Input While the word has not been guessed

  document.onkeyup = function(event) {
    userGuess = event.key;
    userGuess = userGuess.toUpperCase();
    console.log("User Guesses: " + userGuess);
  
    while (lives>0) {
      if (userGuess.length !== 1 || incorrectGuesses.includes(userGuess) || lettersGuessed.includes(userGuess)) {
          return;
        }
      if (word.includes(userGuess)) {
          // incorrectGuesses.push(userGuess);
          replaceArray();
          lettersGuessed.push(userGuess);
          displayGame();
        }
      if (word.includes(userGuess) === false) {
          lives--
          incorrectGuesses.push(userGuess);
          lettersGuessed.push(userGuess);
          displayGame();
        }
        if (remainingLetters === 0) {
          break;
        }
    }
    
    if (remainingLetters === 0) {
      replaceArray();
      displayGame();
      win.play();
      alert("You win, the character was: " + word + "!");
      displayImage();
      winCount++;
      resetStats();
      createWord();
      createBlanks();
      displayGame();
      let instructions = document.getElementById('instructions');
      instructions.innerHTML = `
        <div style: "font-weight:bold";>Press a letter to play again!</div>
        `
    }

    else if (remainingLetters !== 0) {
      replaceArray();
      displayGame();
      loss.play();
      alert("You died, the character was: " + word + "!");
      displayImage();
      lossCount++;
      resetStats();
      createWord();
      createBlanks();
      displayGame();
      let instructions = document.getElementById('instructions');
      instructions.innerHTML = `
        <div style: "font-weight:bold";>Press a letter to try again!</div>
        `
    }
    }