import React from 'react';
import logger from '../../logger';
import './Footer.css';

const Footer = () => {
  logger.log('Footer component loaded.');

  return (
    <footer>
      <div className="container">
        <p className="footer-text">&copy; GPTonfire 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
