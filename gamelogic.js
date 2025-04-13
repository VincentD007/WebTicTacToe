let gametext = document.querySelector(".gametext")
let boardspaces = Array.from(document.querySelector(".gameboard").children)
let restartbtn = document.getElementById("restartbtn")
let currentPlayer = "X"
var playgame = true
const winningcombonations = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
]


function checkforwin(player) {
    return null
}


function playerBtnClick(eventObj){
    if (!playgame || eventObj.target.innerText) {
        return
    }

    eventObj.target.innerText = currentPlayer
    let win = checkforwin(currentPlayer)
    if (!win) {
        currentPlayer = currentPlayer == "X" ? "O" : "X"
    }
    else {
        playgame = false
        gametext.innerText = `Player ${currentPlayer} wins!`
    }

}


function loadgame() {
    for (space of boardspaces) {
        space.addEventListener("click", playerBtnClick)
    }
    restartbtn.addEventListener("click", () => {
        for (space of boardspaces) {
            space.innerText = ""
        }
        playgame = true
        gametext.innerText = "Tic Tac Toe"
    })
}

loadgame()