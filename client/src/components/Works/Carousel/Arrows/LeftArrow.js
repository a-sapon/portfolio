import React from 'react';
import styles from './Arrows.module.css';

export const LeftArrow = () => (
  <svg viewBox='0 0 24 24' className={styles.leftArrow} data-icon='leftIcon'>
    <path
      data-icon='leftIcon'
      d='M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 12l2-4-11 4 11 4-2-4z'
    />
  </svg>
);