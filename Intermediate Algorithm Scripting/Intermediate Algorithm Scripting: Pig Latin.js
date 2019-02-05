/* Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase. */

function translatePigLatin(str) {
  var consonant = str.match(/^[a-z]/) && str.match(/[^aeiou]*/).join('');			if (consonant !== '') {
    var newStr = str.replace(consonant, '') + consonant + "ay"; 
    } else {
        newStr = str + "way";
    }
    return newStr;
  } 
  
translatePigLatin("consonant");
