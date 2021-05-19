import { Cell } from "./Cell";

import styles from "./grid.module.css";

export const Grid = ({ handleClick }) => {
  return (
    <div onClick={handleClick}>
      <div className={styles.row}>
        <Cell id="c1" />
        <Cell id="c2" />
        <Cell id="c3" />
      </div>
      <div className={styles.row}>
        <Cell id="c4" />
        <Cell id="c5" />
        <Cell id="c6" />
      </div>
      <div className={styles.row}>
        <Cell id="c7" />
        <Cell id="c8" />
        <Cell id="c9" />
      </div>
    </div>
  );
};
