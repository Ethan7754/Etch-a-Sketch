const container = document.querySelector("#container");
const button = document.createElement("button");
button.style.width = "100px";
button.style.height = "50px";
button.innerText = "Enter Size";
document.body.prepend(button);
button.addEventListener("click", getUserCount)

function getUserCount() {
  const userCount = window.prompt("enter desired demensions for square (1 to 100 inclusive");
  return userCount;
}

function changeSquareColour() {
  let randomRNum = Math.floor(Math.random() * 255);
  let randomGNum = Math.floor(Math.random() * 255);
  let randomBNum = Math.floor(Math.random() * 255);
  this.style.backgroundColor = `rgb(${randomRNum}, ${randomGNum}, ${randomBNum})`;
}

let columnArray = [];

let count;

for (let i = 0; i < count; i++) {
  let row = document.createElement("div");
  container.appendChild(row);
  row.style.border = "2px solid black";
  row.style.flex = 1;
  row.style.display = "flex";
  for (let i = 0; i < count; i++) {
    let column = document.createElement("div");
    row.appendChild(column);
    column.style.height = "100%";
    column.style.border = "2px solid black";
    column.style.flex = 1;
    column.addEventListener("mouseover", changeSquareColour);
    columnArray.push(column);
  }
}


const increaseOpacityOfEachSquare = columnArray.forEach(item => {
  let currentOpacity = 0; 
  item.addEventListener("mouseover", increaseOpacity)
  function increaseOpacity() {
    item.style.opacity = currentOpacity;
    currentOpacity += 0.1; 
    currentOpacity = Math.min(currentOpacity, 1); 
}});