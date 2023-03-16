import { Grid } from "./grid.js";

const gameBoard = document.getElementById("game-board");
const grid = new Grid(gameBoard);



gameBoard.addEventListener('click', function(event){
    //event.preventDefault();
    let targetCell = event.target;

    endingGame();

    if (targetCell.classList.contains("cell")) {
        checkAndPrintXO(targetCell);
    }    
});

let printFlag = 1; // 1 - это X, 0 - это О. 

function checkAndPrintXO (cell) {
    if (cell.innerText == '' && printFlag == 1) {
        cell.innerText = 'X';
        printFlag = 0;
    } else if (cell.innerText == '' && printFlag == 0) {
        cell.innerText = 'O';
        printFlag = 1;
    } else {
        return;
    }
}

function endingGame() {
    
}

