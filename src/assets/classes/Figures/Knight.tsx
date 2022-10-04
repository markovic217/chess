import { Square } from "../Square";
import { Figure } from "./Figure";
export class Knight extends Figure {
  public AddPossibleMoves(chessTable: Figure[][]): void {
    var i = this.Square!.I;
    var j = this.Square!.J;
    if (i - 2 >= 0) {
      if (j - 1 >= 0 && chessTable[i - 2][j - 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i - 2, j - 1));
      if (j + 1 <= 7 && chessTable[i - 2][j + 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i - 2, j + 1));
    }
    if (i - 1 >= 0) {
      if (j - 2 >= 0 && chessTable[i - 1][j - 2]?.Color !== this.Color) {
        console.log(chessTable[i - 1][j - 2]);

        this.possibleMoves.push(new Square(i - 1, j - 2));
      }
      if (j + 2 <= 7 && chessTable[i - 1][j + 2]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i - 1, j + 2));
    }
    if (i + 1 <= 7) {
      if (j - 2 >= 0 && chessTable[i + 1][j - 2]?.Color !== this.Color) {
        this.possibleMoves.push(new Square(i + 1, j - 2));
      }
      if (j + 2 <= 7 && chessTable[i + 1][j + 2]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i + 1, j + 2));
    }
    if (i + 2 <= 7) {
      if (j - 1 >= 0 && chessTable[i + 2][j - 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i + 2, j - 1));
      if (j + 1 <= 7 && chessTable[i + 2][j + 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i + 2, j + 1));
    }
  }
}
