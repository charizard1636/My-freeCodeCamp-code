/* Repeat a string repeat a string

Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

Here are some helpful links:

Global String Object
*/

function repeatStringNumTimes(str, num) {
  // check if num is negative and return empty string if true
  if (num < 0 ) {
    return "";
  }
  // check if num equals 1 and return string
  if (num === 1) {
  return str;
}
  else {
    // return abcabcabc
    return str + repeatStringNumTimes(str, num - 1);
  }
}
repeatStringNumTimes("abc", 3);
