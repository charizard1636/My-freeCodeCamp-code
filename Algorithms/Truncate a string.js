/* Truncate a string 

Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

Note that inserting the three dots to the end will add to the string length.

However, if the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.

Here are some helpful links:

String.prototype.slice()
*/

function truncateString(str, num) {
  // Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.
    if (str.length > num) {
    //If the given maximum string length num is less than or equal to 3, then the addition of the three dots does not add to the string length in determining the truncated string.
    if (num <= 3) {
     return str.slice(0, num) + '...';  // Inserting the three dots to the end will add to the string length. 
    }
      return str.slice(0, num - 3) + '...';
  }
  return str;
}
//String.prototype.slice() - The slice() method extracts a section of a string and returns it as a new string.

truncateString("A-tisket a-tasket A green and yellow basket", 11);
