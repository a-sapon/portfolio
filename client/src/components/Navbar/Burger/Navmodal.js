import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Burger.module.css';

export const Navmodal = () => (
  <div className={styles.modalWrapper}>
    <ul className={styles.modalList}>
      <li>
        <Link to='/' className={styles.modalListItem}>
          Home
        </Link>
      </li>
      <li>
        <Link to='/works' className={styles.modalListItem}>
          Projects
        </Link>
      </li>
      <li>
        <Link to='/about' className={styles.modalListItem}>
          About
        </Link>
      </li>
      <li>
        <Link to='/contact' className={styles.modalListItem}>
          Contact
        </Link>
      </li>
    </ul>
  </div>
);