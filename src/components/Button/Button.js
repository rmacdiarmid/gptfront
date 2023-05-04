import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

function MyButton(props) {
  return (
    <button className={`${styles.button} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
}

MyButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default MyButton;
