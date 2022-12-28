let gridSize = 0;
const etchContainer =  document.querySelector('.etch-container');
const etchGridSquare = etchContainer.children;


/* General game functions*/
function startGame() {
    createGrid(16 * 16);
    addDivClass();
    changeColor();
}


function createGrid(gridSize) {
    for (let i = 0; i < gridSize; i++) {
        const i = document.createElement('div');
        etchContainer.appendChild(i);
    }
}


function addDivClass() {
    for (let i = 0; i < etchGridSquare.length; i++ ) {
        etchGridSquare[i].classList.add('etch-square');
    }
}


function changeColor() {
    for (let i = 0; i < etchGridSquare.length; i++) {
        etchGridSquare[i].addEventListener('mouseenter', () => {
            etchGridSquare[i].style.backgroundColor = 'black';
        });
    }
}

function changeColorRainbow() {
    for (let i = 0; i < etchGridSquare.length; i++) {
        const randomColor = Math.floor(Math.random()*16777215).toString(16);
        etchGridSquare[i].addEventListener('mouseenter', () => {
            etchGridSquare[i].style.backgroundColor = "#" + randomColor;
        });
    }
}


function resetColor() {
    for (let i = 0; i < etchGridSquare.length; i++) {
        etchGridSquare[i].style.backgroundColor = '#faebd7';
    }
}

function clearGrid() {
    while (etchContainer.hasChildNodes()) {
        etchContainer.removeChild(etchContainer.firstChild);
    }
}

/* Initialize game with a 16by16 grid */
startGame();


/* 16by16 grid functionality */
function create16by16grid() {
    clearGrid();
    createGrid(16 * 16);
    addDivClass();
    changeColor();
}

function resize16by16grid() {
    const etchSquareStyle = document.querySelectorAll('.etch-square')
    etchContainer.style.gridTemplateColumns = 'repeat(16, 1fr)';
    etchContainer.style.gridTemplateRows = 'repeat(16, 1fr)';
    etchSquareStyle.forEach(element => {
        element.style.width = '30px';
        element.style.height = '30px';
    })
}

const button16by16 = document.querySelector('.button16by16');
button16by16.addEventListener('click', () => {
    create16by16grid();
    resize16by16grid();
})



/* 32by32 grid functionality */
function create32by32grid() {
    clearGrid();
    createGrid(32 * 32);
    addDivClass();
    changeColor();
}

function resize32by32grid() {
    const etchSquareStyle = document.querySelectorAll('.etch-square')
    etchContainer.style.gridTemplateColumns = 'repeat(32, 1fr)';
    etchContainer.style.gridTemplateRows = 'repeat(32, 1fr)';
    etchSquareStyle.forEach(element => {
        element.style.width = '15px';
        element.style.height = '15px';
    })
}

const button32by32 = document.querySelector('.button32by32');
button32by32.addEventListener('click', () => {
    create32by32grid();
    resize32by32grid();
})



/* 64by64 grid functionality */
function create64by64grid() {
    clearGrid();
    createGrid(64 * 64);
    addDivClass();
    changeColor();
}

function resize64by64grid() {
    const etchSquareStyle = document.querySelectorAll('.etch-square')
    etchContainer.style.gridTemplateColumns = 'repeat(64, 1fr)';
    etchContainer.style.gridTemplateRows = 'repeat(64, 1fr)';
    etchSquareStyle.forEach(element => {
        element.style.width = '7.5px';
        element.style.height = '7.5px';
    })
}

const button64by64 = document.querySelector('.button64by64');
button64by64.addEventListener('click', () => {
    create64by64grid();
    resize64by64grid();
})

/* Reset button functionality */
const resetButton = document.querySelector('.reset-button');
resetButton.addEventListener('click', () => {
    resetColor();
})

/* Rainbow button functionality */
const rainbowButton = document.querySelector('.rainbow-button');
rainbowButton.addEventListener('click', () => {
    changeColorRainbow();
})