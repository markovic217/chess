import React, { FC, useEffect } from "react";
import { TableColor } from "../../assets/classes/ColorEnum";
import styles from "./ChessSquareComponent.module.scss";
import { Square } from "./../../assets/classes/Square";
import { Figure } from "../../assets/classes/Figures/Figure";

interface ChessSquareComponentProps {
  squareColor: TableColor;
  figure: string | undefined;
  squareCoordinates: Square;
  possibleMove: boolean;
  addPossibleMove: (i: number, j: number) => void;
  moveFigure: (i: number, j:number) => void;
}
function drag(event: any) {
  event.dataTransfer.setData("text", event.target.id);
}
function drop(event: any) {
  event.preventDefault();
  var data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
}
function allowDrop(event: any) {
  event.preventDefault();
}

const ChessSquareComponent: FC<ChessSquareComponentProps> = (props) => {
  const {
    squareColor,
    figure,
    squareCoordinates,
    possibleMove,
    addPossibleMove,
    moveFigure,
  } = props;

  var image;
  if (figure !== undefined)
    image = (
      <img
        className={styles.Image}
        src={figure}
        draggable="true"
        alt=""
        id={(squareCoordinates.I * 8 + squareCoordinates.J).toString()}
        onDragStart={(e) => {
          drag(e);
          addPossibleMove(squareCoordinates.I, squareCoordinates.J);
        }}
      />
    );
  else image = null;

  return (
    <td
      className={styles.ChessSquareComponent}
      style={{
        backgroundColor:
          possibleMove === true
            ? "green"
            : squareColor === TableColor.Light
            ? "orange"
            : "brown",
      }}
      onDrop={(e) => {
        if (possibleMove) {
          //drop(e);
          moveFigure(squareCoordinates.I, squareCoordinates.J);
        }
      }}
      onDragOver={(e) => {
        if (possibleMove) allowDrop(e);
      }}
    >
      {image}
    </td>
  );
};

export default ChessSquareComponent;
