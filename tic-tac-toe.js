document.addEventListener('DOMContentLoaded', function () {

  var boardDivs = document.querySelectorAll('#board div');

  boardDivs.forEach(function (div) {
    div.classList.add('square');
  });

  var gameState = ['', '', '', '', '', '', '', '', ''];
  var currentPlayer = 'X';
  var gameActive = true;

  var statusDiv = document.getElementById('status');

  var winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  function handleSquareClick(event) {
    var square = event.currentTarget;
    var index = parseInt(square.getAttribute('data-index'), 10);

    gameState[index] = currentPlayer;
    square.textContent = currentPlayer;
    square.classList.add(currentPlayer);

    checkForWinner();

    if (gameActive) {
      currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
    }
  }

  function handleMouseOver(event) {
    var square = event.currentTarget;
    var index = parseInt(square.getAttribute('data-index'), 10);

    if (gameState[index] === '' && gameActive) {
      square.classList.add('hover');
    }
  }

  function handleMouseOut(event) {
    event.currentTarget.classList.remove('hover');
  }

  function checkForWinner() {
    var roundWon = false;
    var winner = '';

    for (var i = 0; i < winningCombinations.length; i++) {
      var a = winningCombinations[i][0];
      var b = winningCombinations[i][1];
      var c = winningCombinations[i][2];

      if (gameState[a] === '') continue;

      if (gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
        roundWon = true;
        winner = gameState[a];
        break;
      }
    }

    if (roundWon) {
      statusDiv.textContent = 'Congratulations! ' + winner + ' is the Winner!';
      statusDiv.classList.add('you-won');
      gameActive = false;
      return;
    }

    if (gameState.indexOf('') === -1) {
      statusDiv.textContent = 'Game ended in a draw!';
      gameActive = false;
    }
  }

  function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    gameActive = true;

    boardDivs.forEach(function (div) {
      div.textContent = '';
      div.classList.remove('X', 'O', 'hover');
    });

    statusDiv.textContent = 'Move your mouse over a square and click to play an X or an O.';
    statusDiv.classList.remove('you-won');
  }

  boardDivs.forEach(function (div, index) {
    div.setAttribute('data-index', index);
    div.addEventListener('click', handleSquareClick);
    div.addEventListener('mouseover', handleMouseOver);
    div.addEventListener('mouseout', handleMouseOut);
  });

  document.querySelector('.btn').addEventListener('click', resetGame);

});