'use strict';
//console.log(document.querySelector('.message').textContent)
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highScore=0;
console.log(secretNumber)
// this is to restart the game to the begining
document.querySelector('.again').addEventListener('click', ()=>{
   score=20;
  document.querySelector('body').style.backgroundColor='#222'; 
  document.querySelector('.number').style.width='15rem' 
  document.querySelector('.number').textContent='?';
  document.querySelector('.message').textContent='start guessing...';
  document.querySelector('.guess').value=''
  secretNumber=Math.trunc(Math.random()*20)+1;
  document.querySelector('.score').textContent=score; 
})

//since there is lot of duplicate code in our app here we are refraction DRY priciple to clean the code
function displayMessage(msg)
{
    document.querySelector('.message').textContent=msg;
}
// here we are implementing the logic of the game
document.querySelector('.check').addEventListener('click',()=>
{
   const guess= Number(document.querySelector('.guess').value)
   if(!guess){
    //document.querySelector('.message').textContent='No Number'
    displayMessage('No Number!!');
   }
   else if(guess===secretNumber){
    displayMessage('you Won')
    document.querySelector('.number').textContent=secretNumber;
    //document.querySelector('.message').textContent='you Won'
    document.querySelector('body').style.backgroundColor='green'
    document.querySelector('.number').style.width='30rem'
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore') .textContent= highScore; 
    }
   }

   else if(guess !== secretNumber)
   {
    if(score>1){
        //document.querySelector('.message').textContent= guess>secretNumber? 'score is higher':'score is lower'
        displayMessage(guess>secretNumber? 'score is higher':'score is lower');
        score--;
        document.querySelector('.score').textContent=score;
    }
    else{
              //document.querySelector('.message').textContent='you lost' 
              displayMessage('you lost') 
              document.querySelector('.score').textContent='0'  
             }
   }
}
)

//    else if(guess > secretNumber)
//    {
//     if(score>1){
//         document.querySelector('.message').textContent='score is higher'
//         score--;
//         document.querySelector('.score').textContent=score;

//     }
//     else{
//         document.querySelector('.message').textContent='you lost' 
//         document.querySelector('.score').textContent='0' 
//     }
    
//    }
//    else if(guess < secretNumber)
//    {
//     if(score>1){
//     document.querySelector('.message').textContent='score is lower'
//     score--;
//     document.querySelector('.score').textContent=score;
//     }
//     else{
//         document.querySelector('.message').textContent='you lost'  
//         document.querySelector('.score').textContent='0'  
//     }
//    }
  
// }
// )