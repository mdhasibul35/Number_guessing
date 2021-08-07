const randomBtn=document.getElementById('randomBtn');
const randMin=document.getElementById('randMin');
const randMax=document.getElementById('randMax');
let min=0;
let max=0;
let winScore=0;
let player1Score=0;
let player2Score=0;
let player1Guess=document.getElementById('player1Guess');
let player2Guess=document.getElementById('player2Guess');
let player1Btn=document.getElementById('player1Btn');
let player2Btn=document.getElementById('player2Btn');
let resetBtn=document.getElementById('resetBtn');
let trials=document.getElementById('trials');
let box=document.querySelector('.box');
let trialCountPlayer1=0;
let trialCountPlayer2=0;
let trialCount=0;
let gameOver=false;
let status;
let winner=document.getElementById('winner');
var myImage = new Image(100, 200);
//let consoleLog=document.createElement('aside');
function  randomfunc(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min);
}


function winName1(){
    winner.innerHTML=`<marquee width = "50%">HURRAY!!!!!!Player 1 Wins</marquee>`;
    winner.style.color='red'; 
    box.innerHTML='<img src="happy.jpg">'
    
}
function winName2(){
    winner.innerHTML=`<marquee width = "50%">HURRAY!!!!!!Player 2 Wins</marquee>`;
    winner.style.color='red'; 
    box.innerHTML='<img src="happy.jpg">'
   
}
function lose(){
    winner.innerHTML=`<marquee width = "80%">Sorry Boys !!!</marquee>`;
    winner.style.color='Blue';
    winner.style.background='pink' ;
    box.innerHTML='<center><img src="sad.jpg"></center>'
    
}

function reset(){
    randMin.value='';
    randMax.value='';
    player1Guess.value='';
    player2Guess.value='';
    trialCountPlayer1=0;
    trialCountPlayer2=0;
    trials.value='';
    gameOver=false;
    player1Btn.removeAttribute('disabled');
    player2Btn.removeAttribute('disabled');
    randomBtn.style.background="";
    box.innerHTML='<img src="">'
    
}
  
function win(playerScore,winScore,status){
    if(playerScore==winScore){
        gameOver=true;
        console.log("You win");
        //logMessage(`You win!Amazing.Your remaining trials:${remainingtrial}`)
        player1Btn.setAttribute('disabled','disabled');
        player2Btn.setAttribute('disabled','disabled');
        if(status==1){

            winName1();
        } 
       if(status==2){
            winName2();
        }

    }
   
    
}

randomBtn.addEventListener('click',()=>{
    min=Number(randMin.value);
    max=Number(randMax.value);
    winScore=randomfunc(min,max);
    console.log(winScore);
    randomBtn.style.background="pink";
    
});

player1Guess.addEventListener('change',function(){
    player1Score=Number(player1Guess.value);  
    
});

player2Guess.addEventListener('change',function(){
    player2Score=Number(player2Guess.value);
});

player1Btn.addEventListener('click',()=>{
    player1Guess.value='';
    player2Guess.value='';
    player2Btn.removeAttribute('disabled');
    
    trialCountPlayer1++;
    if(trialCountPlayer1<=trialCount){
        status=1;

       // remainingtrial=trialCount-trialCountPlayer1;
    win(player1Score,winScore,status);
    player1Btn.setAttribute('disabled','disabled');

    }
    else{
        if(!gameOver){
        gameOver=true;
        player1Btn.setAttribute('disabled','disabled');
        player2Btn.setAttribute('disabled','disabled');
        console.log("yes time out");
        lose();
        }  
    }
});

player2Btn.addEventListener('click',()=>{
    player1Guess.value='';
    player2Guess.value='';
    player1Btn.removeAttribute('disabled');
    trialCountPlayer2++;
    if(trialCountPlayer2<=trialCount){
        status=2;
 
        //let remainingtrial=trialCount-trialCountPlayer2;
    win(player2Score,winScore,status);
    player2Btn.setAttribute('disabled','disabled');
    }
    else{       
         if(!gameOver){
            gameOver=true;
        player2Btn.setAttribute('disabled','disabled');
        player1Btn.setAttribute('disabled','disabled');
        console.log("yes time out");
        lose();
        }
    }
});


trials.addEventListener('change',function(){
     trialCount=Number(trials.value);
});

resetBtn.addEventListener('click',reset);

