// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);

// h2.innerText = h2.innerText +"from apna college students"

let divs = document.querySelectorAll(".box");

let idx =1;

for(div of divs){
  div.innerText= ` new unique value ${idx}`;
  idx++;
}

// divs[0].innerHTML ="new unique value 1";
// divs[1].innerHTML ="new unique value 2";
// divs[2].innerHTML ="new unique value 3";