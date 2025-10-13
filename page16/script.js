// design pattern 

// module pattern ek design pattern hai jisme hum apna code ek self excuting function (IIFE) ke andar likhte hain taki variables aur function private rahen

// Iske andar se hum sirf wahi cheezein return karte hain jo bahar use karni hain

// is pattern ka main fayda hai data hiding(encapsulation) aur clean structure, taki code secure , reusable aur manageable ban sake

// let fnc = (function(){
  // return 12;

// })();

// let Bank = (function(){
//   let bankBalance = 12000;
//   function checkBalance(){
//     console.log(bankBalance);
//   }
//   function setBalance(val){
//     bankBalance = val;
//   }
//   function withdrawn(val){
//     if( val <= bankBalance){
//       bankBalance -=val;
//       console.log(bankBalance);
//     }
//   }
//   return {
//   bal:  checkBalance, 
//   set: setBalance, 
//   with : withdrawn
//   };
// })();

// Bank.withdrawn(11000);


// factory Function Pattern

// factory function ek aise design pattern hai jism hum ek simple function likhte hai jsime pne methods aur (agr chaho toh) private data ho sakta hai 

// yeh pattern specially useful hai jab tumhe ek hi type ke bohot saare objects, chhaiye jaise user, products, tasks etc

// function factory(){
// }

// function createProduct (name , price){
//   let stock = 10;
//   return {
//       name,
//       price,
//       checkStock(){
//         console.log(stock);
//       },
//       buy(qty){
//         if(qty <= stock){
//           stock -= qty;
//           console.log(`${qty} pieces booked - ${stock} pieces left...`);
//         }else{
//           console.error(`We only have ${stock} pieces left.`);
//         }
//       },
//       refill(qty){
//         stock += qty;
//         console.log(`Refilled the stock - ${stock}pieces now`);
//       },
//   };
// }

// let iphone = createProduct("iphone",70000);
// iphone.buy(9);

class YoutubeChannel{
  constructor(){
    this.subscriber =[];
  }
  subscribe(user){
    this.subscriber.push(user);
    user.update(`${user.name},you have subscribed the channel`);
  }
  unsubscribe(user){
    this.subscribers = this.subscribers.filter((sub) => sub!== user);
    user.update(`you have unsubscribed the channels`);
  }
  notify(message){
    this.subscribers.forEach(sub => sub.update(message));
  }
}

class User{
  constructor(name){
    this.name = name;
  }
  update(data){
    console.log(data);
  }
}

let sheriyans = new YoutubeChannel();
let user1 = new User("Harsh");
let user2 = new User("Amit");
sheriyans.subscribe(user1);
sheriyans.subscribe(user2);
// sheriyans.notify("new video upload");
