import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ScreenContext } from '../App';
import { Burger } from './Burger/Burger';
import styles from './Navbar.module.css';
import '../App.css';

class Navbar extends Component {
  state = {
    bg: 'navWrapperTop',
    opened: false,
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }

  handleScroll() {
    if (window.pageYOffset > 0) {
      this.setState({
        bg: 'navWrapper',
      });
    } else {
      this.setState({
        bg: 'navWrapperTop',
      });
    }
  }

  handleClick = (e) => {
    if (e.target.dataset.icon === 'burgerIcon') {
      this.setState({
        opened: true,
      });
    }
    if (e.target.dataset.icon === 'closeIcon' || e.target.nodeName === 'A') {
      this.setState({
        opened: false,
      });
    }
  };

  render() {
    const { bg, opened } = this.state;
    return (
      <ScreenContext.Consumer>
        {(isMobile) => (
          <div className={styles[`${bg}`]}>
            <nav
              className={`container ${styles.navbar}`}
              onClick={this.handleClick}
            >
              <Link to='/' className={styles.logo}>
                Anna Sapon
              </Link>
              {isMobile ? (
                <Burger opened={opened} />
              ) : (
                <ul className={styles.navList}>
                  <li>
                    <NavLink
                      exact
                      to='/'
                      className={styles.navListItem}
                      activeClassName={styles.navListItemActive}
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/works'
                      className={styles.navListItem}
                      activeClassName={styles.navListItemActive}
                    >
                      Projects
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/about'
                      className={styles.navListItem}
                      activeClassName={styles.navListItemActive}
                    >
                      About
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to='/contact'
                      className={styles.navListItem}
                      activeClassName={styles.navListItemActive}
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        )}
      </ScreenContext.Consumer>
    );
  }
}

export default Navbar;