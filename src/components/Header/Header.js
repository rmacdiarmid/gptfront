import React from 'react';
import './Header.css';

const Header = () => {
  return (
  <header role="banner">
      <div>
        <nav className="container">
          <div className="logo-container">
            <img src="/static/images/logo.png" alt="Logo" className="logo" />
          </div>
          <ul className="navbar">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/task_list">Task List</a></li>
            <li><a href="/article-generator">Article Generator</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
