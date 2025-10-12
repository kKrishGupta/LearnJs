// fetch("https://randomuser.me/api/")
// .then((rawdata) =>{
//   return rawdata.json();
//   // console.log(rawdata);
// })  
// .then((data) =>{
//    console.log(data.results[0].name.first);
// })
// .catch((rawdata) =>{
//   console.log(err);
// });

// fetch("https://randomuser.me/api/")
// .then((raw) => raw.json())
// .then(data => console.log(data));

fetch("https://randomuser.me/api/?results=5000")
.then((raw) => raw.json())
.then(data => console.log(data.results[0]));