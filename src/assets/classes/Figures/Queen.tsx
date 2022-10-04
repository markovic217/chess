import { Square } from "../Square";
import { Figure } from "./Figure";
export class Queen extends Figure {
  public AddPossibleMoves(chessTable: Figure[][]): void {
    var i = this.Square!.I;
    var j = this.Square!.J;
    while (i - 1 >= 0 && j - 1 >= 0) {
      if (chessTable[i - 1][j - 1] === null)
        this.possibleMoves.push(new Square(i - 1, j - 1));
      else {
        if (chessTable[i - 1][j - 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i - 1, j - 1));
        break;
      }
      i--;
      j--;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (i + 1 <= 7 && j - 1 >= 0) {
      if (chessTable[i + 1][j - 1] === null)
        this.possibleMoves.push(new Square(i + 1, j - 1));
      else {
        if (chessTable[i + 1][j - 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i + 1, j - 1));
        break;
      }
      i++;
      j--;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (i - 1 >= 0 && j + 1 <= 7) {
      if (chessTable[i - 1][j + 1] === null)
        this.possibleMoves.push(new Square(i - 1, j + 1));
      else {
        if (chessTable[i - 1][j + 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i - 1, j + 1));
        break;
      }
      i--;
      j++;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (i + 1 <= 7 && j + 1 <= 7) {
      if (chessTable[i + 1][j + 1] === null)
        this.possibleMoves.push(new Square(i + 1, j + 1));
      else {
        if (chessTable[i + 1][j + 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i + 1, j + 1));
        break;
      }
      i++;
      j++;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (i - 1 >= 0) {
      if (chessTable[i - 1][j] === null)
        this.possibleMoves.push(new Square(i - 1, j));
      else {
        if (chessTable[i - 1][j].Color !== this.Color)
          this.possibleMoves.push(new Square(i - 1, j));
        break;
      }
      i--;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (i + 1 <= 7) {
      if (chessTable[i + 1][j] === null)
        this.possibleMoves.push(new Square(i + 1, j));
      else {
        if (chessTable[i + 1][j].Color !== this.Color)
          this.possibleMoves.push(new Square(i + 1, j));
        break;
      }
      i++;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (j - 1 >= 0) {
      if (chessTable[i][j - 1] === null)
        this.possibleMoves.push(new Square(i, j - 1));
      else {
        if (chessTable[i][j - 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i, j - 1));
        break;
      }
      j--;
    }
    i = this.Square!.I;
    j = this.Square!.J;
    while (j + 1 <= 7) {
      if (chessTable[i][j + 1] === null)
        this.possibleMoves.push(new Square(i, j + 1));
      else {
        if (chessTable[i][j + 1].Color !== this.Color)
          this.possibleMoves.push(new Square(i, j + 1));
        break;
      }
      j++;
    }
  }
}
