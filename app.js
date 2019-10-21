//Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.getElementById("qwerty");

//Get the element with the ID of phrase and save it to a variable.
const phrase = document.getElementById("phrase");
const ul = phrase.firstElementChild;

//Create a missed variable to keep the track of the number of guesses
let missed = 0;

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
const startButton = document.querySelector(".btn__reset");

startButton.addEventListener("click", () => {
   document.getElementById("overlay").style.display = "none";
});

//Create a phrases array to contain at least 5 different phrases
let phrases = ["Good Morning", "Amazon River", "Welcome", "Programming is fun", "Happy everyday"];

//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr) {
   let randomNumber = Math.floor(Math.random() * 5);
   let characterArray = arr[randomNumber].toLowerCase().split("");
   return characterArray;
}

//Set the game display
function addPhraseToDisplay(arr) {
   // do stuff any arr that is passed in, and add to `#phrase ul`

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

const phraseArray = getRandomPhraseAsArray(phrases);
console.log(phraseArray);
addPhraseToDisplay(phraseArray);
const letters = document.getElementsByClassName("letter");
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
const shows=document.getElementsByClassName("show");
//Count the missed guesses in the game
const scoreboard = document.getElementById("scoreboard");
//Add an event listener to the keyboard.
qwerty.addEventListener("click", (event) => {
   if (event.target.tagName === "BUTTON") {
      const button = event.target;
      const div = event.target.parentNode;
      button.className = "chosen";
      button.setAttribute("disabled", true);
      const letterFound = checkLetter(button);
      if (letterFound === null) {
         missed = missed + 1;
         const ol = scoreboard.firstElementChild;
         const li = ol.lastElementChild;
         ol.removeChild(li);
      }
      checkWin();
   }
   
   function checkWin() {
      console.log(shows.length);
      console.log(letters.length);
      if(shows.length===letters.length){
         document.getElementById("overlay").className="win";
         document.getElementById("overlay").style.display="block";
      }

      if(missed>=5){
         document.getElementById("overlay").className="lose";
         document.getElementById("overlay").style.display="block";
      }

   }
});
