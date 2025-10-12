// // this keyword special keyword hai
// // global scope
// console.log(this);
// // function ke andar 
// function abcd(){
//   console.log(this);
// }
// abcd();
// // method ke andar 
// // let obj = {
// //   name :"harsh",
// //   sayName : function (){
// //     console.log(this.name);
// //   },
// // };
// // obj.sayName();

// // let obj = {
// //   name :"harsh",
// //   sayName : () => {
// //     console.log(this.name);
// //   },
// // };
// // obj.sayName();

// // event handler
// document.querySelector("h1")
// .addEventListener("click",function(){
//   // alert();
//   console.log(this.style.color = "red");
// });
// //  class ke andar value blank object hoti h 
// class Abcd {
//   constructor(){
//       console.log("heyhe");
//       this.a = 12;
//   }
// }
// let val  = new Abcd();
                        

// let obj = {
//   name : "harsh",
// };

// function abcd(a,b,c,d){
//   console.log(this,a,b,c,d);
// }
// abcd.call(obj,1,2,3,4);
// abcd.apply(obj,[1,2,3,4]);
// 
// let fnc =  abcd.bind(obj , 1,2,3,4);
let form = document.querySelector("form");

const userManager = {
  users : [],
  init :function(){
    // form.addEventListener("submit", function(e){
    //   e.preventDefault();
    //  console.log(this);
    // });
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm : function(e){
    e.preventDefault();
    console.log("form submitted");
  },
  addUser: function(){},
  removeUser : function(){},

}