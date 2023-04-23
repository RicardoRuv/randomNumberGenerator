let x;
let maxNumber;
let guess;
let attempts =0;
let wrongAttempts =[];

// document.getElementById("generate").onclick = function(maxNumber){
//
//     x = Math.floor(Math.random() * maxNumber);
//     document.getElementById("xlabel").innerHTML = x;
// }

// function generateNumber(){
//     maxNumber=document.getElementById("userNumber").value;
//     maxNumber=parseInt(maxNumber);
//
//     x = Math.floor(Math.random() * maxNumber);
//
//     document.getElementById("generateNum").innerHTML=x;
//
// }

function generateNumber(){
    let flag = true;
    do {
        maxNumber = parseInt(window.prompt("Enter max number"));
        if(!maxNumber){
            alert("not a number !")
        }
        else if(maxNumber <1){
            alert("Please enter a number greater than 0")
        }
        else{
            maxNumber = parseInt(maxNumber);
            x = Math.floor(Math.random() * maxNumber+1);
            flag = false;
        }
    }while(flag)

        document.getElementById("generateNum").innerHTML=x;
}

function guessNumber(){

    let flag = true;

    do {
        guess =prompt("Enter your guess! No negative, No 0's, every decimal will round up to 1. Enter 'q' to quit");
        if(guess === "q"){
            break;
        }
        if(isNaN(guess)){
            alert("Not a number");
        }
        else if(guess <1){
            alert("Please enter a number greater than 0")
        }
        else if(guess >maxNumber){
            alert("You entered a number greater than the max number");
        }
        else{
            guess= Math.round(guess);
            flag=false;
        }
    }while(flag)

    while(guess !== x){
        if(guess === "q")
            break;
        if(wrongAttempts.includes(guess)){
            alert("You already tried this");
            guessNumber();
        }
        else {
            wrongAttempts.push(guess);
            attempts++;
            alert("Wrong please try again");
            guessNumber();
            // guess = window.prompt("Wrong try again");
            // guess = parseInt(guess);
        }
    }
        // wrongAttempts.push(guess);
    // wrongAttempts.push(guess);
    if(guess === "q"){
        document.getElementById("confirmation").innerHTML="Thank you for Playing";
    }
    else{
        document.getElementById("confirmation").innerHTML= "Yes Congrats you got a total of "+attempts+" attempts wrong. Your inputs were "+ wrongAttempts +","+guess;
    }

}


