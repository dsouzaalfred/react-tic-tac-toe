import React from 'react';

import PropTypes from 'prop-types';

import styles from './header.module.css';

export const Header = ({isWon, isDraw, nowPlaying, reset}) => {
  return (
    <div className={styles.header}>
      {!isWon && !isDraw && (
        <p>
          Now playing: <span className={styles.note}>{nowPlaying}</span>
        </p>
      )}
      {isWon && (
        <p>
          Winner: <span className={styles.note}>{nowPlaying}</span>
        </p>
      )}
      {isDraw && <p>It&apos;s a draw</p>}
      <button className={styles.button} onClick={reset}>
        Reset
      </button>
    </div>
  );
};

Header.propTypes = {
  isWon: PropTypes.bool,
  isDraw: PropTypes.bool,
  nowPlaying: PropTypes.string,
  reset: PropTypes.func,
};
