const container = document.querySelector("#container");

const button = document.createElement("button");

button.style.width = "150px";

button.style.fontSize = "15px";

button.style.height = "50px";

button.style.position = "absolute";

button.style.top = "10px";

button.style.left = "10px";

button.innerText = "Enter Grid Size";

document.body.appendChild(button);

let rowAndColCount = 0;

let columnArray = [];

window.addEventListener("load", () => {
  setGridSize(16);
  incrementOpacity();
});

button.addEventListener("click", () => {
  container.replaceChildren();
  rowAndColCount = prompt("Enter a number between 1 and 100 (inclusive) for grid size, ex. entering 10 will create a 10 x 10 grid");
  if (rowAndColCount < 1 || rowAndColCount > 100 || isNaN(rowAndColCount)) {
    alert("Invalid input: Please enter number from 1 to 100 (inclusive)");
    return;
  } else {
    setGridSize(rowAndColCount);
    incrementOpacity();
  };
});

function changeSquareColour() {
  let randomRNum = Math.floor(Math.random() * 255);
  let randomGNum = Math.floor(Math.random() * 255);
  let randomBNum = Math.floor(Math.random() * 255);
  this.style.backgroundColor = `rgb(${randomRNum}, ${randomGNum}, ${randomBNum})`;
}

function setGridSize(count) {
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
}

function incrementOpacity() {
  const increaseOpacityOfEachSquare = columnArray.forEach(item => {
    let currentOpacity = 0; 
    item.addEventListener("mouseover", increaseOpacity)
    function increaseOpacity() {
      item.style.opacity = currentOpacity;
      currentOpacity += 0.1; 
      currentOpacity = Math.min(currentOpacity, 1); 
    }
  })};