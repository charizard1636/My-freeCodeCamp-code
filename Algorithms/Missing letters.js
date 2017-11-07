/* Missing letters

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Here are some helpful links:

String.prototype.charCodeAt()
String.fromCharCode()
*/

function fearNotLetter(str) {
    for (var i=str.charCodeAt(0); i<=str.charCodeAt(str.length-1); i++) {
      if (str.charCodeAt(i-str.charCodeAt(0)) !== i) {
        missing = String.fromCharCode(i);
        return String.fromCharCode(i);
      }
    }
  return undefined;
}

fearNotLetter("abce");
