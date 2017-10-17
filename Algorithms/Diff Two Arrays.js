/* Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Here are some helpful links:

Comparison Operators
Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
*/

function diffArray(arr1, arr2) {
  var newArr = [];
  var arr = arr1.concat(arr2);
  // Same, same; but different.
    for (var i in arr) {
    var a = arr[i];
    var b = 0;
    for(j=0; j < arr.length; j++) {
      if (arr[j] === a) {
        b++;
      }
    }
    if(b === 1) {
      newArr.push(a);
    }
  }
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
