const container = document.getElementById("container");



for (let i = 0; i < 255; i++) {
  let square = document.createElement("div");
  square.classList.add("square");
  square.style.width = "100px";
  square.style.height = "100px";
  square.style.border = "2px solid black";
  container.appendChild(square);
}

