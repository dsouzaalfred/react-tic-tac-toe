import React from 'react';
import {Header} from './components/Header';
import {Footer} from './components/Footer';
import {Grid} from './components/Grid';

import {useTicTacToe} from './hooks/useTicTacToe';

import styles from './styles.module.css';

export default function App() {
  const {state, nowPlaying, isWon, isDraw, reset, handleCellClick} =
    useTicTacToe();
  return (
    <div className={styles.app}>
      <h1>Tic-Tac-Toe</h1>
      <div className={styles.wrapper}>
        <Header
          isWon={isWon}
          isDraw={isDraw}
          nowPlaying={nowPlaying}
          reset={reset}
        />
        <Grid
          handleCellClick={handleCellClick}
          gameState={state}
          isWon={isWon}
        />
        <Footer />
      </div>
    </div>
  );
}
