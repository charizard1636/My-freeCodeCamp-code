/* Confirm the Ending

Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

Here are some helpful links:

String.prototype.substr()
String.prototype.substring() */

function confirmEnding(str, target) {
 
  return str.substring(str.length-target.length) == target;
  
  // The string is 'Bastian' and the target is 'n' 
  // target.length = 1 so str.length-target.length = -1
  // if ('Bastian'.substr(-1) === 'n')
  // if ('n' === 'n')}

confirmEnding("Bastian", "n");
