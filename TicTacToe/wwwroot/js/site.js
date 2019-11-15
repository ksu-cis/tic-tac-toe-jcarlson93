// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
var dragging;
var squares = document.getElementsByClassName("square");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragenter', onDragEnter);
    squares[i].addEventListener('dragleave', onDragLeave);
    squares[i].addEventListener('dragstart', onDragStart);
    squares[i].addEventListener('dragend', onDragEnd);
    
}

function onDragEnter(event) {
    if (event.target.children.length > 0) return;
    if (event.target.classList.contains("checker")) return;
    if (event.target.classList.contains("red")) return;
    event.preventDefault();
    event.target.style.backgroundColor = "yellow";
}

function onDragStarg(event) {
    dragging = {
        x: event.target.dataset.x,
        y: event.target.dataset.y
    }
}

function onDragEnd(event) {
    console.log(dragging);
    // do something...
}

function onDragLeave(event) {
    event.target.style.backgroundColor = null;
}

// Tic Tac Toe Javascript code.
/*var turn = "x";

function setTurn()
{
    var turnElement = document.getElementById("turn");
    turnElement.innerText = `It is player ${turn}'s turn`; // "It is player " + turn + "'s turn"
}

function setWinner(winner)
{
    var turnElement = document.getElementById("turn");
    turnElement.innerText = `Player ${winner} wins!`;
    var cells = document.getElementsByClassName("square");
    for (var i = 0; i < cells.length; i++) {
        cells[i].removeEventListener("click", onClick);
    }
}

function checkForWinner()
{
    var cells = document.getElementsByClassName("square");

    // Check horizontal cells
    for (var i = 0; i < 9; i += 3)
    {
        if (cells[0 + i].innerText && cells[0 + i].innerText === cells[1 + i].innerText && cells[1 + i].innerText === cells[2 + i].innerText)
        {
            setWinner(cells[0 + i].innerText);
            return true;
        }
    }

    // Check for vertical cells
    for (var j = 0; j < 9; j++)
    {
        if (cells[0 + j].innerText && cells[0+j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText)
        {
            setWinner(cells[j + 0].innerText);
            return true;
        }
    }

    // Check for diagonal-right cells
    if (cells[0].innerText && cells[0].innerText === cells[4].innerText && cells[4].innerText === cells[8].innerText) {
        setWinner(cells[4].innerText);
        return true;
    }

    // Check for diagonal-left cells
    if (cells[2].innerText && cells[2].innerText === cells[4].innerText && cells[4].innerText === cells[6].innerText) {
        setWinner(cells[4].innerText);
        return true;
    }

    return false;
}

function onClick(event)
{
    event.preventDefault();
    // If text does not exist in the grid cell
    if (!event.target.innerText)
    {
        event.target.innerText = turn;
        if (turn === "x")
        {
            turn = "o";
        }
        else
        {
            turn = "x";
        }
        if (!checkForWinner()) {
            setTurn();
        }
    }
}

var cells = document.getElementsByClassName("square");
for (var i = 0; i < cells.length; i++)
{
    cells[i].addEventListener("click", onClick);
}

setTurn();
*/
