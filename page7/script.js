//  let nm = document.querySelector("#name");
//     let form = document.querySelector("form");
//     let hide = document.querySelector("#hide");

//     form.addEventListener("submit", function(dets) {
//       dets.preventDefault();

//       if (nm.value.length <= 2) {
//         hide.style.display = "block"; 
//       } else {
//         hide.style.display = "none"; 
//         alert("Form submitted successfully!");
//       }
//     });

// regex use to enter the validation in the js code for form validation
let nm = document.querySelector("#name");
let form = document.querySelector("form");
form.addEventListener("submit", function(dets){
  dets.preventDefault;
  // const emailregex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // let ans = emailregex.test("a@a.c")

  const usernameRegex = /^(?=.{3,15}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
let ans = usernameRegex.test("ab");
console.log(ans);
})