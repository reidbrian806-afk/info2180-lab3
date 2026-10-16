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

  boardDivs.forEach(function (div, index) {
    div.setAttribute('data-index', index);
    div.addEventListener('click', handleSquareClick);
    div.addEventListener('mouseover', handleMouseOver);
    div.addEventListener('mouseout', handleMouseOut);
  });

});