import { Shape } from "./Shape";

export class Rectangle extends Shape{
    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(value: number) {
        this._lenght = value;
    }
    public get width(): number {
        return this._width;
    }
    public set width(value: number) {
        this._width = value;
    }

    constructor(thisX:number,thisY:number, private _width: number, private _lenght: number) {
        super(thisX,thisY);
    }

    getInfo(): string {
        return super.getInfo()+`width =${this._width} length=${this._lenght}`;
    }

}