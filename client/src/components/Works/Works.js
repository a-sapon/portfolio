import React, { useState, useEffect, useContext, createContext } from 'react';
import axios from 'axios';
import styles from './Works.module.css';
import { MoreBtn } from './MoreBtn/MoreBtn';
import '../App.css';
import { Carousel } from './Carousel/Carousel';
import { ScreenContext } from '../App';
import Spinner from '../Spinner/Spinner';
import { CSSTransition } from 'react-transition-group';
import animations from './carouselAnimation.module.css';
export const WorksContext = createContext();

export const Works = () => {
  const [projects, setProjects] = useState([]);
  const [clickedProject, setClickedProject] = useState(null);
  const isMobile = useContext(ScreenContext);

  useEffect(() => {
    (async () => {
      const response = await axios.get('/projects');
      setProjects(response.data);
    })();
  }, []);

  async function getClickedProject(id) {
    const response = await axios.get(`/projects/${id}`);
    setClickedProject(response.data);
  }

  async function handleClick(e) {
    if (
      e.target === e.currentTarget ||
      e.target.dataset.open === 'openCarousel'
    ) {
      await getClickedProject(e.currentTarget.dataset.id);
    }
  }

  async function handleCarouselClick(e) {
    e.persist();
    if (e.target.dataset.icon === 'closeIcon' || e.target === e.currentTarget) {
      setClickedProject(null);
    }
    if (e.target.dataset.icon === 'leftIcon') {
      const prevId = clickedProject.id - 1;
      if (prevId < 0) {
        await getClickedProject(projects.length - 1);
      } else {
        await getClickedProject(prevId);
      }
    }
    if (e.target.dataset.icon === 'rightIcon') {
      const nextId = clickedProject.id + 1;
      if (nextId > projects.length - 1) {
        await getClickedProject(0);
      } else {
        await getClickedProject(nextId);
      }
    }
  }

  async function handleKeyPress(e) {
    if (e.code === 'Escape') {
      setClickedProject(null);
    }
    if (e.code === 'ArrowLeft') {
      const prevId = clickedProject.id - 1;
      if (prevId < 0) {
        await getClickedProject(projects.length - 1);
      } else {
        await getClickedProject(prevId);
      }
    }
    if (e.code === 'ArrowRight') {
      const nextId = clickedProject.id + 1;
      if (nextId > projects.length - 1) {
        await getClickedProject(0);
      } else {
        await getClickedProject(nextId);
      }
    }
  }

  return (
    <WorksContext.Provider
      value={{ clickedProject, handleCarouselClick, handleKeyPress }}
    >
      <ul className={`container ${styles.projectList}`}>
        {projects.length === 0 ? (
          <Spinner />
        ) : (
          projects.map(({ id, imageUrl, title, description }) => (
            <li
              key={id}
              data-id={id}
              onClick={handleClick}
              className={styles.projectListItem}
            >
              <img src={imageUrl} className={styles.projectImg} alt=''></img>
              <div className={styles.projectText} data-open='openCarousel'>
                <h2 className={styles.projectTitle} data-open='openCarousel'>
                  {title}
                </h2>
                <MoreBtn />
              </div>
              {!isMobile && (
                <div className={styles.moreInfo}>
                  <p className={styles.moreInfoText}>{description}</p>
                </div>
              )}
            </li>
          ))
        )}
      </ul>
      <CSSTransition
        in={clickedProject !== null}
        timeout={200}
        classNames={animations}
        unmountOnExit
      >
        <Carousel />
      </CSSTransition>
    </WorksContext.Provider>
  );
};