let gridSize = 16 * 16;


const etchContainer =  document.querySelector('.etch-container');

for (let i = 0; i < gridSize; i++) {
    const i = document.createElement('div');
    etchContainer.appendChild(i);
}


const etchGridSquare = etchContainer.children;

function changeColor() {
    for (let i = 0; i < etchGridSquare.length; i++) {
        etchGridSquare[i].addEventListener('mouseenter', () => {
            etchGridSquare[i].style.backgroundColor = 'black';
        });
    }
}

changeColor();

