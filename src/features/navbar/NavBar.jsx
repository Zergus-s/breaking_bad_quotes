import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.module.scss';

export default function NavBar() {
  return (
    <header className={styles.navbarContainer}>
      <nav>
        <ul>
          <div className={styles.banner}>BREAKING BAD QUOTES</div>
          <li>
            <NavLink activeClassName={styles.active} to="/characters">
              CHARACTERS
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={styles.active} to="/favorites">
              FAVORITES
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
