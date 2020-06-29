import React from 'react';
import styles from './Arrows.module.css';

export const RightArrow = () => (
  <svg viewBox='0 0 24 24' className={styles.rightArrow} data-icon='rightIcon'>
    <path
      data-icon='rightIcon'
      d='M22 12c0 5.514-4.486 10-10 10s-10-4.486-10-10 4.486-10 10-10 10 4.486 10 10zm-22 0c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm7 4l11-4-11-4 2 4-2 4z'
    />
  </svg>
);