/*
 @param null
 @return null
 */

var size_n = 3,
	boxes = [];


function init() {
      /* The board is created as a table element with specific measurements */
		var board = document.createElement('table');
        board.setAttribute("border", 1);
        board.setAttribute("cellspacing", 0);

		var identifier = 1;

	    /* Table rows are created to fill in the board with spaces again with set attributes */
		for (var i = 0; i < size_n; i++) {
			var trow = document.createElement('tr');
			board.appendChild(trow);
			for (var j = 0; j < size_n; j++) {
        var square = document.createElement('td');
        square.setAttribute('width', 200);
        square.setAttribute('height', 200);
        square.setAttribute('valign', 'center');
        square.setAttribute('align', 'center');

        /* The diagonal boxes are assigned */
				square.classList.add('col' + j,'row' + i);
				if (i == j) {
					square.classList.add('diagonal0');
				}
				if (j == size_n - i - 1) {
					square.classList.add('diagonal1');
				}
				square.identifier = identifier;

		/* An event listener is added to the cells so there is a reponse when they are clicked on */
				square.addEventListener("click", set);
				trow.appendChild(square);
				boxes.push(square);
				identifier += identifier;
			}
		}
		}
		module.exports = gameInit;