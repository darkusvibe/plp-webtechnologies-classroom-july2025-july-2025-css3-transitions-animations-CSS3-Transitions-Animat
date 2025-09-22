// Global variable
let isLoaderActive = false;

/* Reusable function with parameters + return values */
function toggleAnimation(elementId, className) {
  const el = document.getElementById(elementId);
  if (!el) return false; // fail-safe
  el.classList.toggle(className);
  return el.classList.contains(className); // return state
}

/* Demonstrating scope */
function scopeDemo() {
  let localVar = "I am local";
  console.log(localVar); // accessible here
}
scopeDemo();
// console.log(localVar); // would error out (not defined globally)

/* Part 3: Animation Triggers */
function animateBox() {
  const active = toggleAnimation("animatedBox", "slide");
  console.log("Animated box active:", active);
}

function flipCard() {
  const active = toggleAnimation("flipCard", "flip");
  console.log("Card flipped:", active);
}

function toggleLoader() {
  isLoaderActive = !isLoaderActive;
  if (isLoaderActive) {
    document.getElementById("loader").classList.add("spin");
  } else {
    document.getElementById("loader").classList.remove("spin");
  }
  console.log("Loader active:", isLoaderActive);
}
