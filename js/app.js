/*-------------------------------- Constants --------------------------------*/



/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/



/*----------------------------- Event Listeners -----------------------------*/


// Step 1
let board 
let turn
let winner
let tie

// Step 2
const squares = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");


// Step 3
init();

function init() {
  board = ["", "", "", "", "", "", "", "", ""];
  turn = "X";
  winner = false;
  tie = false;

// Step 4
function render() {

};

  board.forEach((value, idx) => {
    squares[idx].textContent = value; 
  });
}

function updateMessage() {
  if (winner) {
    updateMessage(`Player ${winner} wins!`);
  } else if (tie) {
    updateMessage("It's a tie!");
  } else {
    updateMessage(`Player ${turn}'s turn`);
  }
};

// Step 5
const winningCombos = [
  [0,1,2], [3,4,5], [6,7,8],
  [0,3,6], [1,4,7], [2,5,8],
  [0,4,8], [2,4,6]
];

// Step 6
squares.forEach(square => square.addEventListener("click", handleClick));

function handleClick(a) {
  const idx = Number(a.target.id);

  if (board[idx] !== "" || winner || tie) return;

  board[idx] = turn;
  a.target.textContent = turn;

  if (checkWinner()) {
    winner = turn;
    updateMessage(`Player ${winner} wins!`);
    return;
  }

  if (board.every(a => a !== "")) {
    tie = true;
    updateMessage("It's a tie!");
    return;
  }

  turn = turn === "X" ? "O" : "X";
  updateMessage(`Player ${turn}'s turn`);
}

function checkWinner() {
  return winningCombos.some(combo => {
    const [a, b, c] = combo;
    return board[a] && board[a] === board[b] && board[a] === board[c];
  });
}

function updateMessage(text) {
  messageEl.textContent = text;
}

// Step 7
const resetBtnEl = document.getElementById("reset");
resetBtnEl.addEventListener("click", init);

// ChatGPT was used for steps 4 through 7