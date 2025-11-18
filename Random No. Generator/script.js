let count = 0;

const countDisplay = document.getElementById("count");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");
function getRandomInt(min, max) {
  min = Math.ceil(min); 
  max = Math.floor(max); 
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function updateDisplay() {
  countDisplay.textContent = count;
}

increaseBtn.addEventListener("click", () => {
  count++;
  updateDisplay();
});

decreaseBtn.addEventListener("click", () => {
  count--;
  updateDisplay();
});

resetBtn.addEventListener("click", () => {
  count = 0;
  updateDisplay();
});

randomBtn.addEventListener("click", ()=>{
    count = getRandomInt(1,100);
    updateDisplay();
})
