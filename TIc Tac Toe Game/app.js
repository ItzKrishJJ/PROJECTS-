let turno = true;
let resetbtn = document.querySelector("#resetbtn");
let scorebtn = document.querySelector("#score");
let msgText = document.getElementById("wintext");
let winSection = document.getElementById("winsection");
let player1 = document.getElementById("p1");
let player2 = document.getElementById("p2");
let count = 0;
let score = {
  p1: parseInt(localStorage.getItem('p1')) || 0,
  p2: parseInt(localStorage.getItem('p2')) || 0
};
let iswinner = false;
let boxes = document.querySelectorAll(".gamebuttons");

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
];
//set to default player 
const settodefault =()=>{
  player1.innerText = `PLAYER 1`;
  player2.innerText = `PLAYER 2`;
};
// Show score
const showscore = () => {
  player1.innerText = `PLAYER 1 : ${score.p1}`;
  player2.innerText = `PLAYER 2 : ${score.p2}`;
}

scorebtn.addEventListener("click", showscore);

// Reset game
const resetgame = () => {
  settodefault();
  enabledbox();
  iswinner = false;
  turno = true;
  count = 0;
  winSection.classList.add("hide");
  msgText.innerText = "";
};

// Reset button working
resetbtn.addEventListener("click", () => {
  resetgame();
});

// Enable or disable boxes
const disabledbox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledbox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

// Show who is winner
const showWinner = (winner) => {
  if (winner === "O") {
    score.p1 += 1;
  } else if (winner === "X") {
    score.p2 += 1;
  }

  // Store the scores in localStorage
  localStorage.setItem('p1', score.p1);
  localStorage.setItem('p2', score.p2);

  disabledbox();
  window.location.href = `newgame.html?winner=${winner}`;
};

// Check who is winner
let checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1 = boxes[pattern[0]].innerText; // Check individual position text
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        iswinner = true;
        showWinner(pos1);
        return;
      }
    }
  }
};

// Checker function
const checker = (box) => {
  if (turno) {
    box.style.color = "#17BEBB";
    box.innerHTML = "O";
    turno = false;
    player2.classList.add("yourchance");
    player1.classList.remove("yourchance");
  } else {
    box.innerHTML = "X";
    box.style.color = "#E4572E";
    turno = true;
    player2.classList.remove("yourchance");
    player1.classList.add("yourchance");
  }
  count++;
  box.disabled = true;

  checkWinner();

  if (count === 9 && !iswinner) {
    alert("Game is Drawn, Press Ok to Restart The Game");
    resetgame();
  }
};

boxes.forEach(box => {
  box.addEventListener("click", function () {
    settodefault();
    checker(box);
  });
});
