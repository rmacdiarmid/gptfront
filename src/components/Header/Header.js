import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveNavLink } from '../../actions/Actions';
import classes from './Header.module.css';
import Form from '../Form/Form'; // Import the Form component
import MyButton from '../Button/Button'; // Import MyButton component

const Header = () => {
  const [loginFormVisible, setLoginFormVisible] = useState(false);
  const [signupFormVisible, setSignupFormVisible] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const dispatch = useDispatch();
  const activeNavLink = useSelector((state) => state.activeNavLink);
  const handleNavLinkClick = (navLink) => {
    if (navLink !== 'login') {
      dispatch(setActiveNavLink(navLink));
    }
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
        {/* ... other list items */}
        <li
          className={
            activeNavLink === 'login' ? classes.active : ''
          }
          onClick={() => handleNavLinkClick('login')}
        >
          <a href="/login">login</a>
        </li>
      </ul>
      <div className={classes.linksContainer}>
          <div className={classes.loginContainer}>
            <a
              href="#"
              className={activeNavLink === 'login' ? classes.active : ''}
              onClick={(e) => {
                e.preventDefault();
                handleNavLinkClick('login');
                setLoginFormVisible(true);
              }}
            >
              Login
            </a>
          </div>
          <div className={classes.signupContainer}>
            <MyButton
              onClick={(e) => { // Pass onClick prop directly
                e.preventDefault(); // Prevent the default behavior
                console.log('Sign Up button clicked');
                setSignupFormVisible(true); // Show the Sign Up overlay
              }}
            >
              Sign Up
            </MyButton>
          </div>
      </div>
        {signupFormVisible && (
        <div
          className={classes.overlay}
          onClick={() => setSignupFormVisible(false)}
        >
          <div
            className={classes.formContainer}
            onClick={(e) => e.stopPropagation()}
          >
          <button
              className={classes.closeButton}
              onClick={() => setSignupFormVisible(false)}
            >
              &times;
            </button>
            <h4 className={classes.formTitle}>
              You’re one click away
              <br />
              from experiencing the FIRE!
            </h4>
            <p className={classes.formSubTitle}>
              By signing up, I agree to the GPTonFire{' '}
              <a href="/terms#privacy-policy" className={classes.link}>
                Privacy Policy
              </a>{' '}
              and{' '}
              <a href="/terms#terms-of-service" className={classes.link}>
                Terms of Service
              </a>
              .
            </p>
            <Form
              fields={[
                {
                  name: 'email',
                  label: 'Email',
                  type: 'email',
                  placeholder: 'name@company.com',
                  required: true,
                },
              ]}
              onSubmit={(values) => {
                console.log('Sign up form submitted with values:', values);
              }}
            />
          </div>
        </div>
      )}
      {loginFormVisible && (
        <div
          className={classes.overlay}
          onClick={() => setLoginFormVisible(false)}
        >
          <div
            className={classes.formContainer}
            onClick={(e) => e.stopPropagation()} // Prevent clicks on the form from closing the overlay
          >
            <button
              className={classes.closeButton}
              onClick={() => setLoginFormVisible(false)}
            >
              &times;
            </button>
            <Form
              title="Login"
              fields={[
                { name: 'email', label: 'Email', type: 'email', required: true },
                {
                  name: 'password',
                  label: 'Password',
                  type: 'password',
                  required: true,
                },
              ]}
              onSubmit={(values) => {
                console.log('Login form submitted with values:', values);
              }}
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
