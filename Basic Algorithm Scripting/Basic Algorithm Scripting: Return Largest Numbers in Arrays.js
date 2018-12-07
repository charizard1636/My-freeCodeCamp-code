/* Return Largest Numbers in Arrays 

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].

Here are some helpful links:

Comparison Operators */

function largestOfFour(arr) {
  // You can do this!
  var newArr = [];
  var value = 0;
  for (var i = 0; i < 4; i++) {
    value = arr[i].reduce(function(a, b){
      return a >= b ? a : b;
    });
    console.log(value);
    newArr.push(value);
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
