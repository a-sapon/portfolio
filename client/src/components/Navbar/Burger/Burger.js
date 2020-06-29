import React from 'react';
import { Navmodal } from './Navmodal';
import { CSSTransition } from 'react-transition-group';
import styles from './Burger.module.css';
import animations from '../../animations.module.css';

export const Burger = ({ opened }) => (
  <>
    {!opened ? (
      <div className={styles.iconWrapper} data-icon='burgerIcon'>
        <svg
          viewBox='0 0 384.97 384.97'
          className={styles.burgerIcon}
          data-icon='burgerIcon'
        >
          <g>
            <g id='Menu_1_'>
              <path
                data-icon='burgerIcon'
                d='M12.03,120.303h360.909c6.641,0,12.03-5.39,12.03-12.03c0-6.641-5.39-12.03-12.03-12.03H12.03    c-6.641,0-12.03,5.39-12.03,12.03C0,114.913,5.39,120.303,12.03,120.303z'
              />
              <path
                data-icon='burgerIcon'
                d='M372.939,180.455H12.03c-6.641,0-12.03,5.39-12.03,12.03s5.39,12.03,12.03,12.03h360.909c6.641,0,12.03-5.39,12.03-12.03    S379.58,180.455,372.939,180.455z'
              />
              <path
                data-icon='burgerIcon'
                d='M372.939,264.667H132.333c-6.641,0-12.03,5.39-12.03,12.03c0,6.641,5.39,12.03,12.03,12.03h240.606    c6.641,0,12.03-5.39,12.03-12.03C384.97,270.056,379.58,264.667,372.939,264.667z'
              />
            </g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
            <g></g>
          </g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
          <g></g>
        </svg>
      </div>
    ) : (
      <div className={styles.iconWrapper} data-icon='closeIcon'>
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
      </div>
    )}
    <CSSTransition
      in={opened}
      timeout={300}
      classNames={animations}
      unmountOnExit
    >
      <Navmodal />
    </CSSTransition>
  </>
);