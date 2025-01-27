const button = document.createElement("button");
button.textContent = "Choose grid-size!";
button.addEventListener("click", displayPrompt);
document.body.prepend(button);
let square;


const container = document.getElementById("container");
container.style.width = "800px";
container.style.height = "800px";
container.style.display = "flex";
container.style.flexDirection = "column";


function displayPrompt() {
  let userPrompt = prompt("Enter desired grid-size!");
  alert (userPrompt);
  return userPrompt;
}




function changeSquareColour() {
  let randomRNum = Math.floor(Math.random() * 255);
  let randomGNum = Math.floor(Math.random() * 255);
  let randomBNum = Math.floor(Math.random() * 255);
  this.style.backgroundColor = `rgb(${randomRNum}, ${randomGNum}, ${randomBNum})`;
}

let currentOpacity = 0;

function increaseOpacity() {
  this.style.opacity = currentOpacity;
  currentOpacity += 0.1; 
  currentOpacity = Math.min(currentOpacity, 1); 
}

for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  container.appendChild(row);
  row.style.display = "flex";
  for (let i = 0; i < 16; i++) {
    square = document.createElement("div");
    square.addEventListener("mouseover", changeSquareColour);
    square.addEventListener("mouseover", increaseOpacity);
    square.classList.add("square");
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.border = "2px solid black";
    container.appendChild(square);
  }
}





function setGridSize(gridSize) {
  container.style.display = none;
  for (let i = 0; i < gridSize; i++) {
  let row = document.createElement("div");
  row.style.width = "100%";
  container.appendChild(row);
  for (let i = 0; i < gridSize; i++) {
    square = document.createElement("div");
    square.addEventListener("mouseover", changeSquareColour);
    square.classList.add("square");
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.border = "2px solid black";
    container.appendChild(square);
  }
}

}






