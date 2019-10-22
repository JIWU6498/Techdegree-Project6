const qwerty = document.getElementById("qwerty");
const phrase = document.getElementById("phrase");
const ul = phrase.firstElementChild;


const shows = document.getElementsByClassName("show");
const letters = document.getElementsByClassName("letter");
const overlay = document.getElementById("overlay");
const p = document.querySelector(".statusMessage");
const scoreboard = document.getElementById("scoreboard");
const buttons = document.getElementsByTagName("button");
const startButton = document.querySelector(".btn__reset");


let missed = 0;
let phrases = ["Good Morning", "Amazon River", "Welcome", "Programming", "Happy everyday"];
let phraseArray = getRandomPhraseAsArray(phrases);

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

console.log(phraseArray);
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
      return null;
   }
};
const ol = scoreboard.firstElementChild;
//Add an event listener to the keyboard.
qwerty.addEventListener("click", (event) => {
   if (event.target.tagName === "BUTTON") {
      const button = event.target;
      button.className = "chosen";
      button.setAttribute("disabled", true);

      const letterFound = checkLetter(button);
      if (letterFound === null) {
         missed = missed + 1;

         const liFirst = ol.firstElementChild;
         ol.removeChild(liFirst);
         let li = document.createElement('li');
         li.innerHTML = `<img src="images/lostHeart.png" height="35px" width="35px">`;
         ol.appendChild(li);
      }
      checkWin();

   }

});

function checkWin() {
   function resetButton(status, buttonMessage, statusMessage) {
      overlay.className = status;
      overlay.style.display = "flex";
      const startButton = document.querySelector(".btn__reset");
      startButton.textContent = buttonMessage;
      startButton.className = "restartButton";
      const p = document.createElement("p");
      p.className = "statusMessage";
      p.textContent = statusMessage;
      overlay.appendChild(p);
   }
   if (shows.length === letters.length) {
      resetButton("win", "Play Again", "You won!");
      const restartButton = document.querySelector(".restartButton");
      console.log(restartButton);
      restartButton.addEventListener('click', (error) => {
         resetStatus();

      });
   }

   if (missed >= 5) {
      resetButton("lose", "Try Again", "You lose!");
      const restartButton = document.querySelector(".restartButton");
      console.log(restartButton);
      restartButton.addEventListener('click', (error) => {
         resetStatus();
      });
   }

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

   }
}


