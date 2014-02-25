function findAnchor (node) {
  while (node.nodeName != "A" && !!node.parentNode)
    node = node.parentNode;
  return node
}

function replaceHref (target) {
  if (target.nodeName != "A")
    return;

  // Twitter
  if (target.hasAttribute('data-expanded-url')) {
    target.href = target.getAttribute('data-expanded-url');
    return;
  } else if (target.hasAttribute('data-pre-embedded') && target.getAttribute('data-pre-embedded') == "true") {
    target.href = window.location.protocol + "//" + target.text;
    return;
  }

  // Tweetdeck
  if (target.hasAttribute('data-full-url')) {
    target.href = target.getAttribute('data-full-url');
  }
}

function bypass_t_co (event) {
  try {
    var target = findAnchor(event.target);
    if (target)
      replaceHref(target);
  } catch (e) {}
}

document.addEventListener("mousedown", bypass_t_co, true);
document.addEventListener("mouseover", bypass_t_co, true);