import styles from "./header.module.css";

export const Header = ({isWon, isDraw, nowPlaying, reset}) => {
  return (
    <div className={styles.header}>
      {!isWon && !isDraw && <p>Now playing: {nowPlaying}</p>}
      {isWon && <p>Winner: {nowPlaying}</p>}
      {isDraw && <p>It's a draw</p>}
      <button className={styles.button} onClick={reset}>Reset</button>
    </div>
  );
};
