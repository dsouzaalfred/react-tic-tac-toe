import cn from "classnames";

import styles from "./cell.module.css";

export const Cell = ({ id, value, isWinningCell }) => {
  return (
    <div
      id={id}
      className={cn(styles.cell, { [styles.winner]: isWinningCell })}
    >
      {value === null ? "" : value}
    </div>
  );
};
