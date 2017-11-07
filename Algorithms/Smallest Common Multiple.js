/* Smallest Common Multiple

Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.

Here are some helpful links:

Smallest Common Multiple
*/


function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]),
      min = Math.min(arr[0], arr[1]),
      smallestCommons = max;
  var lcm = function(a,b){
    var mult=1;
    for(var j=1; j<=a; j++){
      mult=b*j;
      if(mult%a === 0) {
        return mult;
      }
    }
  };
  for(var i=max; i>=min; i--) {
    smallestCommons=lcm(i, smallestCommons);
  }
  return smallestCommons;
}


smallestCommons([1,5]);
