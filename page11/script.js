// function abcd(){
//   var a = 12;
// }
// console.log(a);

// global , function , block
// var a =12

// excution content
// js sabse pahle jaise hi aapka fucntion dekhta haii sabse pahle js banaata hai excution content ye ek process hai jo ki do different phases mein chalta hai memoey pahse and doosre ka naam hai excution phase

// function abcd(){
//   var a = 12;
//   let b =13;
//   const c = 14;
//   //.....
  
//   // 
// }

// function abcd(){
//   let a = 12;
//   return function(){
//     console.log(a);
//   };
// }
// let fnc =abcd();

// private counter
//  function countFOrMe(){
//   let c =0;
//   return function(){
// c++;
// console.log(c);
//   };
//  }
//  let fnc =countFOrMe();

// encapsulation
// function clickLimiter(){
//   let click =0;
//   return function(){
//     if(click<5){
//       click++;
//       console.log(`clicked : ${click} times`);
//     }else{
//       console.log("LIMIT EXCEED, ");
//     }
//   };
// }
// let fnc = clickLimiter();
// fnc();
// fnc();

// fnc();

// toaster
// function createToaster(config){
//   return function(notification){
//     // kuchh karega 
//     let parent = document.createElement("div");
//     let div = document.createElement("div");
//     div.className = 
//     `fixed ${config.theme === "dark"? "bg-gray-800 text-white" : "bg-gray-100 text-black"}  px-6 py-3 rounded shadow-lg pointer-events-none ${config.positionX === "right"? "right-10" :"left-10"} ${config.positionY === "top" ? "top-10" :"bottom-10"}`;

//     div.textContent = notification;
//     document.body.appendChild(div);

//     setTimeout(() => {
//         document.body.removeChild(div);
//     },config.duration*1000);
//   };
// }

// let toaster = createToaster({
//   positionX : "left",
//   positionY :"top",
//   theme: "dark",
//   duration :3,
// });
// toaster("Download done !");


// 
function createToaster(config){
return function(str){
 let div  =  document.createElement("div");
 div.textContent = str;
 div.className= `inline-block ${config.theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100 text-black"}  px-6 py-3 rounded shadow-lg pointer-events-none `;
 document.querySelector(".parent").appendChild(div);
 if(config.positionX !== "left" || positionY !== "top"){
  // document.querySelector(".parent".classList.add("fixed"));
  document.querySelector(".parent").className += 
  `${config.positionX === "right" ? "fixed right-5" :"left-5"} ${config.positionY === "bottom" ? "bottom-5" : "top-5"}`;
 }
 setTimeout(() => {
  document.querySelector(".parent").removeChild(div);
 }, config.duration*1000);
};
}
let toaster = createToaster({
  positionX:"right",
  positionY:"top",
  theme : "dark",
  duration : 3,
});
toaster("Downlaod Done");
setTimeout(() =>{
toaster("harsh accepted ur request");
},2000);
