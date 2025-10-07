// let tm = setTimeout(function(){
//   console.log("hello")
// },5000);

// clearTimeout(tm);
// let count =10;
// setInterval(function(){
//   if(count>=0){ 
//   console.log(count);
// count--;
// }
//   else clearInterval(interval);
// },1000);

// **************************
// script.js - simple download with progress using XMLHttpRequest
let count =0;
let seconds = 10;
let progress = document.querySelector(".progress");
let percent = document.querySelector("#percent");
let intv = setInterval(function(){
  if(count<100){
    count++;
    progress.style.width = `${count}%`;
    percent.textContent =`${count}%`;
  }else{
    document.querySelector("h2").textContent= "Downloaded....";
    clearInterval(intv);
  }
},(seconds*1000)/100
);