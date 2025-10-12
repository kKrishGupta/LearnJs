// Async/sync

// aisa code jo line by line chale woh sync h
// and jo line by line naa chale usse async bolte h

// use arrow fnc kiya h 
// function kkuchDerrbaadChaluga (val){
//   setTimeout(
//     () =>{
//       console.log(val);
//     },
//     Math.floor(Math.random()*10)*1000
//   );
// }

// use kar rhe h fnc 
// function kkuchDerrbaadChaluga (val){
//  setTimeout(fnc,Math.floor(Math.random()*10)*1000);
// }

// kkuchDerrbaadChaluga(function() {
//   console.log("hey");
// });

// ek function ko agr aap ek aur fnc bhej d rhe ho paramter mein to wo paramter wala fnc kehlaata haii


// callback function

// function profileLekarAao(username, cb){
//     setTimeout (() =>{
//       console.log(`profile fetched of ${username}`);
//       cb();
//     },2000);
// }
// profileLekarAao("harsh" , function(profileData){
// console.log(profileData);
// });

// function profileLekarAao(username, cb){
//   console.log("Fetching profile data....");
//   setTimeout(() =>{
//     cb({_id: 12122, username, age:28 ,email :"huhuhu@hui.com"});
//   },2000);
// }

// function saarePostLekarAao(id,cb){
//   console.log("Fetching all  data....");
//   setTimeout(() =>{
//     cb({ _id:id,posts:["hey","hello","good morning"]});
//   },3000);
// }

// function savedPostNikaalo(id,cb){
//   console.log("fetching saved posts....");
//   setTimeout(() =>{
//       cb({_id :id, saved:[1,2,3,4,45,4,323]});
//   },3000);
// }
// profileLekarAao("harsh",function(data){
//   console.log(data);
//   saarePostLekarAao(data._id,function(posts){
//       console.log(posts);
//       savedPostNikaalo(data._id,function(){
//         console.log(saved);
//       })
//   })
// })


// aap ek promise banate ho jo ki do states mein se ek state me jaa skata hai and wo yaa to resolve hoga ya to reject hog ab wo kya hoga yeh to waqt batayega par humein dono ke liye code likhna padta haii

// let pr = new Promise(function (res,rej){
//   setTimeout(() =>{
//     res("harsh");
//   },3000);
// })

let pr = new Promise(function(res,rej){
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if(rn > 5) res("resolved with "+rn);
    else rej("rejected with"+rn);
  }, 1000);
})

// pr.then(function(val){
//   console.log(val);
// }).catch(function(val){
//   console.log(val);
// });
// 
async function abcd(){
  try{
    let val = await pr;
    console.log(val);
  } catch(err){
    console.log("error");
  }
}
abcd();