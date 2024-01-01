var match_start = "false";
var mode = "";

function easy(){
    if(match_start == "false"){
        mode = "easy";
        match_start = "true";
    }
}

function hard(){
    alert("Hard Mode is currently under development...");
}

var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");

var lock_1 = "false";
var lock_2 = "false";
var lock_3 = "false";
var lock_4 = "false";
var lock_5 = "false";
var lock_6 = "false";
var lock_7 = "false";
var lock_8 = "false";
var lock_9 = "false";

var if_var = 0;
var id_var = 0;

var removal_list = [];

var buff = [];

z = Math.floor(Math.random()*2);
if(z == 1){
    lbl = "X";
    cai = "o";
}else{
    lbl = "O";
    cai = "x";
}

window.addEventListener("mousedown", function(e){

    if(match_start == "true"){
    
    if(e.target.id == "one"){
        if(document.getElementById("one").innerHTML==""){
        if(lock_1 == "false"){
            one.innerHTML= lbl;

            lock_1 = "true";
            check_win();
            if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_1 = "true";
            
            console.log("a");
            if(mode == "easy"){
            computer_move();
            }else if(mode == "hard"){
                ai_move();
            }
        }
    }
    }else if(e.target.id == "two"){
        if(document.getElementById("two").innerHTML==""){
        if(lock_2 == "false"){
            two.innerHTML= lbl;

            lock_2 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_2 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "three"){
        if(document.getElementById("three").innerHTML==""){
        if(lock_3 == "false"){
            three.innerHTML= lbl;

            lock_3 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_3 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "four"){
        if(document.getElementById("four").innerHTML==""){
        if(lock_4 == "false"){
            four.innerHTML= lbl;

            lock_4 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_4 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "five"){
        if(document.getElementById("five").innerHTML==""){
        if(lock_5 == "false"){
            five.innerHTML= lbl;

            lock_5 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_5 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "six"){
        if(document.getElementById("six").innerHTML==""){
        if(lock_6 == "false"){
            six.innerHTML= lbl;

            lock_6 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_6 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "seven"){
        if(document.getElementById("seven").innerHTML==""){
        if(lock_7 == "false"){
            seven.innerHTML= lbl;

            lock_7 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_7 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "eight"){
        if(document.getElementById("eight").innerHTML==""){
        if(lock_8 == "false"){
            eight.innerHTML= lbl;

            lock_8 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_8 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }else if(e.target.id == "nine"){
        if(document.getElementById("nine").innerHTML==""){
        if(lock_9 == "false"){
            nine.innerHTML= lbl;

            lock_9 = "true";
           
           check_win(); if(lbl == "X"){
                lbl = "O";
            }else{
                lbl = "X";
            }
            lock_9 = "true";
                        
            if(mode == "easy"){
                computer_move();
                }else if(mode == "hard"){
                    ai_move();
                }
        }
    }
    }
}
});

function computer_move(){
    buff = [];
        var lockVariables = [lock_1, lock_2, lock_3, lock_4, lock_5, lock_6, lock_7, lock_8, lock_9];
    
        for (var i = 0; i < lockVariables.length; i++) {
            if (lockVariables[i] === "false") {
                buff.push(i + 1);
            }
        }
    result = buff.filter(element => !removal_list.includes(element));   
    buff = result;
        console.log(buff);

        number_var = buff[Math.floor(Math.random()*buff.length)];
        number_var = Number(number_var);
        console.log(number_var);

        
        if(number_var == 1){
            if_var = "one";
        }else if(number_var == 2){
            if_var = "two";
        }else if(number_var == 3){
            if_var = "three";
        }else if(number_var == 4){
            if_var = "four";
        }else if(number_var == 5){
            if_var = "five";
        }else if(number_var == 6){
            if_var = "six";
        }else if(number_var == 7){
            if_var = "seven";
        }else if(number_var == 8){
            if_var = "eight";
        }else if(number_var == 9){
            if_var = "nine";
        }


        buff.splice(buff.indexOf(number_var), 1);
        removal_list.push(number_var);
        
        document.getElementById(if_var).innerHTML=lbl;
        if(lbl == "X"){
            lbl = "O";
        }else{
            lbl = "X";
        }
}


function check_win(){
    if(lbl == "O"){
        if((one.innerHTML == "O" && five.innerHTML == "O" && nine.innerHTML == "O") || (three.innerHTML == "O" && five.innerHTML == "O" && seven.innerHTML == "O") || (one.innerHTML == "O" && four.innerHTML == "O" && seven.innerHTML == "O") || (two.innerHTML == "O" && five.innerHTML == "O" && eight.innerHTML == "O") || (three.innerHTML == "O" && six.innerHTML == "O" && nine.innerHTML == "O") || (one.innerHTML == "O" && two.innerHTML == "O" && three.innerHTML == "O") || (four.innerHTML == "O" && five.innerHTML == "O" && six.innerHTML == "O") || (seven.innerHTML == "O" && eight.innerHTML == "O" && nine.innerHTML == "O")){
            match_start = "false";
            if(cai == "o"){
                console.log("Computer wins you lose"); 
                showResult('You Lose');
            }else{
                console.log("You Won!");
                showResult('You Win');
            }
        }
    }else if((one.innerHTML == "X" && five.innerHTML == "X" && nine.innerHTML == "X") || (three.innerHTML == "X" && five.innerHTML == "X" && seven.innerHTML == "X") || (one.innerHTML == "X" && four.innerHTML == "X" && seven.innerHTML == "X") || (two.innerHTML == "X" && five.innerHTML == "X" && eight.innerHTML == "X") || (three.innerHTML == "X" && six.innerHTML == "X" && nine.innerHTML == "X") || (one.innerHTML == "X" && two.innerHTML == "X" && three.innerHTML == "X") || (four.innerHTML == "X" && five.innerHTML == "X" && six.innerHTML == "X") || (seven.innerHTML == "X" && eight.innerHTML == "X" && nine.innerHTML == "X")){
        match_start = "false";
        if(cai == "x"){
            console.log("Computer wins you lose"); 
            showResult('You Lose');
        }else{
            console.log("You Won!");
            showResult('You Win');
        }
    }
}









// Function to show "You Win!" or "You Lose!" message
function showResult(message) {
    document.getElementById("result").style.visibility = "visible";
    const resultElement = document.getElementById('result');
    resultElement.textContent = message;
  
    // Make the content dull
    const contentElement = document.querySelector('.content');
    contentElement.style.filter = 'grayscale(100%)';
  
    // Show the result with animation
    resultElement.style.opacity = '1';
  
    // Hide the result after 3 seconds (adjust as needed)
    setTimeout(() => {
      resultElement.style.opacity = '0';
      contentElement.style.filter = 'none'; // Restore original content appearance
    }, 3000);
  }
  
  // Call this function when needed, for example:
  // To show "You Win!"

  
  // To show "You Lose!"
  // showResult('You Lose!');
  