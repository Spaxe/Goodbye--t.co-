document.addEventLisener("mousedown", function (event) {
  var target = event.target;
  if (target.hasAttribute('data-ultimate-url'))
    target.href = target.getAttribute('data-ultimate-url');
  else if (target.hasAttribute('data-expanded-url'))
    target.href = target.getAttribute('data-expanded-url');
}, true);