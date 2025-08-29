let modeBtn =  document.querySelector("#mode");
let curMode = "light"; //dark
let body = document.querySelector("body");


modeBtn.addEventListener("click" , () => {
 if(curMode ==="light"){
  curMode = "dark";
 body.classList.add("dark");
 body.classList.remove("light");
  // document.querySelector("body"),style.
 }else{
  curMode ="light";
  body.classList.add("light");
  body.classList.remove("dark");
 }
 console.log(curMode);
});