document.addEventListener('DOMContentLoaded', function () {

  var boardDivs = document.querySelectorAll('#board div');

  boardDivs.forEach(function (div) {
    div.classList.add('square');
  });

});