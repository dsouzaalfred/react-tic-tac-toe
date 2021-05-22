import React from 'react';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      By{' '}
      <a
        className={styles.link}
        href="https://dsouzaalf.red/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Alfred DSouza
      </a>
    </div>
  );
};
