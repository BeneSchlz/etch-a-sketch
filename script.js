const container = document.querySelector("#container");

createGrid = (rows, cols) =>{
    container.innerHTML = "";

    const cellSize =  `${100 / cols}%`;

 for(let i = 0; i < rows * cols; i++) {
    const content = document.createElement("div");
content.classList.add("content-grid");

content.style.width = cellSize;
content.style.height = cellSize;

content.addEventListener("mousemove", () => {
    content.style.backgroundColor = "black";
});

container.appendChild(content);
}
};

document.querySelector("#gridButton").addEventListener("click", () =>{
    const gridSize = prompt("Enter size of grid");
    if (gridSize !== null && gridSize > 0 && gridSize <= 100){
        createGrid(gridSize, gridSize);
    }
});

createGrid(16, 16);

