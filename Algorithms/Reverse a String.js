/* Reverse a StringReverse a String

Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.

Here are some helpful links:

    Global String Object

    String.prototype.split()

    Array.prototype.reverse()

    Array.prototype.join()  
*/
    
function reverseString(str) {
  return str.split("").reverse().join("");
}
reverseString('hello');
