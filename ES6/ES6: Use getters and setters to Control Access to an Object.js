/* Notice the syntax we are using to invoke the getter and setter - as if they are not even functions.

Getters and setters are important, because they hide internal implementation details.


Use class keyword to create a Thermostat class. The constructor accepts Fahrenheit temperature.

Now create getter and setter in the class, to obtain the temperature in Celsius scale.

Remember that C = 5/9 * (F - 32) and F = C * 9.0 / 5 + 32, where F is the value of temperature in Fahrenheit scale, and C is the value of the same temperature in Celsius scale

Note

When you implement this, you would be tracking the temperature inside the class in one scale - either Fahrenheit or Celsius.

This is the power of getter or setter - you are creating an API for another user, who would get the correct result, no matter which one you track.

In other words, you are abstracting implementation details from the consumer. */

function makeClass() {
  "use strict";
  /* Alter code below this line */
class Thermostat {
  constructor(Fahrenheit){
  this._Fahrenheit = Fahrenheit;
}
get F(){
  return this._Fahrenheit;
}
get C(){
  return this.Celsius;
}
set F(F = C * 9.0 / 5 + 32) {
  this._Fahrenheit = (F = C * 9.0 / 5 + 32);
}
set C(C = 5/9 * (F - 32)) {
  this._Celsius = (C = 5/9 * (F - 32));
}
}
  /* Alter code above this line */
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C
