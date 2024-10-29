//Wait for the window (DOM) to load.
document.addEventListener("DOMContentLoaded", ()=>{



    

    const squares = document.querySelectorAll('#board div');
    let i = 0
    squares.forEach(square =>{
        square.classList.add('square');
        square.id = i++
    });


    
    const squareCells = Array.from(document.getElementsByClassName('square'))


    // let state = ["","","","","","","","",""];
    // let currentPlayer = squares.getAttribute('square', 'X');
    // let running = true;
    const status = document.querySelector('#status')
    const newGamebtn = document.querySelector('.btn')
    const O_sym = "O"
    const X_sym = "X"

    let currentPlayer = X_sym
    let state = ["","","","","","","","",""]//Array(9).fill(null)

    const startGame = () => {
        squareCells.forEach(square => square.addEventListener('click', squareClicked))
    }

    function squareClicked(e){
        const id = e.target.id
        if(!state[id]){
            state[id] = currentPlayer
            e.target.innerText = currentPlayer

            if(playerSelection() !== false){
                status = `${currentPlayer} has won!`
            }

            currentPlayer = currentPlayer == X_sym ? O_sym : X_sym
        }
    }

    //Win conditions
    const winCond = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    function playerSelection(){

        for(const condition of winCond){
            let [a,b,c] = condition

            if(state[a] && (state[a] == state[b] && state[a] == state[c])){
                return[a,b,c]
            }
        }
        return false
    }
    
    newGamebtn.addEventListener('click', newGame);

    function newGame(){
        state.fill(null)
        squareCells.forEach(square =>{
            square.textContent = ''
        })
        currentPlayer = X_sym
    }

    startGame()

    // const squareCell = document.querySelector('.square');
    // squares.forEach (square =>{
    //     squareCell.addEventListener('click', e => {
    //         squareCell.innerHTML = 'X';
    //     });
    // });


    // const squareCell = document.querySelector('.square');
    
    // squareCell.addEventListener('click', e => {
    //     squareCell.innerHTML = 'O';
    // });

    
    
        

    // for (let i=0; i<9; i++){
        
    // }

    // const status = document.querySelector('#status');
    // const newGame = document.querySelector('#btn');

    

    

    // initializeGame();

    // function initializeGame(){
    //     squares.forEach(squares => squares.addEventListener('click', squareClicked()))
    //     newGame.addEventListener('click', newGame);
    //     status.textContent = `${currentPlayer}'s turn`;

    // }

    // function squareClicked(e){
    //     console.log(e.target)



    // //     const squareIndex = this.getAttribute(squareIndex);
    // //     if(state[squareIndex]!=''|| !running){
    // //         return;
    // }

    // start

    //     updateSquare(this, squareIndex);
    //     checkwinner();

    // }

    // function updateSquare(square, index){
    //     state[index] = currentPlayer;
    //     cell.textContent = currentPlayer;

    // }

});

