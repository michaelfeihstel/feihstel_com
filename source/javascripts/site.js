//= require turbolinks

function setAsideBackgroundColor() {
  var lowerLimit = 10;
  var upperLimit = 200;
  var r = Math.random() * (upperLimit - lowerLimit) + lowerLimit
  var g = Math.random() * (upperLimit - lowerLimit) + lowerLimit
  var b = Math.random() * (upperLimit - lowerLimit) + lowerLimit

  var aside = document.querySelector('aside');
  var color = 'rgba(' + r + ',' + g + ',' + b + ',1)';
  var delay = 500;

  var css = 'aside {background-color: ' + color + ';} a:hover {color:' + color + '; border-color: ' + color + '} .pagination__container {border-color:' + color + ';}'
  var styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  styleElement.appendChild(document.createTextNode(css));

  // setTimeout(function() {
  //   aside.style.setProperty('background-color', color);
  // }, delay);

  setTimeout(function() {
    document.head.appendChild(styleElement);
  }, delay);

  console.log(color);
}

document.addEventListener('turbolinks:load', setAsideBackgroundColor, false);