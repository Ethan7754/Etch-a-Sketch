const container = document.getElementById("container");

for (let i = 0; i < 16; i++) {
  let row = document.createElement("div");
  row.style.width = "100%";
  container.appendChild(row);
  for (let i = 0; i < 16; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.style.width = "50px";
    square.style.height = "50px";
    square.style.border = "2px solid black";
    container.appendChild(square);
  }
}






