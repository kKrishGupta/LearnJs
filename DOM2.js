// let div = document.querySelector("div");
// console.log(div);
// let id = div.getAttribute("id");
// console.log(id);

// let name = div.getAttribute("name");
// console.log(name);

// let para = document.querySelector("p");
// // console.log(para.getAttribute("class"));
// console.log(para.setAttribute("class" ,"newClass"));


// ********style node style*******************
let div = document.querySelector("div");
div.style.backgroundColor = "navy";
div.style.backgroundColor= "yellow";

div.style.fontSize ="26px";
div.innerText="hello world!";
div.style.visibility="visible";
// div.style.visibility="hidden";

let newBtn = document .createElement("button");
newBtn.innerText="click me";
console.log(newBtn);

div = document.querySelector("div");
div.beforeAppend(newBtn);

let newHeading = document.querySelector("h1");
h1.innerHTMl = "<i> Hi ,i am new !</i>";

document.querySelector("body").prepend(newHeading);


let para = document.querySelector("p");
para.remove();