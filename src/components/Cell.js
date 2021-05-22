import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './cell.module.css';

export const Cell = ({id, value, isWinningCell, isWon, handleCellClick}) => {
  const handleOnClick = (e) => {
    e.preventDefault();
    if (!isWon && value === null) {
      handleCellClick(id);
    }
  };

  return (
    <div
      id={id}
      className={cn(styles.cell, {[styles.winner]: isWinningCell})}
      onClick={handleOnClick}
    >
      {value === null ? '' : value}
    </div>
  );
};

Cell.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  isWinningCell: PropTypes.bool,
  isWon: PropTypes.bool,
  handleCellClick: PropTypes.func,
};
