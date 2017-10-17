/* Roman Numeral Converter

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Here are some helpful links:

Roman Numerals
Array.prototype.splice()
Array.prototype.indexOf()
Array.prototype.join()
*/


function convertToRoman(num) {
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
    roman   = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  var result = "";
  
  for (var i = 0; i < numbers.length; i++) {
    while (numbers[i] <= num) {
      result += roman[i];
      num -= numbers[i];
    }
  }
 return result;
}

convertToRoman(36);
