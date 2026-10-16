document.addEventListener('DOMContentLoaded', function () {

  var boardDivs = document.querySelectorAll('#board div');

  boardDivs.forEach(function (div) {
    div.classList.add('square');
  });

  var gameState = ['', '', '', '', '', '', '', '', ''];
  var currentPlayer = 'X';
  var gameActive = true;

  function handleSquareClick(event) {
    var square = event.currentTarget;
    var index = parseInt(square.getAttribute('data-index'), 10);

    gameState[index] = currentPlayer;
    square.textContent = currentPlayer;
    square.classList.add(currentPlayer);

    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }

  boardDivs.forEach(function (div, index) {
    div.setAttribute('data-index', index);
    div.addEventListener('click', handleSquareClick);
  });

});