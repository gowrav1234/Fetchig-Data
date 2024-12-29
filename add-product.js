


const formEl = document.getElementById("form");

// Retrieve user data from localStorage or initialize as an empty array if none exists
let storedProduct = JSON.parse(localStorage.getItem("data")) || [];  // default to empty array if null

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const input = document.querySelectorAll("input");
  const obj = {};

  // Collect the form input values
  for (let items of input) {
    obj[items.name] = items.value;
  }
console.log("obj",obj)
  // Push new product to storedProduct array
  storedProduct.push(obj);

  // Save updated storedProduct array to localStorage
  localStorage.setItem("data", JSON.stringify(storedProduct));

  // Optionally reset the form
  formEl.reset();
  
  // Optionally display the added card immediately on this page
 
});
