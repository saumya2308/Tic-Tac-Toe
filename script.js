let boxes = document.querySelectorAll(".box");
let newBtn = document.querySelector("#new-btn");
let resetBtn = document.querySelector("#reset-btn");
let msg = document.querySelector(".msg")
let msgContainer = document.querySelector(".msg-container");

let turnO = true;

let count=0;

let winPattern = [[0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],];

const disableBox = () => {
    for(let box of boxes){
        box.disabled=true;
    }
}

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if(turnO){
            box.innerHTML="O";
            turnO= false;
        }
        else{
            box.innerHTML="X";
            turnO=true;
        }
        box.disabled=true;
        count++;
        let winner= checkWinner();

        if(count===9 && !winner){
            gameover();
        }
    });    
});

const gameover = () => {
    msgContainer.classList.remove("hide");
    msg.innerHTML="Its a tie";
    disableBox();
}

const checkWinner = () => {
    for (let pattern of winPattern){
        let pos1= boxes[pattern[0]].innerHTML;
        let pos2 = boxes[pattern[1]].innerHTML;
        let pos3 = boxes[pattern[2]].innerHTML;
        
        if(pos1!= "" && pos2!= "" && pos3!= ""){
            if(pos1== pos2 && pos2== pos3){
                showWinner(pos1);
            }
        }

    }
}

const showWinner = (winner) => {
    msgContainer.classList.remove("hide");
    msg.innerHTML=`Congratulations, Winner is ${winner}`;
    disableBox();
}

const resetBox= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerHTML="";
    }
    turnO=true;
    msgContainer.classList.add("hide")
}

newBtn.addEventListener("click", resetBox);
resetBtn.addEventListener("click", resetBox)