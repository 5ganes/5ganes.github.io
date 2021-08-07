const Duck = require('./duck');
let myDuck = new Duck(true, false, 3, 5);

myDuck.takeOff();
myDuck.land();
myDuck.startQuacking();
myDuck.startQuacking();

myDuck.moveTo();
myDuck.moveTo(10, 20);
