import { Square } from "../Square";
import { Figure } from "./Figure";
export class King extends Figure {
  public AddPossibleMoves(chessTable: Figure[][]): void {
    var i = this.Square!.I;
    var j = this.Square!.J;
    if (i - 1 >= 0) {
      if (j - 1 >= 0 && chessTable[i - 1][j - 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i - 1, j - 1));
      if (chessTable[i - 1][j]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i - 1, j));
      if (j + 1 <= 7 && chessTable[i - 1][j + 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i - 1, j + 1));
    }
    if (j - 1 >= 0 && chessTable[i][j - 1]?.Color !== this.Color)
      this.possibleMoves.push(new Square(i, j - 1));
    if (j + 1 <= 7 && chessTable[i][j + 1]?.Color !== this.Color)
      this.possibleMoves.push(new Square(i, j + 1));
    if (i + 1 <= 7) {
      if (j - 1 >= 0 && chessTable[i + 1][j - 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i + 1, j - 1));
      if (chessTable[i + 1][j]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i + 1, j));
      if (j + 1 <= 7 && chessTable[i + 1][j + 1]?.Color !== this.Color)
        this.possibleMoves.push(new Square(i + 1, j + 1));
    }
  }
}
