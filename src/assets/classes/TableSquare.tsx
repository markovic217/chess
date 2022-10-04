import { TableColor } from "./ColorEnum";
import { Figure } from "./Figures/Figure";

export class TableSquare{
    private color!:TableColor;
    private figure!:Figure;
    public constructor(color: TableColor){
        this.color = color;
       // this.figure = figure;
    }
}