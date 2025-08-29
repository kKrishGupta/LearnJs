// ********************question  1 create a button 

let newBtn = document.createElement("button");
newBtn.innerText = "Click me";

// ✅ Apply styles correctly
newBtn.style.color = "white";
newBtn.style.backgroundColor = "red";

// ✅ Add the button at the top of the body
document.body.prepend(newBtn);


// *********************question 2***************************

let para = document.querySelector("p");
