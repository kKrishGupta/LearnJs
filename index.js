// console.log("Hello, World!");
// alert("This is a sample JavaScript file.");
// console.log("Goodbye, World!");

// name = "tony shark";
// age= 24;
// price =null;
// x= null;
// y= undefined;
// isfollow = true;
// console.log(isfollow);
// name =25;
// console.log(name);
// // console.log(x);
//  var age = 24;
//  var age = 50;
//  var age = 40;
// let age = 40;
// age =86;
// age=34;
// const pi =3.14;
// pi= 54;

//  console.log(pi);

// {
//   let a=5;
//   console.log(a);
// }

// let a = 10;

// const student = {
//   fullName : "Rahul",
//   age: 20,
//   cgpa: 8.5,
//   isPass : true
// }
// console.log(student.age);

// const products = {
//   title : "Ball Pen",
//   rating : 4,
//   offsets : 5, 
//   price: 270
// };
// console.log(products);
// console.log(typeof(products));

// Airthmetic 
// let a =5;
// let b =4;

// let c = 5^4;
// console.log(a+b);
// console.log(a-b);

// unary operator
// let a=5;
// let b=6;
// console.log("a= ",a, "b= ",b);
// a++;
// b--;
// console.log("a= ",a, "b= ",b);

// let a =5;
// let b= 6;
// console.log(a == b);

// let age = 119;
// if(age >= 18){
//   console.log("eligible");
// }

// let num =10;
// if(num%2==0){
//   console.log("even");
// }
// else{
//   console.log("odd");
// }

// let age = 15;
// age>=18 ? console.log("adult") : console.log("not adult");

// let number = prompt("enter number:");
// alert("hello!");

// let number = prompt("enter number:");
// if(number %5 ==0){
//   alert("divisible by 5");
//   console.log("no divisible by 5");
// }
// else{
//   alert("not divisible by 5");
// }

// let score= prompt("enter score : ");
// if(score>=80 && score<=100){
//   console.log("A");
// }
// else if(score>=70 && score <80){
//   console.log("B");
// }
// else if(score>=60 && score<70){
//   console.log("C");
// }
// else if(score>=50 && score<60){
// console.log("D");
// }
// else{
//   console.log("F");
// }

// for(let i=0;i<5;i++){
//   console.log(i);
// }
let i=0;
while(i<5){
  console.log(i);
  i++;
}
let size =0;
let str = "Apna college";
for(let i of str){ // iterator of character
  console.log(i);
  size++;
}
console.log("size = ",size);