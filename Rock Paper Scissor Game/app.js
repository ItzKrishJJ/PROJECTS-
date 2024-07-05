let userscore = 0;
let compscore=  0;
let msg = document.querySelector(".msg");
let user = document.querySelector("#user-score");
let comp = document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");

//reset game
let resetbtn = document.querySelector("#resetbtn");
let resetGame = () => {
  userscore = 0;
  compscore = 0;
  user.innerText = `${userscore}`;
  comp.innerText = `${compscore}`;
  msg.innerText = "Game reset. Play again!";
  msg.style.backgroundColor = "Black";
  msg.style.color = "cyan";
};
resetbtn.addEventListener("click",resetGame);

//checkwinner
const checkWinner = (userWin, userchoice, compchoice) => {
  if(userWin){
    userscore+= 1;
    msg.innerText = `YOU WON! YOUR ${userchoice} BEATS ${compchoice}`;
    msg.style.backgroundColor = " #06d834";
    msg.style.color = "#F77F00";
  }
  else{
    compscore += 1;
    msg.innerText = `YOU LOSE! ${compchoice} BEATS YOUR ${userchoice}`;
    msg.style.backgroundColor = "red";
    msg.style.color = "#F77F00";
  }
  user.innerText = `${userscore}`;
  comp.innerText = `${compscore}`;
};

//drawgame
let drawgame =()=>{
  msg.innerText = "GAME DRAW, PLEASE PLAY AGAIN";
  msg.style.backgroundColor = "#14213D";  
};

// Get comp choice
  const getcompchoice =()=>{
    const compchoices = ["rock","paper","scissors"]
    let randidx = Math.floor(Math.random()*3);
    return compchoices[randidx];
  };


// PLAYGAME
const playGame = (userchoice) => {
  const compchoice = getcompchoice();

  // Check if the game is a draw
  if (userchoice === compchoice) {
      drawgame();
  } else {
      let userwin = true;

      // Determine the winner based on user choice
      if (userchoice === "rock") {
          userwin = compchoice === "paper" ? false : true;
      } else if (userchoice === "paper") {
          userwin = compchoice === "scissors" ? false : true;
      } else if (userchoice === "scissors") {
          userwin = compchoice === "rock" ? false : true;
      } else {
          // Handle unexpected input
          console.error("Invalid user choice: " + userchoice);
          return;
      }
      // Check the winner
      checkWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
      const userchoice = choice.getAttribute("id");
      playGame(userchoice);
    })
});
