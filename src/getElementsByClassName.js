var getElementsByClassName = function (className) {
  var results = [];

  function matchFinder (node) {

    // if current node is an element
    if (node.nodeType === 1 && node.classList !== 0) {
      for (var i =0; i < node.classList.length; i++) {
        if (node.classList[i] === className) {results.push(node);}
      }
    }

    // recursively check childNodes
    if (node.childNodes) {
      for (var j = 0; j < node.childNodes.length; j++) {
        matchFinder(node.childNodes[j]);
      }
    } 
  }
  //start searching the tree
  matchFinder(document.body);

  return results;
};
