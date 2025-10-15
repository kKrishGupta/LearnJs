// DOM ka code and logic ka code alag rehna chahiye
// spearation of content

// const btn = document.querySelector("button");
// const ul = document.querySelector("ul");

// function add (n1,n2){
//   return n1+n2;
// }

// btn.addEventListener("click",function(){
//   const num1 = Math.floor(Math.random()*10);
//   const num2 = Math.floor(Math.random()*10);
//   let finaladd =add( num1,num2);
//   let li = document.createElement("li");
//   li.textContent = finaladd;
//   ul.appendChild(li);
// })


// map -> ek array ke top pe chalta h abd us array ke sabhii members map function ke andar aat e and map function ke andar aate h and map function ek naya array return karta haii and jo bhhii mao ne return kiya hoga whii placed hota h

// const arr = [1,2,3,4,5];

// function myMap(arr,callback){
//   let newarr = [];
//   for(let i=0;i<arr.length;i++){
//     newarr.push(callback(arr[i],i,arr));
//   }return newarr;
// }

// // let ans = myMap([1,2,3,4],(num) =>num+2);
// myMap(arr,function(val){
//   return val +2;
// })


// call stack (Execution stack)
// 
// js single threaded haii ek time parr ek hi kaam karta haii
// jab tum fucntion call karte ho -> wo stack ke top pe chaala jaata h
// function complete hone ke baad stack se nikal jaata h (pop ho jaata haii).

// function a(){
//   console.log("a");
// };
// function b(){
//   a();
//   console.log("b");
// };
// function c(){b();
//   console.log("c");
// };
// c();

// webapis
// cosnole setTimeout setInterval alert prompt
// co js la part nahii hoti 

setTimeout(function(){
  console.log("hey1");
},1000);
setTimeout(function(){
  console.log("hey2");
},1500);
setTimeout(function(){
  console.log("hey3");
},1200);
setTimeout(function(){
  console.log("hey4");
},3000);