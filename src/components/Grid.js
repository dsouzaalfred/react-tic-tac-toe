import React from 'react';

import {Cell} from './Cell';

import PropTypes from 'prop-types';

import styles from './grid.module.css';

export const Grid = ({handleCellClick, gameState, isWon}) => {
  return (
    <div>
      <div className={styles.row}>
        <Cell
          id="c1"
          value={gameState.c1.value}
          isWinningCell={gameState.c1.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
        <Cell
          id="c2"
          value={gameState.c2.value}
          isWinningCell={gameState.c2.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
        <Cell
          id="c3"
          value={gameState.c3.value}
          isWinningCell={gameState.c3.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
      </div>
      <div className={styles.row}>
        <Cell
          id="c4"
          value={gameState.c4.value}
          isWinningCell={gameState.c4.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
        <Cell
          id="c5"
          value={gameState.c5.value}
          isWinningCell={gameState.c5.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
        <Cell
          id="c6"
          value={gameState.c6.value}
          isWinningCell={gameState.c6.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
      </div>
      <div className={styles.row}>
        <Cell
          id="c7"
          value={gameState.c7.value}
          isWinningCell={gameState.c7.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
        <Cell
          id="c8"
          value={gameState.c8.value}
          isWinningCell={gameState.c8.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
        <Cell
          id="c9"
          value={gameState.c9.value}
          isWinningCell={gameState.c9.inWinningCombo}
          isWon={isWon}
          handleCellClick={handleCellClick}
        />
      </div>
    </div>
  );
};

Grid.propTypes = {
  handleCellClick: PropTypes.func,
  gameState: PropTypes.object,
  isWon: PropTypes.bool,
};
