let gridSize = 16;
let mode = `black`;
let currentColor = '#000000';

const grid = document.getElementById('grid');
const clearButton = document.getElementById('clear-button');
const colorButton = document.getElementById('color-button');
const blackButton = document.getElementById('black-button');
const rainbowButton = document.getElementById('rainbow-button');
const sizeButton = document.getElementById('size-button');
const colorPicker = document.getElementById('color-picker');
const buttonParent = document.getElementById('btnHolder');
const allButtons = document.getElementsByTagName('h3');

//Generate the grid
const generateGrid = (size) => {
    grid.innerHTML = "";
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.style.backgroundColor = 'white';
        gridElement.addEventListener('mouseover', colorChange);
        grid.appendChild(gridElement);
    };

};

//Color change function for each div in grid
const colorChange = (event) => {
    if(mode === 'black'){event.target.style.backgroundColor = `rgb(0, 0, 0)`}
    else if (mode === 'rainbow'){
        let colorR = Math.floor(Math.random() * 256);
        let colorG = Math.floor(Math.random() * 256);
        let colorB = Math.floor(Math.random() * 256);

        event.target.style.backgroundColor = `rgb(${colorR}, ${colorG}, ${colorB})`
    } else if (mode === 'color'){
        event.target.style.backgroundColor = `${currentColor}`
    };
};

//change mode to color and current color selected by color picker
const colorMode = () => {
    mode = 'color'
};
colorButton.addEventListener('click', colorMode);

const setCurrentColor = (event) => {
    currentColor = event.target.value;
    for(let i = 0; i < allButtons.length; i++){
        allButtons[i].style.backgroundColor = currentColor
    };
    document.getElementById('heading').style.color = currentColor
};

colorPicker.addEventListener('input', setCurrentColor);

//Change mode to black
const blackMode = () => {
    mode = 'black'
};
blackButton.addEventListener('click', blackMode);

//Change mode to rainbow
const rainbowMode = () => {
    mode = 'rainbow'
};
rainbowButton.addEventListener('click', rainbowMode);

//clear button and function
const clear = () => {
    grid.innerHTML = "";
    generateGrid(gridSize);
};
clearButton.addEventListener('click', clear);

//grid size change and function
const changeSize = () => {
    let newDimension = prompt("Enter a new dimension");
    if(newDimension !== null && newDimension <= 100 && newDimension > 0){
        gridSize = newDimension;
        generateGrid(gridSize);
    } else {alert(`Please enter a dimension between 1 and 100.`)};
};
sizeButton.addEventListener('click', changeSize);

window.onload = () => {
    generateGrid(gridSize);
};