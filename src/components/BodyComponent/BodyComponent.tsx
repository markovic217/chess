import React, { FC } from 'react';
import styles from './BodyComponent.module.scss';
import ChessTableComponent from './../ChessTableComponent/ChessTableComponent';

interface BodyComponentProps {}

const BodyComponent: FC<BodyComponentProps> = () => (
  <div className={styles.BodyComponent}>
    <ChessTableComponent/>
  </div>
);

export default BodyComponent;
