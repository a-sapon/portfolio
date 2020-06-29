import React from 'react';
import styles from './About.module.css';
import '../App.css';

export const About = () => (
  <div className={`container ${styles.about}`}>
    <p className={styles.aboutText}>
      The portfolio project was created with React.js, stored on the backend
      that I created using Node.js and Express, and deployed to Heroku. Most
      files are stored on the backend and are being fetched by the frontend part
      when needed.
    </p>
    <div className={styles.technologies}>
      <div className={styles.js}></div>
      <div className={styles.node}></div>
      <div className={styles.react}></div>
      <div className={styles.heroku}></div>
    </div>
    <p className={styles.aboutThanks}>Thank you for your attention!</p>
  </div>
);
