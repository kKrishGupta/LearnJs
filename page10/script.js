// Create main container
const mainContainer = document.createElement("div");
mainContainer.classList.add("flex", "flex-col", "gap-10", "items-center");

// Create input element
const input = document.createElement("input");
input.type = "text";
input.placeholder = "Search user...";
input.classList.add("px-5", "py-5", "rounded", "outline-none", "bg-[#111]");

// Append input to main container
mainContainer.appendChild(input);

// Create inner flex container for card
const innerFlex = document.createElement("div");
innerFlex.classList.add("flex", "gap-10");

// Create image
const img = document.createElement("img");
img.src =
  "https://images.unsplash.com/photo-1756894256833-934a85a42df9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0";
img.alt = "User Image";

// Create blurred layer
const blurredLayer = document.createElement("div");
blurredLayer.classList.add("blurred-layer");

// Create content div
const contentDiv = document.createElement("div");
contentDiv.classList.add("content");

// Create h3
const heading = document.createElement("h3");
heading.textContent = "User 123";

// Create paragraph
const para = document.createElement("p");
para.textContent =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fugit quis etc.";

// Create button
const btn = document.createElement("button");
btn.textContent = "Follow";

// Append all inside content div
contentDiv.appendChild(heading);
contentDiv.appendChild(para);
contentDiv.appendChild(btn);

// Append content inside blurred layer
blurredLayer.appendChild(contentDiv);

// Append image + blurred layer into inner flex container
innerFlex.appendChild(img);
innerFlex.appendChild(blurredLayer);

// Append inner flex container into main container
mainContainer.appendChild(innerFlex);

// Finally append the main container to body
document.body.appendChild(mainContainer);
