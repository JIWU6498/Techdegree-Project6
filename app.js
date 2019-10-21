//Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.getElementById("qwerty");

//Get the element with the ID of phrase and save it to a variable.
const phrase = document.getElementById("phrase");
const ul=phrase.firstElementChild;

//Create a missed variable to keep the track of the number of guesses
let missed =0;

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
const startButton =document.querySelector(".btn__reset");

startButton.addEventListener("click",()=>{
   document.getElementById("overlay").style.display="none";
});

//Create a phrases array to contain at least 5 different phrases
let phrases=["A Bird In The Hand Is Two In Bush","Amazon River","Welcome to my websites","Programming is fun","Happy everyday"];

//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
   let randomNumber=Math.floor(Math.random()*5);
   let characterArray=arr[randomNumber].toLowerCase().split("");
   return characterArray;
}

//Set the game display
function addPhraseToDisplay(arr){
   // do stuff any arr that is passed in, and add to `#phrase ul`
  
   for(let i=0;i<arr.length;i++){
      const li=document.createElement("li");
      li.textContent=arr[i];
      if(li.textContent!=" "){
         li.className="letter";
      }else{
         li.className="space";
      }
      ul.appendChild(li);
   }
   phrase.appendChild(ul);
}

const phraseArray = getRandomPhraseAsArray(phrases);
// console.log(phraseArray);
addPhraseToDisplay(phraseArray); 

//Create a checkLetter function.
function checkLetter(keyboardClicked){
   const letters=document.getElementsByClassName("letter");
   for(let i=0;i<letters.length;i++){
      if(letters[i].textContent===keyboardClicked){
         letters[i].className+=" show";
         // console.log(letters[i]);
      }else{
         return null;
      }
   }
};

// checkLetter("a");

//
qwerty.addEventListener("click",(event)=>{

});