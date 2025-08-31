let btn1 = document.querySelector(".btn1");

// btn1.onclick = (e) => {
//   console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
//   console.log("Handler1");
//   let a= 25;
//   a++;
//   console.log(a); //26
// };

// btn1.onclick = () => {
//   console.log("handler2");
// }
// let box = document.querySelector("div");
// box.onmouseover = (e) =>{
//     console.log(e);
//   console.log(e.type);
//   console.log(e.target);
//   console.log(e.clientX,e.clientY);
//   console.log("you are inside div");
// };

// onmouseover="console.log('you are inside div')"
// ondblclick="console.log('button was clicked'); alert('hello')"]

btn1.addEventListener("click", (evt) =>{
  console.log("button1 was clicked - handler1");
  // console.log(evt);
  // console.log(evt.type);
});

btn1.addEventListener("click", () =>{
  console.log("button1 was clicked - handler2");
});
btn1.addEventListener("click", () =>{
  console.log("button1 was clicked - handler3");
});
const handler3 = () =>{
  console.log("button1 was clicked - handler3")
}
btn1.addEventListener("click", () =>{
  console.log("button1 was clicked - handler4");
});

btn1.removeEventListener("click" ,handler3);
 
// let div = document.querySelector("div");