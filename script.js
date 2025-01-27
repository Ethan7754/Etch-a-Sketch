const container = document.getElementById("container");
const button = document.createElement("button");
button.textContent = "Choose grid-size!";

function displayPrompt() {
  let userPrompt = prompt("Enter desired grid-size!");
  alert (userPrompt);
}


button.addEventListener("click", displayPrompt);
container.appendChild(button);
let square;

function changeSquareColour() {
  this.style.backgroundColor = "black";
}


for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.style.width = "100%";
  container.appendChild(row);
  for (let i = 0; i < 16; i++) {
    square = document.createElement("div");
    square.addEventListener("mouseover", changeSquareColour);
    square.classList.add("square");
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.border = "2px solid black";
    container.appendChild(square);
  }
}






