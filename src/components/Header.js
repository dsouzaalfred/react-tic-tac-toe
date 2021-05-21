import styles from "./header.module.css";

export const Header = ({isWon, isDraw, nowPlaying, reset}) => {
  return (
    <div className={styles.header}>
      {!isWon && !isDraw && <p>Now playing: <span className={styles.note}>{nowPlaying}</span></p>}
      {isWon && <p>Winner: <span className={styles.note}>{nowPlaying}</span></p>}
      {isDraw && <p>It's a draw</p>}
      <button className={styles.button} onClick={reset}>Reset</button>
    </div>
  );
};
