window.setInterval(function() {
  var links = document.body.getElementsByTagName('a');
  for (var i = 0; i < links.length; ++i) {
    if (links.hasOwnProperty(i)) {
      if (links[i].hasAttribute('data-ultimate-url')) {
        links[i].setAttribute('href', links[i].getAttribute('data-ultimate-url'));
      } else if (links[i].hasAttribute('data-expanded-url')) {
        links[i].setAttribute('href', links[i].getAttribute('data-expanded-url'));
      }
    }
  }
}, 5000);