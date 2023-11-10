// global variables 
  // array to hold choices [rock,paper,scissors]
const choices = ["R", "P", "S"];
  // define var for wins, losses, ties
let wins = 0;
let losses = 0;
let  ties = 0

// prompt  player to choose
const playerChoice = prompt('Choose either "R" for Rock, "P" for Paper , or "S" for Scissors');
console.log('player chooses:' + playerChoice);

// computer chooses randomly 
const random = Math.floor(Math.random()*choices.length);
const computerChoice = choices[random];
console.log('computer chooses:' + computerChoice);

// compare choices 
  // if player choice is equal to computer choice(tie) 
  if ( playerChoice === computerChoice ){
    // increase the tie variable by 1 
    ties++;
    //  display result 
    (alert("You tied!👔"))
    // also if player choice beats computer choice(win)
  } else if (
    // player choice = Rock && computer choice = Scissors
    ( playerChoice === "R" && computerChoice === "S")||
    // player choice = Paper && computer choice = Rock
    ( playerChoice === "P" && computerChoice === "R")||
    // player choice = Scissors && computer choice = Paper
    ( playerChoice === "S" && computerChoice === "P")
    ){
      // increase the win variable by 1
      wins++;
      // display result
      alert("Congratulations, You Won!🏆🥇")
      // any other combinations result in the (loss) of the player 
    } else {
      // increase the loss variable by 1
      losses++;
      // display result
      alert("Awwww! You lost to a Bot!😭")
    }
    

  


//  display (alert) ccomparison result ( win!, Tie, Loose  round)

// show stats( number of wins , losses, ties)

// play again 
  // restartgame
// else
  // end game 