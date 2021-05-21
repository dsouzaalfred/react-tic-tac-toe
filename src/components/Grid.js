import { Cell } from "./Cell";

import styles from "./grid.module.css";

export const Grid = ({ handleClick, gameState, winningCells, isWon }) => {
  return (
    <div onClick={handleClick}>
      <div className={styles.row}>
        <Cell id="c1" value={gameState.c1} isWinningCell={ isWon && winningCells.includes('c1')} />
        <Cell id="c2" value={gameState.c2} isWinningCell={ isWon && winningCells.includes('c2')} />
        <Cell id="c3" value={gameState.c3} isWinningCell={ isWon && winningCells.includes('c3')} />
      </div>
      <div className={styles.row}>
        <Cell id="c4" value={gameState.c4} isWinningCell={ isWon && winningCells.includes('c4')} />
        <Cell id="c5" value={gameState.c5} isWinningCell={ isWon && winningCells.includes('c5')} />
        <Cell id="c6" value={gameState.c6} isWinningCell={ isWon && winningCells.includes('c6')} />
      </div>
      <div className={styles.row}>
        <Cell id="c7" value={gameState.c7} isWinningCell={ isWon && winningCells.includes('c7')} />
        <Cell id="c8" value={gameState.c8} isWinningCell={ isWon && winningCells.includes('c8')} />
        <Cell id="c9" value={gameState.c9} isWinningCell={ isWon && winningCells.includes('c9')} />
      </div>
    </div>
  );
};
