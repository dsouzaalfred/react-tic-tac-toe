import React from 'react';

import cn from 'classnames';
import PropTypes from 'prop-types';

import styles from './cell.module.css';

export const Cell = ({id, value, isWinningCell}) => {
  return (
    <div id={id} className={cn(styles.cell, {[styles.winner]: isWinningCell})}>
      {value === null ? '' : value}
    </div>
  );
};

Cell.propTypes = {
  id: PropTypes.string,
  value: PropTypes.string,
  isWinningCell: PropTypes.bool,
};
