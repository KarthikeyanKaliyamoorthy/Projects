import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";
import { Shape } from "./Shape";

let myShape = new Shape(5, 10);
let myCircle= new Circle(5, 10, 25);
let myRectangle= new Rectangle(5, 10, 10,20);

//Create Array

let shapesArray:Shape [] =[];

shapesArray.push(myShape);
shapesArray.push(myCircle);
shapesArray.push(myRectangle);

//print array

for (const shape of shapesArray) {
    console.log(shape.getInfo());
}