var Player1 = 'x';
var Player2 = 'o';

var board = [
    ['x', 'x', 'x'],
    ['', 'x', ''],
    ['', 'o', 'x']
];

console.log(checkWinner(Player1, board));

function checkWinner(player, board) {
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

    checkWin = new Array(9);
    var location = 0;

    for(var i = 0; i < 3; i++) {
        for(var j = 0; j < 3; j++) {
            if(board[i][j] == player) {
                checkWin[(i + j) + location] = true;
            }
        }
        location += 2;
    }

    var isWin = true;

    for(var i = 0; i < 8; i++) {
        isWin = true;
        for(var j = 0; j < 3; j++) {
            if(checkWin[winConditions[i][j]] == true) {
                ;
            } else {
                isWin = false;
            }
        }
        if(isWin == true) {
            return true;
        }
    }
    return false;
}