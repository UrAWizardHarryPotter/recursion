// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //assign mutation variable
  var mutation = "";

  // if type of obj is a number, add obj to mutation string
  if (typeof(obj) === 'number') {return mutation + obj;}
  // if type of obj is a boolean, add obj to mutation string
  if (typeof(obj)  === 'boolean') {return mutation + obj;}
  // if type of obj is a string, put quotes around string
  if (typeof(obj) === 'string') {return '"' + obj + '"';}
  // if type of obj is a function, return null
  if (typeof(obj) === 'function') {return null;}
  // if type of obj is undefined, return undefined
  if (typeof(obj) === 'undefined') {return 'undefined';}
  // if obj is null, add obj to mutation string
  if (obj === null) {return mutation + obj;}

  // if type of obj is an Array
  if (Array.isArray(obj)) {
    // return 'stringed' array brackets and call map method on obj
    // recurse stringifyJSON through each array's element
    return '[' + obj.map(element => {return stringifyJSON(element)}) + ']';
  }
  // if type of obj is an Object
  // assign keyCount to length of obj
  var keyLength = Object.keys(obj).length;
  // iterate over obj
  for (var key in obj) {
    // if the typeof of obj[key] is undefined or a function
    if(typeof(obj[key]) === 'undefined' || typeof(obj[key]) === 'function') {
      // subtract 1 from keyLength
      keyLength -1;
      // otherwise if key properties still exist (keyLength > 1)
    } else if (keyLength > 1) {
      // add the recursed key of stringifyJSON + ":" + the recursed key-value + "," to the mutation
      mutation += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
      // subtract keyLength by 1
      keyLength -=1;
      // otherwise add the recursed key of stringifyJSON + ":" + the recursed key-value to the mutation
    } else {mutation += stringifyJSON(key) + ':' + stringifyJSON(obj[key])}
  }
  // return the obj mutation and add stringified object brackets
  return '{' + mutation + '}';
};