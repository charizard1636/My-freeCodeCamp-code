/* Build JavaScript Objects

You may have heard the term object before.

Objects are similar to arrays, except that instead of using indexes to access and modify their data, you access the data in objects through what are called properties.

Here's a sample object:

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

Instructions
Make an object that represents a dog called myDog which contains the properties "name" (a string), "legs", "tails" and "friends".

You can set these object properties to whatever values you want, as long "name" is a string, "legs" and "tails" are numbers, and "friends" is an array.
*/

//var ourDog = {
//   "name": "Camper",
//   "legs": 4,
//   "tails": 1,
//   "friends": ["everything!"]
//};

// add the name(string), legs(number), tails(number) and friends(array) properties to myDog.
// You can set them to whatever you want.

// Only change code below this line.

var myDog = {
   "name":"Sparky",
  "legs": 4,
  "tails": 1,
  "friends": ["people", "dogs"]
};

// Only change code above this line.
// We use this function to show you the value of your variable in your output box.
(function(z){return(z);})(myDog);
