/* Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

Here are some helpful links:

    String.prototype.split()

    String.length
*/

function findLongestWord(str) {
      if (typeof str !== "string") return "Argument not a string";
    var strSplit = str.split(" ");     //split up the string
       // console.log(strSplit);       //into an array of words

    for (var i in strSplit){     //strip out non-alphanumeric characters
        strSplit[i] = strSplit[i].replace(/\W/g, '');
     //   console.log(strSplit[i]);
    }

    var wordSplit = new Array();
    for (var j in strSplit){     //split up the strings into character arrays
        wordSplit[j] = strSplit[j].split("");
    //    console.log(wordSplit[j]);
    }

    var longest = 0;
    var longWord = "";
    for (var k in strSplit){     //compare length of character arrays
        if (wordSplit[k].length > longest){
            longest = wordSplit[k].length;
            longWord = wordSplit[k];

        }
    }
    str = longWord.join("");
  return str.length;  
}

findLongestWord('The quick brown fox jumped over the lazy dog');
