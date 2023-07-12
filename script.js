const DEFAULT_SIZE = 16;
let mouseToggleOn = false;
let isMouseDown = false;

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

const slider = document.querySelector('#slider');

function clearGrid() {
    gridContainer.innerHTML = '';
}


function setSliderLabel(value) {
    let gridLabels = document.querySelectorAll('#slider-value');
    gridLabels.forEach(label => label.textContent = value);
}

function changeGrid(e) {
    setSliderLabel(this.value);
    clearGrid();
    createGrid(this.value);
    initHover();
}

slider.addEventListener('change', changeGrid);

function changeCellColor(e) {
    if (mouseToggleOn && !isMouseDown) return;
    this.classList.add('hover');
}

function initHover() {
    const cells = document.querySelectorAll('.grid-cell');

    cells.forEach(cell => cell.addEventListener('mousedown', () => {
        isMouseDown = true;
    }));
    cells.forEach(cell => cell.addEventListener('mouseup', () => {
        isMouseDown = false;
    }));

    cells.forEach(cell => cell.addEventListener('mouseover', changeCellColor));
    cells.forEach(cell => cell.addEventListener('mousedown', changeCellColor));
}

function captureSelection(e) {
    mouseToggleOn = !mouseToggleOn;
    (mouseToggleOn) ? this.classList.add('button-on') :
        this.classList.remove('button-on');
}

function toggleMouseHold() {
    const toggle = document.querySelector('#toggle-hold');
    toggle.addEventListener('click', captureSelection);
}

setSliderLabel(DEFAULT_SIZE);
createGrid(DEFAULT_SIZE);
initHover();
toggleMouseHold();
