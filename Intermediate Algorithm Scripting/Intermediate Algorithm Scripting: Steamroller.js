/* Flatten a nested array. You must account for varying levels of nesting. */

function steamrollArray(arr) {
  // I'm a steamroller, baby
var newArr = [];

function flatten(arr) {
arr.forEach(function(item) {
   if(!Array.isArray(item)) {
     newArr.push(item);
     } else {
     flatten(item);
     }
     });
}
flatten(arr);
  return newArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
