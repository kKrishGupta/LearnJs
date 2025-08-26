// practice set 2

// Ques1
for(let i=0;i<=100;i++) {
  if(i%2 ==0){
    console.log(i);
  }
}


// ques2
let gameNum = 25;
let userNum = prompt("Guess a number");
while(userNum != gameNum){ // game
userNum = prompt("you entered wrong number, please try again");
}
console.log("congrats you entered the correct number");