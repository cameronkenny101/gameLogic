const checkWinner = require('./checkWinner');

test('Checks if player has won game', () => {
    var board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'x']
    ];

    expect(checkWinner(board) == 1);
});

test('Checks if player has won game', () => {
    var board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'o'],
        ['o', 'x', 'o']
    ];

    expect(checkWinner(board) == 3);
});

test('Checks if player has won game', () => {
    var board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'x'],
        ['o', 'o', 'o']
    ];

    expect(checkWinner(board) == 2);
});

test('Checks if player has won game', () => {
    var board = [
        ['x', 'o', 'x'],
        ['o', 'x', 'x'],
        ['o', '', 'o']
    ];

    expect(checkWinner(board) == 0);
});