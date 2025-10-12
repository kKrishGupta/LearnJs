// // let enemy1 = {}
// // let enemy2 = {}
// // let enemy3 = {}

// // object oriented javascript
// function CreateBiscuits(name,price,qty,company, category){
//   this.name = "ParleG";
//   this.price = 5;
//   this.qty = 8;
//   this.company= "Parle";
//   this.category = "regular";
// }

//  let biscuits1 = new CreateBiscuits("Oreo" , 10,5 ,"Cadbury","chocolate");
// let biscuits2 = new CreateBiscuits("Dark Fantasy" , 20,3 ,"Cadbury","bakery");

// // hume seekhna h factories banana ki object kaise dikhega jisse hum log naye naye objects with diff values bana paye yahi upar upar se poora kaam hai oops ka

// function CreatePencil(name, price , color , company){
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   this.company = company;
//   // this.write = function(text){
//   //   let h1 = document.createElement("h1");
//   //   h1.textContent = text;
//   //   h1.style.color= color;
//   //   document.body.append(h1);
//   // }
// };
// // CreatePencil.prototype.company = "Shreyians";
// CreatePencil.prototype.write = function(text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color= this.color;
//     console.log(h1);
//     document.body.append(h1);
// };


// let Pencil = new CreatePencil("Natraj" ,10 , "red","natraj" );
// let Pen =  new CreatePencil("Doms", 15 , "yellow","DOMS INDIA");

// // agr tumhara constructor function koii field apne prototype par attach kar leta 

// class CreatePencil{
//   constructor(name , company, price, color){
//       this.name = name;
//       this.company = company;
//       this.price = price;
//       this.color = color;
//   }
//   write(text){
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
//   }
//   erase(){
//     document.body.querySelectorAll("h1").forEach((elem) => {
//       if(elem.style.color === this.color){
//         elem.remove();
//       }
//     });
//   }
// }

// let p1 = new CreatePencil("natraj", "natraj", 10, "black");
// let p2 = new CreatePencil("Doms", "DOMS" , 15 ,"red" );



//  ************************constructor*****************


// class User{
//   constructor(name, address, username, email, role){
//     this.name = name;
//     this.address = address;
//     this.username = username;
//     this.email = email;
//     this.role = role;
//   }
//   write(text){
//     let h1 = document.createElement("h1");
//     h1.textContent = `${this.name} : ${text}`;
//     document.body.appendChild(h1);
//   }
//   checkRole(){
//     return (`you are a ${this.role}`);
//   }
// }

// class Admin extends User{
//   constructor(name, address, username, email){
//     super(name, address, username, email);
//     this.role = "admin";
//   }

//   remove(){
//     document.querySelectorAll("h1").forEach(function(elem){
//       elem.remove();
//     });
//   }
// }

// let u1 = new User("Harsh", "Bhopal" , "async123", "hey@hey.com","user");
// let u2 = new User("harishh","indore", "pyncs123","hey@hey.com", "admin");
// let a1 = new User("admin1", "India", "adminns","ad@a","admin");


// classical inheritance -- java cpp
// classes banana and unhe extend kar dena

// inheritance - class -> class
// prototypal inheritance - object -> object

let coffee = {
  color : "dark",
  drink: function(){
    console.log("gut gut gut");
  },
};

let arabiateCoffee =  Object.create(coffee);
// console.log(arabiateCoffee);
arabiateCoffee.taste = "bitter";
arabiateCoffee.drink();
//  ek object haii aap chaaho to uske saari prop/ methods ko inherits kara dete ho doosre object mein

let a = {};
let b = Object.create(a);
