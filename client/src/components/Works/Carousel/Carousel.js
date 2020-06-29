import React, { useEffect, useContext } from 'react';
import { LeftArrow } from './Arrows/LeftArrow';
import { RightArrow } from './Arrows/RightArrow';
import { WorksContext } from '../Works';
import styles from './Carousel.module.css';
import '../../App.css';

export const Carousel = () => {
  const { clickedProject, handleCarouselClick, handleKeyPress } = useContext(
    WorksContext
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  });

  return (
    <div onClick={handleCarouselClick} className={styles.slideContainer}>
      {clickedProject !== null && (
        <div className={styles.slide}>
          <h1 className={styles.slideTitle}>{clickedProject.title}</h1>
          <p className={styles.slideDescription}>
            {clickedProject.description}
          </p>
          <ul className={styles.slideTools}>
            Tools used:
            {clickedProject.tools.map((tool, idx) => (
              <li key={idx}>{tool}</li>
            ))}
          </ul>
          <div className={styles.slideImg}>
            <img src={clickedProject.imageUrl} alt=''></img>
          </div>
          <a
            href={clickedProject.webUrl}
            target='_blank'
            rel='noopener noreferrer'
            className={styles.slideLink}
          >
            Go To Website
          </a>
          <svg
            viewBox='0 0 329.26933 329'
            className={styles.closeIcon}
            data-icon='closeIcon'
          >
            <path
              data-icon='closeIcon'
              d='m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0'
            />
          </svg>
          <LeftArrow />
          <RightArrow />
        </div>
      )}
    </div>
  );
};