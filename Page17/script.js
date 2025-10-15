// //  debouncing -> aap koii action kar rhe ho and aap ye nahii chhate ha action pe kuchh ho jab bhii mere actions e beech meion koii specific gap aye to ir reacton perfirm ho

// function debounce(fnc,delay){
//  let timer;
//  return function(...args){
//   clearTimeout(timer);
// timer = setTimeout(function() {
//   fnc(...args);
// }, delay);
//  };
// };
// document.querySelector("input").addEventListener("input", function (){
//         console.log("heyheye");
// }); 
// document.querySelector("input").addEventListener("input", debounce(function(){
//   console.log("hey");
// }));

// debounce --> ek dely bataoge tum utna delay jab bhii aayega  action ka reaction milega


// let input = document.querySelector("input");

// function debounce(fnc,delay){
//   let timer;
//   return function(){
//     clearTimeout(timer);
//     timer = setTimeout(() =>{
//       fnc(...args);
     
//     },delay);
//   }
// }
// // input.addEventListener("input", debounce(function(){},1000));

// input.addEventListener("input", debounce(function(dets){
//   console.log(dets);
// },1000));
// debounce();

// throttle --> interval par chalenge, actio.n agar hota raha and aapne ek interval bataya tio utne interval me aapka event chalega ---harr 1000mx me ek baar chalegaa

// let input = document.querySelector("input");

// function debounce(fnc, delay){

// }
// function throttle(fnc,delay){
//   let timer =0;
//   return function(...args){
//     let now = Date.now();
//     if(now- timer >= delay){
//       timer = now;
//       fnc(...args);
//     }
//   };
// }

// input.addEventListener(
//   "input", 
//   throttle(function(){
//     console.log("ran");
//   },1000)
// );



// lazy loading images with intersection laziness 
// it is basically when we load the website the part that show on display is not showing after that we scroll down only that part shown no other images are loaded 
// scroll down to see images load only when they enter the visualViewport
// Select all images
let imgs = document.querySelectorAll("img");

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src; // Set actual image
      img.classList.add("loaded"); // Add fade-in effect
      observer.unobserve(img); // Stop observing once loaded
    }
  });
});

// Observe each image
imgs.forEach(function(img) {
  observer.observe(img);
});
.