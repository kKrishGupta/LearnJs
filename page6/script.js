// let h1 = document.querySelector("h1");
// h1.addEventListener("click",function(){
//   h1.style.color = "red";
// })
// let p = document.querySelector("p");
// p.addEventListener("dblclick",function(){
// p.style.color = "yellow";
// });
// Element.addEventListener("event name",Function)
// let p = document.querySelector("p");
// p.removeEventListener("dblclick",function(){
//   // p.style.color = "yellow";
//   console.log("removed");
// });

// function dblclick(){
//   p.style.color = "yellow";
// }
// p.addEventListener("dblclick",dblclick);
// p.removeEventListener("dblclick",dblclick);


// let  p = document.querySelector("p");
// p.addEventListener("click",function() {
//   p.style.color = "blue";
//   p.style.backgroundColor= "pink";
// });

// let inp = document.querySelector("input");
// inp.addEventListener("input",function(evt){
//   console.log(evt.data);
// });

// let inp = document.querySelector("input");
// inp.addEventListener("input",function(){
//   console.log("typed");
// });

// dynamic input
// let inp = document.querySelector("input");
// inp.addEventListener("input",function(dets){
//   if(dets.data!== null){
//   console.log(dets.data);}
// });
// let sel = document.querySelector("select");
// sel.addEventListener("change",function(dets){
// console.log(dets.target.value);
// })
// let device = document.querySelector("#device");
// sel.addEventListener("change",function(dets){
//   // device.textcontent = "Device Selected"; 
//   device.textContent = `${dets.target.value} device Selected`;
// });


// approach
// 
// let h1 = document.querySelector("h1");
// window.addEventListener("keydown",function(dets){
//   // h1.textContent = dets.key;
//   if(dets.key === " "){
//     h1.textContent =  "SPC";
//   }
//   else{
//     h1.textContent = dets.key;
//   }
// });

// let btn = document.querySelector("#btn");
// let fileInp = document.querySelector("#fileInp");
// btn.addEventListener("click", function(){
//   fileInp.click();
// });

// fileInp.addEventListener("change",function(dets){
//   // console.log(dets.target.files[0].name);
//   // btn.textContent =  dets.target?.files[0].name;
//   const file = dets.target.files[0];
//   // console.log(file);
//   if(file){
//     btn.textContent = file.name;
//   }
  
// });


// form***************************
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// form.addEventListener("submit", function(dets){
//   dets.preventDefault();
//   console.log(inputs[0].value,
//     inputs[1].value,
//     inputs[2].value,
//     inputs[3].value,
//     inputs[4].value,
//   );
// });

// -******************************************
// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//   abcd.style.backgroundColor = "yellow";
// })
// abcd.addEventListener("mouseout",function(){
//   abcd.style.backgroundColor = "red";
// })

// window.addEventListener("mouseover", function(dets){
//   console.log(dets);
// })
// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function(dets) {
//   abcd.style.top = dets.clientY + "px";
//   abcd.style.left = dets.clientX + "px";
// });

// let abcd =  document.querySelector("#abcd");
// abcd.addEventListener("click", function(dets){
// console.log(dets)
// });

// jispe event aayega agr uspar listenr nhi hua toh humaraa event parent parr listner dhudenga 
// main div
//   nav div
//   links
//   button\



// document.querySelector("#nav")
// .addEventListener("click",function(){
//   alert("clicked");
// })

// *********************************
// let ul = document.querySelector("ul");
// ul.addEventListener("click",function(dets){
  // alert("clicked");
  // console.log(dets.target);
  // dets.target.style.textDecoration = "line-through";
//   dets.target.classList.toggle("lt");
// })

// // ************************************
// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//   console.log("button clicked");
// });

// c.addEventListener("click",function(){
//   console.log("c clicked");
// },true);

// b.addEventListener("click",function(){
//   console.log("b clicked");
// });

// a.addEventListener("click",function(){
//   console.log("a clicked");
// },true);
// capture phase


let inp = document.querySelector("input");
let span = document.querySelector("span");
inp.addEventListener("input",function(){
  let left = 20- inp.value.length;
   span.textContent =  left;
if(left<0){
  span.style.color= "red";
}else{
  span.textContent = "white";
}
})