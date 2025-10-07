// local Storage ->aapke browser ke andar data store karna jo ki browser band hone parr bhii delete nhii hoga

// sessionStorage ->ye aapka data temporarily store karta hai matlab ki tab band hau aur data gaya
// ccokies -> yeh bhii data store karta hai and aapka data browser ke ccokies naam ki property mein save hota hai and yeh cookie concept kam data ya light data ke liye hota haii


// localStorage 
// store kaise kare
// data fetch kaise  hota h
// remove and update kaise kare

// localStorage.setItem("name","harsh");
// let val = localStorage.getItem("name");
// console.log(val);
// localStorage.removeItem("name");

// sessionStorage rn on chrome console 
// sessionStorage.set,getItem chalte h

// cookies 
// browser mein chota data store ke liye cookies ka istemmal hota h


// localStorage.setItem("friend",["aakash","sumit","harish","amit"]); // isko console me localStorage ke naam se check karte h

// localStorage.removeItem;

// localStorage.setItem("friend" , {one : "akash", two:"sumit"});
// localStorage.setItem("friends",JSON.stringify(["akash","amit","harsh"]));
// let fr = JSON.parse(localStorage.getItem("friends"));
// console.log(fr);

// ***************************** dark or bright theme********************
function setDarkOrLight() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
  } else {
    document.body.classList.add("light");
    document.body.classList.remove("dark");
  }
}

if (localStorage.getItem("theme")) {
  document.body.classList.add(localStorage.getItem("theme"));
} else {
  setDarkOrLight();
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function() {
  if (!localStorage.getItem("theme")) {
    setDarkOrLight();
  }
});

const btn = document.querySelector("#themeToggle");

btn.addEventListener("click", function() {
  if (document.body.classList.contains("dark")) {
    document.body.classList.remove("dark");
    document.body.classList.add("light");
    btn.textContent = "🌙 Dark";
    localStorage.setItem("theme", "light");
  } else {
    document.body.classList.add("dark");
    document.body.classList.remove("light");
    btn.textContent = "☀️ Light";
    localStorage.setItem("theme", "dark");
  }
});

if (document.body.classList.contains("dark")) {
  btn.textContent = "☀️ Light";
} else {
  btn.textContent = "🌙 Dark";
}
