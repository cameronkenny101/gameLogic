const cellElements = document.querySelectorAll('prototype');
let circleTurn;

cellElements.forEach(cell => {
    cell.addEventListener('click', handleClick, { once: true});
})

function handleClick(e) {
    const cell = e.target;
    const currentClass = circleTurn ? 'o' : 'x';
    makeMove(cell, currentClass);
}

function placeMark(cell, currentClass) {
    cell.classList.add(currentClass);
}