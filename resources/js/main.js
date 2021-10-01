 var player1 = document.getElementById('player1-section');

 var player2 = document.getElementById('player2-section');

 var player1Icon = document.getElementById('player1-icon');

 var player2Icon = document.getElementById('player2-icon');
 
 var p1_result = document.getElementById('player1-resualt');

 var p2_result =document.getElementById('player2-resualt');
 
 var btlArea = document.getElementById('battle-area') ;     // battel Area // 
 
 var vsIcon = document.getElementById('vs-icon');           // vs icon //

 var btnGroup = document.getElementsByClassName("btn-group");   // player1 buttons //

 var arr = btnGroup[0].getElementsByTagName('button');







 
 
 document.getElementById('btn-start').addEventListener("click",start);   //start button//


// start function //
function start() {
    startBtn(); 
    setTimer(3);
    changeImage();
    displayTimer();
    active();
}

// timer function 
function setTimer(second) {
    var timeleft=second;
    const setTimer = setInterval(()=>{
    if(timeleft <=0){

     document.getElementById('timer').innerHTML='Shoot!!';
     clearInterval(setTimer)
    }else{
            document.getElementById('timer').innerHTML=timeleft + ' second to start...';
    }
    --timeleft;
    },1000)
    
}
   // Display Timer Function //
function displayTimer() {
    document.getElementById("timer").classList.remove("d-none");
    document.getElementById("timer").classList.add("d-block");
  
}
   // start button//
function startBtn() {
    document.getElementById("btn-start").classList.remove("d-block");
    document.getElementById("btn-start").classList.add("d-none");
   
}
     //Change Image  // 
function changeImage() {
    let  newImage =document.createAttribute('src');
    newImage.value = "img/thinking.png" ;
    document.getElementById('graham-img').setAttributeNode(newImage);
    document.getElementById('chatt').innerHTML = 'I already chose my move!'
}
  function active() {
    document.getElementById("player2-section").classList.toggle("active");
    document.getElementById("player1-section").classList.toggle("active");
   document.getElementById('btn-rock').classList.remove('disabled');
   document.getElementById('btn-scissors').classList.remove('disabled');
   document.getElementById('btn-paper').classList.remove('disabled');
    
  }

 
//____________________________passed_____________________________________________// 






   //     please here complete writing :    //

// Game  button Functionality //                   

// button  for Player 1 && player 2//

function showResult(r,v) {
    btlArea.classList.remove('d-none');
    vsIcon.classList.add('d-block');
   document.getElementById("timer").classList.add("d-none");
   player1Icon.classList.remove('fa-hand-rock');
   player1Icon.classList.add('fa-hand-'+r);            // change the class Name duo to rundom Number //
   player2Icon.classList.remove('fa-hand-rock');
   player2Icon.classList.add('fa-hand-'+v);            // change the class Name duo to rundom Number //
} 
//___________________________________________________________________________//

   // player 1 Buttons//
  for (x=0 ; x < arr.length; x++) {
    arr[x].addEventListener('click',selectAction)  ;
  }

  function selectAction(e) {
       let r =e.target.id.slice(4);     //  r  return the class Name for the Player 1//
        let v = action2();               //  v return the class Name for the player 2 //
        
        showResult(r,v);
        
         let w = Get_Result(r,v);
        displayResult(w);

  } 


  // player2  moves // 

  function action2() {
     let i = Math.floor(Math.random() * 3);      // returns a number betrween 0 and 2 for the player 2//
    if (i==0) {
        return'rock';
      } else if (i==1) {
        return'paper';
      } else {
       return'scissors';
      }
       
    }


    
   function Get_Result(r,v) {    //diecide  wo is the winner//
    
      if (r=='rock'&& v=='paper') {
          return 'p2';
          
      } else if (r=='rock'&&v=='scissors'){
          return 'p1';
      }else if (r=='paper'&& v=='rock') {
          return 'p1';
      }else if (r=='paper'&& v=='scissors'){
          return 'p2';

      }else if (r=='scissors'&& v=='paper') {
          return 'p1';
        }
        else if (r=='scissors'&& v=='rock'){
            return 'p2';
        }
        else if(r==v){
         return 'tie'  ;
      }
   }
   
   function displayResult(w) {
                if (w=='p1') {
                                    let  newImage =document.createAttribute('src');
                                    newImage.value = "img/loser.png" ;
                                    document.getElementById('graham-img').setAttributeNode(newImage);
                                    document.getElementById('chatt').innerHTML = 'I am the Loser agaist you!!'
                                     p2_result.innerHTML = 'Loser';
                                     p1_result.innerHTML = 'Winner';
                                    
                } else if (w=='p2'){
                                    let  newImage =document.createAttribute('src');
                                    newImage.value = "img/winner.png" ;
                                    document.getElementById('graham-img').setAttributeNode(newImage);
                                    document.getElementById('chatt').innerHTML = 'Iam the King of the Game!'
                                    p2_result.innerHTML = 'Winner';
                                    p1_result.innerHTML = 'Loser';
                                   

                } else if(w=='tie'){
                                    let  newImage =document.createAttribute('src');
                                    newImage.value = "img/waiting.png" ;
                                    document.getElementById('graham-img').setAttributeNode(newImage);
                                    document.getElementById('chatt').innerHTML = 'Not Bad we can playing one more Time!!'
                                    p2_result.innerHTML = 'Tie';
                                    p1_result.innerHTML = 'Tie';

                }
            }