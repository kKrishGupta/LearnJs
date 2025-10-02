// variable

// decalration and initialization
// var a; // declaration
// var a=10 // initialization
// var a =13;
// window mein add karta hai
// function scoped hota h
// aap firse kar sakte ho error nhi aayega
// let a =10;
// let a =15; // error aayega

// console.log(a);
// const dulha = "lab";
// const dulhan = "laby";

// let a =12;\

// scope(global, block, function )

// var a =12;
// {

// }

// global scope
// reassignment , redecalration 
// var a = 12;
// a =32;

// let n=11;
// n= 23;

//temporal dead zome

// console.log(a);
// let a= 15;

// tdz- utna area jitne mein js ko pata toh hai ki vaiable exists karta hai 
// var a =12;

// hoisting impact per type
// hoisting -> ek variabke ko jab js mein banate hai toh woh variable do hisso mein toot jata hai and uska decare part uper chala jaata hai and initialization neeche chala jaata hai

// var a = undefined;
// console.log(a);
// var a = 12;

// let a = undefined;
// console.log(a);

// var -> hoist  -> undefined
// let -> hoist -> x
// const -> hoist -> x

// console.log(age);
// let age =25;

// if(true){
//   let a = 10;
//   var b =25;
// }
// console.log(b);
// console.log(a);

// ' ' -- single quote
// " " -- double quote
// ` ` -- backtick

// let obj = {
//   uid : 1,
//   name :"harsh", 
//   age :12,
//   email :"hello@akgec.ac.in",
// };

// let u1 = Symbol('uid');
// obj[u1] = "001";

// let a =[1,2,3,4];
// let b =a;

// let x = 10;
// let y = 20;
// if(x > 5 && y<25){
//   console.log("A");
// }else{
//   console.log("B");
// }

// let isAdmin = true;
// let isLoggedIn = false;

// if(isAdmin || isLoggedIn){
//   console.log("Access Granted")
// }else{
//   console.log("access denied");
// }

// let temp =35;
// if(!(temp<30)){
//   console.log("Hot");
// }else{
//   console.log("Pleasant");
// }

// let points = 20;
// let status = points >100? "Gold" :points >50? "Silver" :"Bronze";
// console.log(status);

// let p = 4;
// let q =++p;
// console.log(p,q);
// let loggedIn = false;

// if(loggedIn){
//   console.log("home page");
// }else{
//   console.log("no page");
// }

// switch(val){
//   case 1:
//     break;
//   case 2:
//     break;
//   default :
//     break;
// }

// function getGrades(score){
//   if(score >=90){
//     return 'A';
//   }
//   else if(score >=80){
//     return 'B';
//   }
//   else if(score >=70){
//     return 'C';
//   } 
//   else if(score >=60){
//     return 'D';
//   }
//   else{
//     return 'F';
//   }
// }
// console.log(getGrades(85));

// loop
// repeat karne ka loop kahte h
// 111111111111111111111
// 12345678

//  kaha se jaana hai - kaha takk jaana h -> kaise kaana h
// for

// kaha se jaana h -> kab rukna h -> kaisa jn h'
// while

// for(let i=0;i<101;i++){
//   console.log(i);
// }
//  i=1;
//  while(i<101){
//   console.log(i);
//   i++;
//  }

for(let i=1;i<201;i++){
  console.log(i);
  if(i==31){
    break;
  }
}