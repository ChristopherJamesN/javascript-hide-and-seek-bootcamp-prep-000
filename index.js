function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.getElementById('nested').getElementsByClassName('target')[0];
}

function increaseRankBy(n) {
  var elements = document.getElementsByClassName('ranked-list');
  var length = elements.length
  for (var i = 0; i<length; i++) {
    elements[i].innerHTML = parseInt(elements[i].innerHTML, 10) + n;
  }
  return elements;
}

function deepestChild() {
  var elements = document.querySelector('#grand-node div div div div');
  return elements;
}
