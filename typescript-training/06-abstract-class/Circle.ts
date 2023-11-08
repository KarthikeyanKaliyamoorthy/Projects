import { Shape } from "./Shape";

export class Circle extends Shape{

    
    public get radius(): number {
        return this._radius;
    }
    public set radius(value: number) {
        this._radius = value;
    }

    constructor(thisX:number, thisY:number, private _radius: number){
        super(thisX, thisY);
    }

    getInfo(): string {
        return super.getInfo()+` radius=${this._radius}`;
    }
    
    calculateArea(): number {
        return Math.PI * Math.pow(this.radius,2);
     }

}