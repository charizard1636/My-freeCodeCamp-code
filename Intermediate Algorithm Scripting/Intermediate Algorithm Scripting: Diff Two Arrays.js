/* Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays. */

function diffArray(arr1, arr2) {
  var newArr = arr1.concat(arr2);

  function checkArr(arr) {
    if(arr1.indexOf(arr) === -1 || arr2.indexOf(arr) === -1)
     return arr;
  }
  // Same, same; but different.
  return newArr.filter(checkArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
