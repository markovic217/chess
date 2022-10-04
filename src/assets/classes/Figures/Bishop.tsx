import { Square } from "../Square";
import { Figure } from "./Figure";
export class Bishop extends Figure {
  public AddPossibleMoves(
    chessTable: Figure[][],
  ): void {
    var j = this.Square!.J;
    var i = this.Square!.I;
    while (j - 1 >= 0 && i - 1 >= 0) {
      if (chessTable[i - 1][j - 1] === null)
        this.possibleMoves.push(new Square(i - 1, j - 1));
      else {
        if (chessTable[i - 1][j - 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i - 1, j - 1));
        break;
      }
      j--;
      i--;
    }
    j = this.Square!.J;
    i = this.Square!.I;
    while (j + 1 <= 7 && i - 1 >= 0) {
      if (chessTable[i - 1][j + 1] === null)
        this.possibleMoves.push(new Square(i - 1, j + 1));
      else {
        if (chessTable[i - 1][j + 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i - 1, j + 1));
        break;
      }
      j++;
      i--;
    }
    j = this.Square!.J;
    i = this.Square!.I;
    while (j - 1 >= 0 && i + 1 <= 7) {
      if (chessTable[i + 1][j - 1] === null)
        this.possibleMoves.push(new Square(i + 1, j - 1));
      else {
        if (chessTable[i + 1][j - 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i + 1, j - 1));
        break;
      }
      j--;
      i++;
    }
    j = this.Square!.J;
    i = this.Square!.I;
    while (j + 1 <= 7 && i + 1 <= 7) {
      if (chessTable[i + 1][j + 1] === null)
        this.possibleMoves.push(new Square(i + 1, j + 1));
      else {
        if (chessTable[i + 1][j + 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i + 1, j + 1));
        break;
      }
      j++;
      i++;
    }
  }
}
