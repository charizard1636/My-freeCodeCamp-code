/* Fix the code so duck.constructor and beagle.constructor return their respective constructors. */

function Animal() { }
function Bird() { }
function Dog() { }

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Add your code below this line

Bird.prototype.constructor = Bird;
duck = new Bird();
duck.constructor = function Bird() {};

Dog.prototype.constructor = Dog;
beagle = new Dog();
beagle.constructor = function Dog() {};

let duck = new Bird();
let beagle = new Dog();
