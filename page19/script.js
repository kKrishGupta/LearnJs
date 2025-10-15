// const ul = document.querySelector("ul");
// const space = document.createDocumentFragment();

// for(let i=0;i<100;i++){
//   const li = document.createElement("li");
//   li.textContent = i;
//   // ul.appendChild(li);
//   space.appendChild(li);
// }
// ul.appendChild(space);
// ************************************************************************
let count =0;
const int = setInterval(()=>{
if(count<10){
  count++;
  console.log(count);
}else{
  // console.log("still chal rha h");
  clearInterval(int);
  console.log("finished");
}
},1000);