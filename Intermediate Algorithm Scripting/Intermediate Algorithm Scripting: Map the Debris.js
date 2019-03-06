/* Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2. */

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var newArr = [];
  var a = 2 * Math.PI;   //a is the orbit's semi-major axis
  
  var getorbitalPeriod = function(obj) {
	var c = Math.pow(earthRadius + obj.avgAlt, 3);
	//Math.pow(base, exponent) - c is (earthRadius + avgAlt) to the cube
	var b = Math.sqrt(c / GM); //b is the square root of c divided by GM.
	var orbPeriod = Math.round(a * b);  //store a and b
	delete obj.avgAlt;
	obj.orbitalPeriod = orbPeriod;
	return obj;
};

for(var elem in arr) {
  newArr.push(getorbitalPeriod(arr[elem]));
  }

  return newArr;
}
