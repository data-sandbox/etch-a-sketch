const DEFAULT_SIZE = 16;

const gridContainer = document.querySelector('.grid-container');

function createGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++) {
        const gridCell = document.createElement('div');
        gridCell.classList.add('grid-cell');
        gridContainer.appendChild(gridCell);
    }
}

// slider

const slider = document.querySelector('#slider');

function clearGrid() {
    gridContainer.innerHTML = '';
}

function setSliderLabel(value) {
    let gridLabels = document.querySelectorAll('#slider-value');
    gridLabels.forEach(label => label.textContent = value);
}


function changeGrid(e) {
    console.log(this.value);
    setSliderLabel(this.value);
    clearGrid();
    createGrid(this.value);
    initHover();
}

slider.addEventListener('change', changeGrid);

// change cell color

function changeColor(e) {
    this.classList.add('hover');
}

function initHover() {
    const cells = document.querySelectorAll('.grid-cell');
    cells.forEach(cell => cell.addEventListener('mouseover', changeColor));
}

setSliderLabel(DEFAULT_SIZE);
createGrid(DEFAULT_SIZE);
initHover();
