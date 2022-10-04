export class Square{
    private i!:number;
    private j!:number;
    get I(): number{
        return this.i;
    }
    set I(value:number){
        if(value >= 0 && value <= 7)
            this.i = value;
    }
    get J(): number{
        return this.j;
    }
    set J(value:number){
        if(value >= 0 && value <= 7)
            this.j = value;
    }
    public constructor(i: number, j: number){
        this.I = i;
        this.J = j;
    }
}