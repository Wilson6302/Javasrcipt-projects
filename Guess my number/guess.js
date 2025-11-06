let againBtn=document.getElementById("again")
let inputEle=document.getElementById("number")
let checkBtn=document.getElementById("check")
let scoreEle=document.getElementById("score")
let highscoreEle=document.getElementById("highscore")
let msgEle=document.getElementById("msg")

// generate random number between 1 to 30

let secretNum=Math.trunc(Math.random()*30)+1
console.log(Math.trunc((Math.random()*30)+1))
let score=30
let highscore=0


function guessMyNum()
{
    
    
    let guessNum=Number(inputEle.value)
    

    if(!guessNum){
        msgEle.textContent="Enter a Valide Number"
    }
    else if(guessNum > secretNum){
        msgEle.textContent="Too High"
        score--
        scoreEle.textContent=`score:${score}`
    }       
    else if(guessNum < secretNum){
        msgEle.textContent="Too Low"
        score--
        scoreEle.textContent=`score:${score}`
    }
    else{
        msgEle.textContent="You won"
        if(score > highscore){
            highscore=score
            highscoreEle.textContent=`High Score:-${highscore}`
        }
        
    }
    
     
}


checkBtn.addEventListener("click",guessMyNum)

againBtn.addEventListener("click",()=>{
    score=30;
    scoreEle.textContent=`score:${score}`
    msgEle.textContent="Start Guessing.."
    secretNum=Math.trunc(Math.random()*30)+1
    inputEle.value = "";
    inputEle.focus();
})