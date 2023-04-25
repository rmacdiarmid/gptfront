import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavLink } from '../../actions/Actions';
import './Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const activeNavLink = useSelector((state) => state.activeNavLink);

  const handleNavLinkClick = (navLink) => {
    dispatch(setActiveNavLink(navLink));
  };

  return (
    <header role="banner">
      {/* ... other elements */}
      <ul className="navbar">
        <li
          className={activeNavLink === 'home' ? 'active' : ''}
          onClick={() => handleNavLinkClick('home')}
        >
          <a href="/">Home</a>
        </li>
        <li
          className={activeNavLink === 'about' ? 'active' : ''}
          onClick={() => handleNavLinkClick('about')}
        >
          <a href="/about">About</a>
        </li>
        <li
          className={activeNavLink === 'contact' ? 'active' : ''}
          onClick={() => handleNavLinkClick('contact')}
        >
          <a href="/contact">Contact</a>
        </li>
        <li
          className={activeNavLink === 'task list' ? 'active' : ''}
          onClick={() => handleNavLinkClick('task list')}
        >
          <a href="/task_lists">Task List</a>
        </li>
        <li
          className={activeNavLink === 'article generator' ? 'active' : ''}
          onClick={() => handleNavLinkClick('article generator')}
        >
          <a href="/article_generator">Article Generator</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
