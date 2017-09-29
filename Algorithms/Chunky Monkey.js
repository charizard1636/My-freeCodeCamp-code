/* Chunky Monkey

Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

Here are some helpful links:

Array.prototype.push()
Array.prototype.slice()
*/

function chunkArrayInGroups(arr, size) {
  var chunk = [];
  while (arr.length) {
    chunk.push(arr.splice(0, size));
  }
  return chunk;
}

/* 
Array.prototype.push() - The push() method adds one or more elements to the end of an array and returns the new length of the array.
Array.prototype.splice() - The splice() method changes the contents of an array by removing existing elements and/or adding new elements.
*/

chunkArrayInGroups(["a", "b", "c", "d"], 2);
