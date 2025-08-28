// let nums =[ 1,2,3,4,5,6];
// nums.forEach((num) => {
// console.log(num*num); // num **2
// });

// question 2

// let marks = [80,87,98,89,56,45,99,85,45,78];
// let topper = marks.filter((val)=> {
//   return val>= 90;
// })

// console.log(topper);

// question 3

let n = prompt("enter number : ");
let arr =[];
for(let i=1;i<=n;i++){
  arr[i-1] =i;
}
console.log(arr);


let sum = arr.reduce((res, curr) => {
  return res + curr;
})
console.log("sum : " +sum);

let fact = arr.reduce((res,curr)=>{
  return res*curr;
})
console.log(fact);
