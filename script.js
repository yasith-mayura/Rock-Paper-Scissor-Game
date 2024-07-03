let playerScore = 0;
let computerScore = 0;


function getRandomComputerResult() {
    const options = ["Rock", "Paper", "Scissors"];
    const index = Math.floor(Math.random()*3);
    return options[index];
  
  }

  function hasPlayerWonTheRound(player, computer) {
    if(player == "Rock" && computer == "Scissors"){
      return true;
    }else if(player == "Scissors" && computer == "Paper"){
      return true;
    }else if(player == "Paper" && computer == "Rock"){
      return true;
    }else{
      return false;
    }
  }

  function getRoundResults(userOption) {
    const computerResult = getRandomComputerResult();
    const hasPlayerWon = hasPlayerWonTheRound(computerResult);
    if(hasPlayerWon){
      playerScore = 1;
      return `Player wins! ${userOption} beats ${computerResult}`;
    }else{
      if(computerResult == userOption){
        return `It's a tie! Both chose ${userOption}`;
      }else{
        computerScore = 1;
        return `Computer wins! ${computerResult} beats ${userOption}`;
      }
    }
   
  }
  
  console.log(getRoundResults("Rock"));
  console.log("Player Score: ", playerScore, "Computer Score: ", computerScore);