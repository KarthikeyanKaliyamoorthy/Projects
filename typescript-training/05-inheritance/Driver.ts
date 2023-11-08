import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(5, 10);
console.log('My shape: '+myShape.getInfo());

let myCircle= new Circle(5, 10, 25);
console.log('My Circle: '+myCircle.getInfo());

let myRectangle= new Rectangle(5, 10, 10,20);
console.log('My Rectangle: '+myRectangle.getInfo())