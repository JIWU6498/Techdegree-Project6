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
