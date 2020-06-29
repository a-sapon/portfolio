import React from 'react';
import styles from './MoreBtn.module.css';

export const MoreBtn = () => (
  <div data-open='openCarousel' className={styles.moreBtn}>
    Read More
    <svg viewBox='0 0 24 24' className={styles.arrowIcon}>
      <path d='M22 12l-20 12 5-12-5-12z' />
    </svg>
  </div>
);
