/* Seek and Destroy

You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Here are some helpful links:

    Arguments object

    Array.prototype.filter()
 */
 
 function destroyer(arr) {
  // Create an array of arguments using the arguments object
  var arg = [];
  for(var i=1; i<arguments.length; i++){
    arg.push(arguments[i]); }
// Return arr after filtering values in arg
return arr.filter(function(remove) {
  return arg.indexOf(remove) < 0;
});
  
}
// Arguments object - The arguments object is an Array -like object corresponding to the arguments passed to a function.
// Array.prototype.filter() - The filter() method creates a new array with all elements that pass the test implemented by the provided function.
destroyer([1, 2, 3, 1, 2, 3], 2, 3);
