//Wait for the window (DOM) to load.
document.addEventListener("DOMContentLoaded", ()=>{

    const squares = document.querySelectorAll('#board div');
    squares.forEach(square =>{
        square.classList.add('square');
    });

    const status = document.querySelector('#status');
    const newGame = document.querySelector('#btn');
    

});

