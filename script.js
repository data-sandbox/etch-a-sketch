const gridContainer = document.querySelector('.grid-container');

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div')
        gridCell.classList.add('grid-cell')
        gridContainer.appendChild(gridCell)
    }
}
let numCells = prompt("How many cells per side? Enter a number between 0 and 100")
createGrid(numCells);

const cells = document.querySelectorAll('.grid-cell');

function changeColor(e) {
    this.classList.add('hover');
}

cells.forEach(cell => cell.addEventListener('mouseover', changeColor));