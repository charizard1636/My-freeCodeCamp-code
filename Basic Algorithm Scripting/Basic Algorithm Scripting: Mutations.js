/*Mutations

Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".

Here are some helpful links:

    String.prototype.indexOf()
*/

function mutation(arr) {
    arr1= arr[0].toLowerCase();
  arr2 = arr[1].toLowerCase().split("");
     arr = true;

 arr2.forEach(function(letter) {
         if (arr1.indexOf(letter) === -1)  {
          arr = false;  
           
         }
       });
  return arr;
}

mutation(['hello', 'hey']);
