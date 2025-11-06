const decresmentbtn = document.getElementById("decrementbtn");
const resetbtn = document.getElementById("resetbtn");
const incrementbtn = document.getElementById("incrementbtn");
const countlabel = document.getElementById("countlabel");
let count = 0;

decresmentbtn.addEventListener("click", () => {
  count--;
  countlabel.innerText = count;
});

resetbtn.addEventListener("click", () => {
  count = 0;
  countlabel.innerText = count;
});

incrementbtn.addEventListener("click", () => {
  count++;
  countlabel.innerText = count;
}); 
