/* Check for Palindromes 

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

We'll also pass strings with special symbols, such as "2A3*3a2", "2A3  3a2", and "2_A3*3#A2".

Here are some helpful links:

    String.prototype.replace()

    String.prototype.toLowerCase()
*/

function palindrome(str) {
  var checkPalindrome = str.split('').reverse().join('').toLowerCase().replace(/[\W_]/g, '');
   return checkPalindrome == str.toLowerCase().replace(/[\W_]/g, '');
}

/* 
String.prototype.split() - The split() method splits a String object into an array of strings by separating the string into substrings, using a specified separator string to determine where to make each split.
Array.prototype.reverse() - The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
Array.prototype.join() - The join() method joins all elements of an array (or an array-like object) into a string.
String.prototype.toLowerCase() - The toLowerCase() method returns the calling string value converted to lower case.
String.prototype.replace() - The replace() method returns a new string with some or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function to be called for each match.

Regular Expression https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
*/

palindrome("eye");
