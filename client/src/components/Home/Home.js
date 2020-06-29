import React from 'react';
import { About } from './About/About';
import styles from './Home.module.css';
import '../App.css';

export const Home = () => (
  <>
    <div className={styles.hdrGradient}>
      <header className={`container ${styles.hdr}`}>
        <h1 className={styles.hdrTitle}>Hello, I'm Anna</h1>
        <div className={styles.hdrText}>A Front-End Developer</div>
      </header>
      <main className={styles.mainSection}>
        <About />
      </main>
    </div>
  </>
);
