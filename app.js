const overlay = document.getElementById("overlay");
const startButton = document.querySelector(".btn__reset");

const phrase = document.getElementById("phrase");
const qwerty = document.getElementById("qwerty");
const scoreboard = document.getElementById("scoreboard");

const ul = phrase.firstElementChild;
const ol = scoreboard.firstElementChild;

const letters = document.getElementsByClassName("letter");
const shows = document.getElementsByClassName("show");

const buttons = document.getElementsByTagName("button");

let missed = 0;
let phrases = ["Good Morning", "Amazon River", "Welcome", "Programming", "Happy everyday"];

startButton.addEventListener("click", () => {
   document.getElementById("overlay").style.display = "none";
});

//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
   let randomNumber = Math.floor(Math.random() * 5);
   let characterArray = arr[randomNumber].toLowerCase().split("");
   return characterArray;
}

//Set the game display
function addPhraseToDisplay(arr) {
   for (let i = 0; i < arr.length; i++) {
      const li = document.createElement("li");
      li.textContent = arr[i];
      if (li.textContent != " ") {
         li.className = "letter";
      } else {
         li.className = "space";
      }
      ul.appendChild(li);
   }
   phrase.appendChild(ul);
}

let phraseArray = getRandomPhraseAsArray(phrases);
addPhraseToDisplay(phraseArray);

//Create a checkLetter function.
function checkLetter(button) {
   let letter = null;
   for (let i = 0; i < letters.length; i++) {
      if (letters[i].textContent === button.textContent) {
         letters[i].className += " show";
         letter = letters[i].textContent;
      }
   }
   if (letter != null) {
      return letter;
   } else {
      return letter;
   }
};

//Add an event listener to the keyboard.
qwerty.addEventListener("click", (event) => {
   if (event.target.tagName === "BUTTON") {
      const button = event.target;
      button.className = "chosen";
      button.setAttribute("disabled", true);
      const letterFound = checkLetter(button);
      if (letterFound === null) {
         missed = missed + 1;
         const oldLI = ol.firstElementChild;
         ol.removeChild(oldLI);
         const li = document.createElement('li');
         li.innerHTML = `<img src="images/lostHeart.png" height="35px" width="35px">`;
         ol.appendChild(li);
      }
      
      if(checkEndGame()===true){
         startButton.addEventListener('click', (event) => {
            resetStatus();
         });
      }else{
         checkEndGame();
      }
   }
   
});

function checkEndGame() {
   function resetButton(status, buttonMessage, statusMessage) {
      
      overlay.className = status;
      startButton.textContent = buttonMessage;
      const p = document.createElement("p");
      p.className = "statusMessage";
      p.textContent = statusMessage;
      overlay.appendChild(p);
      overlay.style.display = "flex";
   }
   if (shows.length === letters.length) {
      doDelay();
      resetButton("win", "Play Again", "Congratualtions! You won! :->");
      return true;
   }
   if (missed >= 5) {
      doDelay();
      resetButton("lose", "Try Again", "Oh...You lose! :-(");
      return true;
   }
   return false;
};

function resetStatus() {
   //set the missed variable to 0;
   missed = 0;
   //remove all the ul children
   ul.innerHTML = "";
   //set the new phrases
   let newPhrases = getRandomPhraseAsArray(phrases);
   addPhraseToDisplay(newPhrases);
   //set all the disabled button 
   for (let i = 0; i < buttons.length; i++) {
      buttons[i].className = "";
      buttons[i].removeAttribute("disabled");
   }
   
   //set the lives to liveHeart
   const li = ol.children;
   for (let i = 0; i < li.length; i++) {
      li[i].innerHTML = `<img src="images/liveHeart.png" height="35px" width="35px">`;
   }

   //reset the overlay status
   overlay.className = "start";
   startButton.textContent="Start Game";
   startButton.className="btn__reset";
   const p = document.querySelector(".statusMessage");
   if(p!=null){
      overlay.removeChild(p);
   }
};

function doDelay(){
   window.setTimeout(function(){
      return true;
   },3000000);
}



