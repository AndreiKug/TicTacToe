import { Grid } from "./grid.js";

const gameBoard = document.getElementById("game-board");
const grid = new Grid(gameBoard);

let divArr = [];

gameBoard.addEventListener('click', function(event){
    //event.preventDefault();
    let targetCell = event.target;

    if (targetCell.classList.contains("cell")) {
        checkAndPrintXO(targetCell);
        endingGame();
    }    
    
});

let printFlag = 1; // 1 - это X, 0 - это О. 

function checkAndPrintXO (cell) {
    if (cell.innerText == '' && printFlag == 1) {
        cell.innerText = "X";
        printFlag = 0;
    } else if (cell.innerText == '' && printFlag == 0) {
        cell.innerText = "O";
        printFlag = 1;
    } else {
        return;
    }
}

function endingGame() {
    for (var i = 0; i < gameBoard.children.length; i++) {
      divArr[i] = gameBoard.children[i];
    }

    // Проверка на совпадение в строках
    for (let i = 0; i < divArr.length; i += 3) {
    if (divArr[i].innerText === divArr[i+1].innerText && divArr[i+1].innerText === divArr[i+2].innerText) {
      if (divArr[i].innerText === "X") {
        alert("Выиграли Х");
        window.location.reload();
        return;
      } else if (divArr[i].innerText === "O") {
        alert("Выиграли О");
        //window.location.reload();
        return;
      }
    }
  }
  
  // Проверка на совпадение в столбцах
  for (let i = 0; i < 3; i++) {
    if (divArr[i].innerText === divArr[i+3].innerText && divArr[i+3].innerText === divArr[i+6].innerText) {
      if (divArr[i].innerText === "X") {
        alert("Выиграли Х");
        window.location.reload();
        return;
      } else if (divArr[i].innerText === "O") {
        alert("Выиграли О");
        window.location.reload();
        return;
      }
    }
  }
  
  // Проверка на совпадение по диагонали (слева направо)
  if (divArr[0].innerText === divArr[4].innerText && divArr[4].innerText === divArr[8].innerText) {
    if (divArr[0].innerText === "X") {
      alert("Выиграли Х");
      window.location.reload();
      return;
    } else if (divArr[0].innerText === "O") {
      alert("Выиграли О");
      window.location.reload();
      return;
    }
  }
  
  // Проверка на совпадение по диагонали (справа налево)
  if (divArr[2].innerText === divArr[4].innerText && divArr[4].innerText === divArr[6].innerText) {
    if (divArr[2].innerText === "X") {
      alert("Выиграли Х");
      window.location.reload();
      return;
    } else if (divArr[2].innerText === "O") {
      alert("Выиграли О");
      window.location.reload();
      return "O";
    }
  }
}

