import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavLink } from '../../actions/Actions';
import classes from './Header.module.css';

const Header = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const activeNavLink = useSelector((state) => state.activeNavLink);
  const handleNavLinkClick = (navLink) => {
    dispatch(setActiveNavLink(navLink));
  };

  return (
    <header className={classes.header} role="banner">
      <div className={classes.logoContainer}>
        <button
          className={classes.logoButton}
          onClick={() => setDropdownVisible(!dropdownVisible)}
        >
          <img
            className={classes.logo}
            src={process.env.REACT_APP_LOGO_URL}
            alt="GPTonFire"
          />
        </button>
      </div>
      <div className={classes.headerContent}>{/* ... other elements */}</div>
      <ul className={`${classes.dropdownMenu} ${dropdownVisible ? classes.show : ''}`}>
        <li
          className={
            activeNavLink === 'about' ? classes.active : ''
          }
          onClick={() => handleNavLinkClick('about')}
        >
          <a href="/about">About</a>
        </li>
        <li
          className={
            activeNavLink === 'contact' ? classes.active : ''
          }
          onClick={() => handleNavLinkClick('contact')}
        >
          <a href="/contact">Contact</a>
        </li>
        <li
          className={
            activeNavLink === 'task list' ? classes.active : ''
          }
          onClick={() => handleNavLinkClick('task list')}
        >
          <a href="/task_lists">Task List</a>
        </li>
        <li
          className={
            activeNavLink === 'article generator' ? classes.active : ''
          }
          onClick={() => handleNavLinkClick('article generator')}
        >
          <a href="/article_generator">Article Generator</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
