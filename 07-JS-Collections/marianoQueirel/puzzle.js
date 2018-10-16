const arrayRules = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4, 6],
    [1, 3, 5, 7],
    [2, 4, 8],
    [3, 7],
    [4, 6, 8],
    [5, 7]
];
let nullIndex = 0;
const init = [null, 1, 2, 3, 4, 5, 6, 7, 8];
const items = document.getElementsByClassName('square');

for (let i = 0; i < items.length; i++) {
    items[i].textContent = init[i];
}

const squaresBoard = document.querySelector('.squares');

squaresBoard.addEventListener('click', function(e) {
    const squareIndex = e.target.dataset.index;

    if (arrayRules[nullIndex].includes(Number(squareIndex))) {
        items[nullIndex].textContent = items[squareIndex].textContent;
        items[squareIndex].textContent = '';
        nullIndex = squareIndex;
    }
})
