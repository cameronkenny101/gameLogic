const checkWinner = require('./checkWinner');

test('Checks if player has won game', () => {
    var board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'x']
    ];

    var Player1 = 'x';

    expect(checkWinner(Player1, board) == true);
});