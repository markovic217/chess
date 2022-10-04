import React, { FC, useEffect, useState } from "react";
import { Color, TableColor } from "../../assets/classes/ColorEnum";
import { Bishop } from "../../assets/classes/Figures/Bishop";
import { Figure } from "../../assets/classes/Figures/Figure";
import { King } from "../../assets/classes/Figures/King";
import { Knight } from "../../assets/classes/Figures/Knight";
import { Pawn } from "../../assets/classes/Figures/Pawn";
import { Queen } from "../../assets/classes/Figures/Queen";
import { Rook } from "../../assets/classes/Figures/Rook";
import { Square } from "../../assets/classes/Square";
import ChessSquareComponent from "../ChessSquareComponent/ChessSquareComponent";
import styles from "./ChessTableComponent.module.scss";

interface ChessTableComponentProps {}

const ChessTableComponent: FC<ChessTableComponentProps> = () => {
  const [figureTable, setFigureTable] = useState<(Figure | null)[][]>([
    [
      new Rook(Color.Black, require("../../assets/images/BRook.png"), new Square(0, 0)),
      new Knight(Color.Black, require("../../assets/images/BKnight.png"), new Square(0, 1)),
      new Bishop(Color.Black, require("../../assets/images/BBishop.png"), new Square(0, 2)),
      new Queen(Color.Black, require("../../assets/images/BQueen.png"), new Square(0, 3)),
      new King(Color.Black, require("../../assets/images/BKing.png"), new Square(0, 4)),
      new Bishop(Color.Black, require("../../assets/images/BBishop.png"), new Square(0, 5)),
      new Knight(Color.Black, require("../../assets/images/BKnight.png"), new Square(0, 6)),
      new Rook(Color.Black, require("../../assets/images/BRook.png"), new Square(0, 7)),
    ],
    [
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 0)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 1)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 2)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 3)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 4)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 5)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 6)),
      new Pawn(Color.Black, require("../../assets/images/BPawn.png"), new Square(1, 7)),
    ],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 0)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 1)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 2)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 3)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 4)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 5)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 6)),
      new Pawn(Color.White, require("../../assets/images/WPawn.png"), new Square(6, 7)),
    ],
    [
      new Rook(Color.White, require("../../assets/images/WRook.png"), new Square(7, 0)),
      new Knight(Color.White, require("../../assets/images/WKnight.png"), new Square(7, 1)),
      new Bishop(Color.White, require("../../assets/images/WBishop.png"), new Square(7, 2)),
      new Queen(Color.White, require("../../assets/images/WQueen.png"), new Square(7, 3)),
      new King(Color.White, require("../../assets/images/WKing.png"), new Square(7, 4)),
      new Bishop(Color.White, require("../../assets/images/WBishop.png"), new Square(7, 5)),
      new Knight(Color.White, require("../../assets/images/WKnight.png"), new Square(7, 6)),
      new Rook(Color.White, require("../../assets/images/WRook.png"), new Square(7, 7)),
    ],
  ]);
  var initPossibleMoves = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
  ];
  const [possibleMoves, setPossibleMoves] = useState(initPossibleMoves);
  const [currentFigure, setCurrentFigure] = useState<Figure | null>(null);
  const clearPossibleMove = () => {
    setPossibleMoves(initPossibleMoves);
  }
  const addPossibleMove = (i: number, j: number) => {
    setCurrentFigure(figureTable[i][j]);
    figureTable[i][j]!.AddPossibleMoves(figureTable);
    figureTable[i][j]!.PossibleMoves.forEach((square) => {
      possibleMoves[square.I][square.J] = true;
    });
    console.log(possibleMoves)
    setPossibleMoves([...possibleMoves])
  };
  const moveFigure = (i: number, j:number)=>{
    figureTable[currentFigure!.Square!.I][currentFigure!.Square!.J] = null;
    console.log(currentFigure?.Square)
    figureTable[i][j] = currentFigure;
    currentFigure?.Move(new Square(i, j));
    currentFigure?.ClearPossibleMoves();
    setFigureTable(figureTable);
    console.log(figureTable)
    setCurrentFigure(null);
    clearPossibleMove();

  }
  var chessTable: any[][] = [[], [], [], [], [], [], [], []];
  var color;
  for (let i = 0; i < 8; i++)
    for (let j = 0; j < 8; j++) {
      if ((i + j) % 2 === 0) color = TableColor.Light;
      else color = TableColor.Dark;
      chessTable[i].push(
        <ChessSquareComponent
          key={i * 8 + j}
          squareColor={color}
          figure={figureTable[i][j]?.Image}
          squareCoordinates={new Square(i, j)}
          possibleMove={possibleMoves[i][j]}
          addPossibleMove={addPossibleMove}
          moveFigure = {moveFigure}
        />
      );
    }
  useEffect(() => {
    console.log("chestable has benn");
  });
  return (
      <table className={styles.ChessTableComponent}  onDragEnd={() => clearPossibleMove()}>
        <tbody>
          <tr>{chessTable[0]}</tr>
          <tr>{chessTable[1]}</tr>
          <tr>{chessTable[2]}</tr>
          <tr>{chessTable[3]}</tr>
          <tr>{chessTable[4]}</tr>
          <tr>{chessTable[5]}</tr>
          <tr>{chessTable[6]}</tr>
          <tr>{chessTable[7]}</tr>
        </tbody>
      </table>
  );
};

export default ChessTableComponent;
