// new cards create karne haii, data local storage mein save karna h
// localStorage se hi cards ko show karna h
// buttons ko handle karna h
let addNote = document.querySelector(".add-note");
let formContainer = document.querySelector("#callModal");
let close = document.querySelector(".create");

addNote.addEventListener("click",function(){
formContainer.classList.remove("hidden");
});

close.addEventListener("click", function(){
  formContainer.classList.add("hidden");
});

// Select each input field by order or by label meaning
const imageInput = formContainer.querySelector('input[placeholder="https://example.com/photo.jpg"]');
const nameInput = formContainer.querySelector('input[placeholder="Enter full name"]');
const hometownInput = formContainer.querySelector('input[placeholder="Enter home town"]');
const purposeInput = formContainer.querySelector('input[placeholder="e.g. Quick appointment note"]');

// Select category buttons
const emergencyBtn = formContainer.querySelector(".cat.emergency");
const importantBtn = formContainer.querySelector(".cat.important");
const urgentBtn = formContainer.querySelector(".cat.urgent");
const norushBtn = formContainer.querySelector(".cat.norush");

// Optional: put them all in a NodeList (for looping)
const allInputs = formContainer.querySelectorAll("input[required]");
const allCategories = formContainer.querySelectorAll(".cat");
// Buttons
const createBtn = formContainer.querySelector(".create");
const closeBtn = formContainer.querySelector(".close");

// function makeValidation(){

// }
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const imageUrl = document.getElementById("imageUrl");
  const fullName = document.getElementById("fullName");
  const homeTown = document.getElementById("homeTown");
  const purpose = document.getElementById("purpose");

  // Clear previous errors
  [imageUrl, fullName, homeTown, purpose].forEach(i => i.classList.remove("error"));

  // Validation check
  if (
    !imageUrl.value.trim() ||
    !fullName.value.trim() ||
    !homeTown.value.trim() ||
    !purpose.value.trim() ||
    !selectedCategory
  ) {
    errorMsg.style.display = "block";

    [imageUrl, fullName, homeTown, purpose].forEach(i => {
      if (!i.value.trim()) i.classList.add("error");
    });
    return;
  }

  errorMsg.style.display = "none";
  alert("✅ Form validated successfully!");
});
                                                             