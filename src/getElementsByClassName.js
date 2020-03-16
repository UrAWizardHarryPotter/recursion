// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // assign empty array to theLostBoys
  let theLostBoys = [];
  // declare lostChildren function with neverland parameter
  function lostChildren(neverland) {
    // assign neverland to peterPan
    let peterPan = neverland;
    // if on peterPan's classList and contains the className, push peterPan into theLostBoys
    if (peterPan.classList && peterPan.classList.contains(className)) {theLostBoys.push(peterPan);}
    // if peterPan has childNodes, recurse the lostChildren forEach
    if (peterPan.childNodes) {peterPan.childNodes.forEach(lostChildren);}
  }
// invoke lostChildren on the document.body
lostChildren(document.body);
// return theLostBoys
return theLostBoys;
};
