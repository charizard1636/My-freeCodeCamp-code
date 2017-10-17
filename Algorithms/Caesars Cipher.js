/* Caesars Cipher

One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()

*/

function rot13(str) { // LBH QVQ VG!
  var input = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
 var output = ["n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m"];      
  
 str = str.toLowerCase().split("");
 
 for (var i = 0, l = str.length; i < l; i++)  {
  if(input.indexOf(str[i]) !== -1) {
  var index = input.indexOf(str[i]);
  str[i] = output[index];
 }
 }
 str = str.join("").toUpperCase();
  return str;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
