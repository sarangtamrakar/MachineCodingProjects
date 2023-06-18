console.log("welcome to tictactoe");

let ting = new Audio("ting.mp3");
let WonMusic = new Audio("gameover.mp3");
let StartMusic = new Audio("music.mp3");



function ChangeTurn(turn) {
    return turn === "X" ? "O" : "X";
}



let gameOver = false;
// adding event listeners to each box;
let currentTurn = "X";

function addListenerToBoxes(currentTurn) {
    
    let boxes = Array.from(document.getElementsByClassName("box"));

    boxes.forEach((box) => {
        let box_text = box.querySelector(".box__text");


        box.addEventListener("click", (e) => {

            if (box_text.innerHTML == "") {
                box_text.innerHTML = currentTurn;
                currentTurn = ChangeTurn(currentTurn);
                console.log("checking win");
                ting.play();

                CheckForWin();


                
                if (!gameOver) {
                    document.getElementById("info").innerHTML = "Turn For " + currentTurn;
                }
            }
        })
    })

}

addListenerToBoxes(currentTurn);




// fucntion for checking Win

function CheckForWin() { 

    box_texts = document.getElementsByClassName("box__text");

    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(function (win) { 

        if ((box_texts[win[0]].innerHTML == box_texts[win[1]].innerHTML) && (box_texts[win[1]].innerHTML == box_texts[win[2]].innerHTML) && (box_texts[win[0]].innerHTML !== "")) { 
            document.getElementById("info").innerHTML = box_texts[win[0]].innerHTML + " Won The Game";
            gameOver = true;
            WonMusic.play();
        }

    })

}



function ResetTheGame() { 
    // StartMusic.play();
    
    document.getElementById("reset").addEventListener("click", function (e) { 
        e.preventDefault();
        box_texts = Array.from(document.getElementsByClassName("box__text"));
        box_texts.forEach((box_text) => { 
            box_text.innerHTML = "";
        })


    })
}


ResetTheGame();
