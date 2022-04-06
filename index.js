// DOM selectors
const button = document.getElementById("submit");
const activeClass = document.querySelector(".card");
const inactiveClass = document.querySelectorAll(".card.toggle");
let testArray = [...document.querySelectorAll("a.circle")];
const rating = document.querySelector(".showRating");
const errorMsg = document.querySelector(".errorMsg");
// holds value of selected numeric button
let finalValue;

testArray.forEach((item) => {
  item.addEventListener("click", (event) => {
    let currentValue = item.textContent;
    finalValue = currentValue;
  });
});

button.addEventListener("click", function () {
  if (!finalValue) {
    /* Error validation in case no value is selected */
    errorMsg.textContent = "Please select a value to continue";
  } else {
    activeClass.classList.add("toggle");
    inactiveClass.forEach((item) => {
      item.classList.remove("toggle");
      rating.textContent = finalValue;
    });
  }
});
