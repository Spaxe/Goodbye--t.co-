function findAnchor (node) {
  while (node.nodeName != "A" && !!node.parentNode)
    node = node.parentNode;
  return node
}

function replaceHref (target) {
  if (target.nodeName != "A")
    return;
  if (target.hasAttribute('data-expanded-url'))
    target.title = target.href = target.getAttribute('data-expanded-url');
}

document.addEventListener("mousedown", function (event) {
  var target = findAnchor(event.target);
  replaceHref(target);
}, true);

document.addEventListener("mouseover", function (event) {
  var target = findAnchor(event.target);
  replaceHref(target);
}, true);