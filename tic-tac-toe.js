//Wait for the window (DOM) to load.
document.addEventListener("DOMContentLoaded", ()=>{

    const squares = document.querySelectorAll('#board div'); //Selects the contents of the board div from the html.
    let i = 0
    squares.forEach(square =>{
        square.classList.add('square'); //Adds the class "square" to all the div elements of the game board in the html.
        square.id = i++ //generates a unique id number value for each square div element from 0-8.
    });


    //An array variable containing each square element.
    const squareCells = Array.from(document.getElementsByClassName('square'))
    

    const status = document.querySelector('#status') //Variable to store the text status during the game.
    const newGamebtn = document.querySelector('.btn') //Variable to refer to the New Game button.
    const O_sym = "O" //Variable to store the letter "O".
    const X_sym = "X" //Variable to store the letter "X".
    let no_plays = 0 //Variable stores the amount of plays made.

    let currentPlayer = X_sym //Initialies current player to X.
    let state = ["","","","","","","","",""] //Initializes state with an array with 9 empty spaces.

    //An arrow function that initiates the game.
    const startGame = () => {
        //squareCells.forEach(square => square.addEventListener('hover', squareHover))
        squareCells.forEach(square => square.addEventListener('click', squareClicked)) //A forEach loop that makes each square clickable.
    }

    // function squareHover(e){
    //     const hover = e.target.hover
    //     return
    // }

    //Function that allows a X or O to appear when a square is clicked and prevents other squares from being clicked if there is a winner before all squares are clicked.
    function squareClicked(e){
        const id = e.target.id //target referring to a single square element at a time.

        //if statement that checks the square position by its id number and how many squares clicked.
        if(!state[id] && no_plays < 9){
            state[id] = currentPlayer //Initializes state at 'this id number' (each square clicked) with a X or an O
            e.target.innerText = currentPlayer //Allows the X or O to be visible in the square elements.

            //Checks for the winner.
            if(playerSelection() !== false){
                status.innerHTML = `Congratulation! ${currentPlayer} is the Winner!`//Displays the winner in text on the webpage.
                no_plays = 10
                return
            }

            no_plays++ //Increments no_plays
            currentPlayer = currentPlayer == X_sym ? O_sym : X_sym //Checks when turns for X or O by alternating between both letters per turn.
            status.innerHTML = `${currentPlayer}'s turn!` //Displays whether is X turn or O turn as text on the webpage.
        }

        //Checks if the number of plays is equal to 9, which if true will cause the game to draw.
        if(no_plays === 9){
            status.innerHTML = 'Game Draw!'
        }
    }

    //Winning conditions.
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

    //Function that checks the win conditions to determine the winner of the game.
    function playerSelection(){

        for(const condition of winCond){
            let [a,b,c] = condition

            if(state[a] && (state[a] == state[b] && state[a] == state[c])){
                return[a,b,c]
            }
        }
        return false
        
    }
    
    newGamebtn.addEventListener('click', newGame); //Enables the New Game button to restart the game.

    //Function to reset the game
    function newGame(){
        state.fill(null)
        no_plays = 0
        squareCells.forEach(square =>{
            square.textContent = ''
        })
        currentPlayer = X_sym
        status.innerHTML = 'Move your mouse over a square and click to play an X or an O.'
    }

    startGame() //Called function that starts the gane.

});

