// const student = {
//   fullName : "krish Gupta",
//   marks : 94.4,
//   printMarks  :function() { 
//     console.log("marks = ", this.marks); // student.marks
//   },
// };

// const employee = {
//   calcTax () {
//     console.log("tax rate is 10%");
//   },
  // calctax2 : function (){
  //   console.log("tax rate is 10%");
  // }     
// }

// const karanArjun = {
//    salary : 50000,
//    calcTax () {
//     console.log("tax rate is 20%");
//    },
// };
// const karanArjun2 = {
//    salary : 50000,
// };
// const karanArjun3 = {
//    salary : 50000,
// };
// const karanArjun4 = {
//    salary : 50000,
// };
// const karanArjun5 = {
//    salary : 50000,
// };


// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;
// karanArjun4.__proto__ = employee;
// karanArjun5.__proto__ = employee;

//  class ToyotaCar {
//   constructor(brand , mileage){
//     console.log("creating new objects!!");
//     this.brand = brand;
//     this.mileage = mileage;
//   }
//     start(){
//       console.log("start");
//     }
//     stop(){
//       console.log("stop");
//     }
//     setBrand(brand){
//       // this.brandName = brand;
//       this.brand = brand;
//     }
//  };
//  let fortuner = new ToyotaCar("fortuner",10); // constructor
// //  fortuner.setBrand("fortuner"); 
// console.log(fortuner);
// let lexus = new ToyotaCar("lexus,12");// constructor
// // lexus.setBrand("lexus");
// console.log(lexus);

// class Parent{
//   hello(){
//     console.log("hello");
//   }
// }

// class Child extends Parent{};
// let obj = new  Child();

// class Person{
//   constructor(){
//     this.species = "homo species";
//   }
//   eat(){
//     console.log('eat');
//   }
//   sleep(){
//     console.log("sleep");
//   }
//   work(){
//     console.log("do nothing");
//   }
// }

// class Engineer extends Person{
//   work(){
//     console.log("solve problem , build something");
//   }
// }

// class Doctor extends Person{
//   work(){
//     console.log("treats patients");
//   }
// }
// let ShradhaObj = new Engineer();

// ******************super keyword**********
class Person{
  constructor(name){
    // console.log("enter parent constructor!!");
    this.species = "homo species";
    this.name = name;
  }
  eat(){
    console.log('eat');
  }
}

class Engineer extends Person{
  constructor(name){
    // console.log("enter child constructor!!");
    super(name); // to invoke parent class constructor
    // this.branch = this.branch;
    // console.log("exit child constrcutor");
  }
  work(){
    super.eat();
    console.log("solve problem , build something");
  }
}

 let ShradhaObj = new Engineer("shradha");