import { Square } from "../Square";
import { Color } from "../ColorEnum";
export abstract class Figure {
  private image!: string;
  protected square?: Square;
  protected color!: Color;
  protected possibleMoves: Square[] = [];
  get PossibleMoves(): Square[] {
    return this.possibleMoves;
  }
  get Square(): Square | undefined {
    return this.square;
  }
  set Square(value: Square | undefined) {
    this.square = value;
  }
  get Color(): Color {
    return this!.color;
  }
  get Image(): string {
    return this.image;
  }
  public Move(square: Square) {
    this.square = square;
  }
  constructor(color: Color, image: string, square: Square) {
    this.square = square;
    this.color = color;
    this.image = image;
  }

  public abstract AddPossibleMoves(
    chessTable: (Figure | null)[][],
  ): void;
  public ClearPossibleMoves() {
    this.possibleMoves = [];
  }
}
