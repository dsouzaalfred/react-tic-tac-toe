import React from 'react';

import {Cell} from './Cell';

import PropTypes from 'prop-types';

import styles from './grid.module.css';

export const Grid = ({handleCellClick, gameState, isWon}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    const id = e.target.id;
    const value = e.target.innerHTML;
    if (!isWon && !value) {
      handleCellClick(id);
    }
  };
  return (
    <div onClick={handleOnClick}>
      <div className={styles.row}>
        <Cell
          id="c1"
          value={gameState.c1.value}
          isWinningCell={gameState.c1.inWinningCombo}
        />
        <Cell
          id="c2"
          value={gameState.c2.value}
          isWinningCell={gameState.c2.inWinningCombo}
        />
        <Cell
          id="c3"
          value={gameState.c3.value}
          isWinningCell={gameState.c3.inWinningCombo}
        />
      </div>
      <div className={styles.row}>
        <Cell
          id="c4"
          value={gameState.c4.value}
          isWinningCell={gameState.c4.inWinningCombo}
        />
        <Cell
          id="c5"
          value={gameState.c5.value}
          isWinningCell={gameState.c5.inWinningCombo}
        />
        <Cell
          id="c6"
          value={gameState.c6.value}
          isWinningCell={gameState.c6.inWinningCombo}
        />
      </div>
      <div className={styles.row}>
        <Cell
          id="c7"
          value={gameState.c7.value}
          isWinningCell={gameState.c7.inWinningCombo}
        />
        <Cell
          id="c8"
          value={gameState.c8.value}
          isWinningCell={gameState.c8.inWinningCombo}
        />
        <Cell
          id="c9"
          value={gameState.c9.value}
          isWinningCell={gameState.c9.inWinningCombo}
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
