// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.

var turn = "x";

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
    for (var j = 0; j < 9; j += 3)
    {
        if (cells[0 + j].innerText && cells[0+j].innerText === cells[3 + j].innerText && cells[3 + j].innerText === cells[6 + j].innerText)
        {
            setWinner(cells[j + i].innerText);
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