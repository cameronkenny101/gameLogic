/*
    @param TicTacToe board
    @return 0 for no winner, 1 for 'x' as winner, 2 for 'o' as winner and 3 for draw
*/

function checkWinner(board) {
    // Pre-determined win conditions of TicTacToe
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    checkWinX = new Array(9);
    checkWinO = new Array(9);

    var location = 0;
    var count = 0;

    // Stores location of x's and stores location of o's
    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(board[i][j] == 'x') {
                checkWinX[(i + j) + location] = true;
                count++;
            }
            else if(board[i][j] == 'o') {
                checkWinO[(i + j) + location] = true;
                count++;
            }
        }
        location += 2;
    }

    var isWinX = true;
    var isWinO = true;

    // Runs through the win conditions
    for(var i = 0; i < 8; i++) {
        isWinX = true;
        isWinO = true;
        for(var j = 0; j < 3; j++) {
            if(!(checkWinX[winConditions[i][j]] == true)) {
                isWinX = false;
            } else if(!(checkWinO[winConditions[i][j]] == true)) {
                isWinO = false;
            }
        }
        if(isWinX == true) {
            return 1;
        }
        if(isWinO == true) {
            return 2;
        }
    }
    // If no moves are left return a draw
    if(count == 9)
        return 3;
    // else return no winner
    else
        return 0;
    
}

module.exports = checkWinner;