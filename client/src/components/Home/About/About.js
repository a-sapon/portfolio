import React from 'react';
import styles from './About.module.css';
import '../../App.css';

export const About = () => (
  <section className={`container ${styles.abtSection}`}>
    <h2 className={styles.abtTitle}>About me</h2>
    <p className={styles.abtText}>
      My name is Anna Sapon. I have previously worked as a technical customer
      support representative in several companies, where I helped customers from
      different countries (mostly the US) to address their concerns. Therefore,
      I've improved my English level to advanced. Currently, I'm building my career as
      a Front-End/React Developer. I'm experienced with all stages of the
      development cycle for dynamic web projects and well-versed in numerous
      technologies:
    </p>
    <ul className={styles.skillsList}>
      <li className={styles.skillsListItem}>JavaScript</li>
      <li className={styles.skillsListItem}>React.js</li>
      <li className={styles.skillsListItem}>Redux.js</li>
      <li className={styles.skillsListItem}>Git</li>
      <li className={styles.skillsListItem}>Node.js</li>
      <li className={styles.skillsListItem}>Express</li>
      <li className={styles.skillsListItem}>MongoDB</li>
      <li className={styles.skillsListItem}>CSS3</li>
      <li className={styles.skillsListItem}>SCSS</li>
      <li className={styles.skillsListItem}>HTML5</li>
      <li className={styles.skillsListItem}>material-ui</li>
      <li className={styles.skillsListItem}>BEM</li>
      <li className={styles.skillsListItem}>MaterializeCSS</li>
      <li className={styles.skillsListItem}>AJAX</li>
      <li className={styles.skillsListItem}>Bootstrap 4</li>
      <li className={styles.skillsListItem}>ES5/ES6+</li>
      <li className={styles.skillsListItem}>DOM/BOM</li>
      <li className={styles.skillsListItem}>Webpack</li>
      <li className={styles.skillsListItem}>Photoshop</li>
    </ul>

    <p className={styles.cvText}>
      Feel free to download my CV from <a href='/resume'>here</a>
    </p>
  </section>
);