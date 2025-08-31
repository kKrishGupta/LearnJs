// let arr =[1,2,3,4,5,6];
// arr.forEach(function printVal(val){
// console.log(val);
// })

// arr.forEach((val,idx,arr)=> {
//   console.log(val);
// });
// *************map**************
// let nums =[67,52,39];

// let newArr = nums.map((val) =>{
//   return val*val;
// })
// console.log(newArr);

// **************filter**********************
// let nums = [1,2,3,4,5,6,7,8,9];
// let evenArr = nums.filter((val)=>{
//   return val%2==0;
// });

// console.log(evenArr);

// **************reduce**********************
let nums =[1,2,3,4,5,6,7,8,9];

const sumWithInitial = nums.reduce((res, curr) =>{
  return res+curr;
});
console.log(sumWithInitial);