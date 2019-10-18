//Get the element with the ID of qwerty and save it to a variable.
const qwerty = document.getElementById("qwerty");

//Get the element with the ID of phrase and save it to a variable.
const phrase = document.getElementById("phrase");

//Create a missed variable to keep the track of the number of guesses
let missed =0;

//Attach a event listener to the “Start Game” button to hide the start screen overlay.
const startButton =document.querySelector(".btn__reset");
startButton.addEventListener("click",()=>{
   document.getElementById("overlay").style.display="none";
});

//Create a phrases array to contain at least 5 different phrases
let phrases=["Hello there","This is Jenny","Welcome to my websites","Programming is fun","Enjoy everyday"];

//Create a getRandomPhraseAsArray function.
function getRandomPhraseAsArray(arr){
   let randomNumber=Math.floor(Math.random()*5);
   let characterArray=arr[randomNumber].split(" ");
   return characterArray;
}

console.log(getRandomPhraseAsArray(phrases));
