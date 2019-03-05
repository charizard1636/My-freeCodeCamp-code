/* Return an English translated sentence of the passed binary string.
The binary string will be space separated. */
/* /*Parsing means we will pass something in and we want it to return as an integer and together with the arguments, we can request it as a certain type of integer and it will convert for us.
return utf-16 from binary
*/

function binaryAgent(str) {
var split = str.split(' ');
var newArray = [];
var result = [];

for(var i=0; i<split.length;  i++) {
  newArray.push(parseInt(split[i], 2));
  result.push(String.fromCharCode(newArray[i]));
}
return result.join('');
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");
