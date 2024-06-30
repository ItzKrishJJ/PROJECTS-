let newgamebtn = document.querySelector("#newgame");
const getUrlParameter = (name) => {
  name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
  const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
  const results = regex.exec(location.search);
  return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};

// Get the winner from the URL parameters
const winner = getUrlParameter('winner');

// Display the winner
if (winner) {
  document.getElementById('wintext').innerText = `WINNER IS ${winner}`;
  document.getElementById('winsection').classList.remove('hide');
}
const newgame = () => {
  // enabledbox();
  // iswinner = false;
  // turno = true;
  // count = 0;
  // winSection.classList.add("hide");
  window.location.replace("index.html");
  // Additional code below will not be executed as the page is being replaced
  
};

newgamebtn.addEventListener("click", newgame);
