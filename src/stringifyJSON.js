// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // if type of obj is a number, obj to string
  if (typeof(obj) === 'number') {return obj.toString();}
  // if type of obj is a boolean, obj to string
  if (typeof(obj) === 'boolean') {return obj.toString();}
  // if type of obj is null,
};
