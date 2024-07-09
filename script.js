let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
const cells = document.querySelectorAll(".cell");
const message = document.querySelector(".message");
const resetButton = document.getElementById("reset");

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

cells.forEach((cell) => {
    cell.addEventListener("click", () => {
        if (cell.innerText === "" && isGameActive) {
            cell.innerText = currentPlayer;
            board[cell.getAttribute("data-index")] = currentPlayer;
            checkWinner();
            currentPlayer = currentPlayer === "X" ? "O" : "X";
        }
    });
});

resetButton.addEventListener("click", () => {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    cells.forEach((cell) => {
        cell.innerText = "";
    });
    message.innerText = "";
});

function checkWinner() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        message.innerText = `Player ${currentPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        message.innerText = "Draw!";
        isGameActive = false;
        return;
    }
}
