let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
let msg=document.querySelector(".msg");
const userScorePara= document.querySelector("#user");
const compScorePara= document.querySelector("#comp");
 
const getCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const random=Math.floor(Math.random()*3);
    return options[random];
}
const drawGame=()=>{
    console.log("draw");
    msg.innerText="game was draw , play again"
}
const showWinner=(userWin)=>{
  if(userWin){
    userScore++;
    userScorePara.innerText=userScore;
    console.log("You win");
    msg.innerText="You Win"
  }
  else{
    compScore++;
    compScorePara.innerText=compScore;
console.log("u Lose")
msg.innerText="You Lose"

  }
};

const playGAme=(userChooice)=>{
console.log("UserChoice",userChooice);
const compChoice=getCompChoice();
console.log("CompChoice",compChoice);
if (userChooice==compChoice){
    drawGame();

}
else{
    let userWin=true;
    if(userChooice==="rock"){
        compChoice==="paper"?userWin=false:userWin=true;}
    else if (userChooice==="paper"){
        compChoice==="scissors"?userWin=false:userWin=true;}    
    else{
        compChoice==="rock"?userWin=false:userWin=true;
    } showWinner(userWin);
}

}   

choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
    const userChooice=choice.getAttribute("id");
    console.log("clicked",userChooice);
playGAme(userChooice);
});
});

