/* Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.

Math.max()
Math.min()
Array.prototype.reduce()
*/

function sumAll(arr) {
  var max = arr.reduce(function(a, b) {
    return Math.max(a, b);
  });
  var min = arr.reduce(function(a, b) {
    return Math.min(a, b);
  });
  var sum = 0;
  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
}
sumAll([1, 4]);
