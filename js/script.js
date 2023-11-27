// select elements from DOM
const playerScoreEl = document.getElementById('player-score');
const botScoreEl = document.getElementById('bot-score');
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

// declare variables for pixelgraphs
const pixelgraphs = [rock,paper,scissors]
// declare choice variables
const options = ["r", "p", "s"]
// declare score variables 
let playerScore = 0;
let botScore = 0;

// create function that starts game
function startGame(e) {
  // define player choice
  const playerPixelgraph = e.target
  const playerOption = playerPixelgraph.dataset.letter
  // define bot choice 
  const random = Math.floor(Math.random()*options.length);
  const botOption = options[random];
  const botPixelgraph = document.querySelector('img[data-letter="'+ botOption +'"]')

  // declare variable for the result
  let result;
  // compare choices
    // if player choice == bot choice 
    if (playerOption === botOption) {
      // display "tie"
      playerScore++;
      botScore++;
      result = "Its a Tie!👔";
      // else if player chooses "r" and bot chooes "s" ||
    } else if (playerOption === "r" && botOption === "s" || 
    // if player chooses "p" and bot chooses "r" ||
    playerOption === "p" && botOption === "s" ||
    //  if player chooses "s" and bot chooses "p"
    playerOption === "s" && botOption === "p"
    ){;
    // increase player score by one
    playerScore++;
    // display  "You won"
    result = "Congratulations, You Won!🏆🥇"
    // else if player chooses anything else
  } else {
    botScore++;
    // display "You lost"
    result = "Awwww! You lost to a Bot!😭"
  }
 
  console.log(result)
  
}
// add event listners for each choice to start the game
rock.addEventListener('click', startGame);
paper.addEventListener('click', startGame);
scissors.addEventListener('click', startGame);










// global variables 
  // array to hold choices [rock,paper,scissors]
// const choices = ["R", "P", "S"];
//   // define var for wins, losses, ties
// let wins = 0;
// let losses = 0;
// let  ties = 0

// // while loop allows the game to continue
// let keepPlaying = true;

// while (keepPlaying) {
// // prompt  player to choose
// const playerChoice = prompt('Choose either "R" for Rock, "P" for Paper , or "S" for Scissors');
// console.log('player chooses:' + playerChoice);

// // computer chooses randomly 
// const random = Math.floor(Math.random()*choices.length);
// const computerChoice = choices[random];
// console.log('computer chooses:' + computerChoice);

// // compare choices 
//   // if player choice is equal to computer choice(tie) 
//   if ( playerChoice === computerChoice ){
//     // increase the tie variable by 1 
//     ties++;
//     //  display result 
//     result = "You tied!👔"
//     // also if player choice beats computer choice(win)
//   } else if (
//     // player choice = Rock && computer choice = Scissors
//     ( playerChoice === "R" && computerChoice === "S")||
//     // player choice = Paper && computer choice = Rock
//     ( playerChoice === "P" && computerChoice === "R")||
//     // player choice = Scissors && computer choice = Paper
//     ( playerChoice === "S" && computerChoice === "P")
//     ){
//       // increase the win variable by 1
//       wins++;
//       // display result
//       result = "Congratulations, You Won!🏆🥇"
//       // any other combinations result in the (loss) of the player 
//     } else {
//       // increase the loss variable by 1
//       losses++;
//       // display result
//       result = "Awwww! You lost to a Bot!😭"
//     }
    

  


// //  display (alert) ccomparison result ( win!, Tie, Loose  round)
// alert("You" + result)

// // show stats( number of wins , losses, ties)
// alert ("Score: \nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

// // play again
// // restartgame
// // else
// // end game 
// keepPlaying = confirm("Want to play again?")
// if (keepPlaying){
//   continue
// }else{
//   alert("Thanks for playing!")
// }
// }