/* Pig Latin

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.

Here are some helpful links:

Array.prototype.indexOf()
Array.prototype.push()
Array.prototype.join()
String.prototype.substr()
String.prototype.split()
*/

function translatePigLatin(str) {
 //turn string into array
  str = str.split('');				  
  var vowelMatch = /[aeiou]/;
 
 //If a word begins with a vowel you just add "way" to the end
    return str.join('') + 'way';
  if (vowelMatch.test(str[0])) {			
  }
 
  while (true) {
    if (!vowelMatch.test(str[0])) {
      str.push(str.splice(0, 1));
    } else {
      break;
    }
  }
  
    /* Takes the first consonant moves it to the end of the word and suffixes an "ay"
  return str.join('') + 'ay'; */
  
  return str.join('') + 'ay';
}

translatePigLatin("consonant");
