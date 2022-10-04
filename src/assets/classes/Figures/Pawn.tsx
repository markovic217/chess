import { Color } from "../ColorEnum";
import { Square } from "../Square";
import { Figure } from "./Figure";
export class Pawn extends Figure {
  private isMoved: boolean = false;
  public AddPossibleMoves(chessTable: Figure[][]): void {
    var j = this.Square!.J;
    var i = this.Square!.I;
    if (this.color === Color.White) {
      if (!this.isMoved) {
        if (chessTable[i - 1][j] === null && i >= 0)
          this.possibleMoves.push(new Square(i - 1, j));
        if (chessTable[i - 2][j] === null && i >= 0)
          this.possibleMoves.push(new Square(i - 2, j));
      } else {
        if (chessTable[i - 1][j] === null && i >= 0)
          this.possibleMoves.push(new Square(i - 1, j));
      }
      if (
        j >= 0 &&
        i >= 0 &&
        chessTable[i - 1][j - 1]?.Color === Color.Black
      )
        this.possibleMoves.push(new Square(i - 1, j - 1));
      if (
        j <= 7 &&
        i >= 0 &&
        chessTable[i - 1][j + 1]?.Color === Color.Black
      )
        this.possibleMoves.push(new Square(i - 1, j + 1));
    }
    if (this.color === Color.Black) {
      if (!this.isMoved) {
        if (chessTable[i + 1][j] === null && i >= 0)
          this.possibleMoves.push(new Square(i + 1, j));
        if (chessTable[i + 2][j] === null && i >= 0)
          this.possibleMoves.push(new Square(i + 2, j));
      } else {
        if (chessTable[i + 1][j] === null && i >= 0)
          this.possibleMoves.push(new Square(i + 1, j));
      }
      if (j >= 0 && i <= 7 && chessTable[i + 1][j - 1]?.Color === Color.White)
        this.possibleMoves.push(new Square(i + 1, j - 1));
      if (j <= 7 && i <= 7 && chessTable[i + 1][j + 1]?.Color === Color.White)
        this.possibleMoves.push(new Square(i + 1, j + 1));
    }
  }
  public Move(square: Square) {
    super.Move(square);
    this.isMoved = true;
  }
}
