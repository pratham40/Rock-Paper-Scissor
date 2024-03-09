let userScore=0;
let computerScore=0;
let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg")
let uScore=document.querySelector("#user-score")
let cScore = document.querySelector("#Computer-score")
let resetButton=document.querySelector(".resetGame")
const playGame=(userChoice)=>{
    const computerChoice = computer();
    if (userChoice === computerChoice) {
        drawGame();
    }
    else{
        let userWin=true
        if(userChoice==="rock"){
                userWin = computerChoice==="paper"?false:true
        }
        else if(userChoice==="paper"){
            userWin = computerChoice==="scissor"?false:true
        }
        else{
            userWin=computerChoice==="rock"?false:true
        }
        showWinner(userWin);
    }
}

const showWinner=(userChoice)=>{
    if (userChoice) {
        console.log("Congrats User!!! You Win");
        msg.innerText="Congrats User!!! You Win"
        msg.style.backgroundColor="green"
        userScore++;
        uScore.innerText=userScore
    } else {
        computerScore++;
        console.log("OOPS!!! You Lose");
        msg.innerText="OOPS!!! You Lose"
        msg.style.backgroundColor="red"
        cScore.innerText=computerScore
    }
}

const drawGame=()=>{
    console.log("Game was draw")
    msg.innerText="Sorry!!! Game was draw"
    msg.style.backgroundColor="green"
}

const computer=()=>{
    const option=["rock","paper","scissor"]
    const computerChoice = option[Math.floor(Math.random()*3)]
    return computerChoice;
}
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})
resetButton.addEventListener("click",()=>{
    userScore=0;
    computerScore=0;
    uScore.innerText=userScore
    cScore.innerText=computerScore
    msg.innerText="Play your move"
    msg.style.backgroundColor="black"
})