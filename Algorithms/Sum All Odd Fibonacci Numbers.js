/*Sum All Odd Fibonacci Numbers

Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.

Here are some helpful links:

Remainder
*/

function sumFibs(num) {
  var a=0,
      b=1,
      fibonacci =1,
      sum = 1;

  while (a+b <= num) {
     fibonacci = a+b;
     a = b;
     b = fibonacci;
   
    if(fibonacci%2 !==0) {  
      sum = sum+fibonacci;
  }
  }
  return sum;

}
sumFibs(4);