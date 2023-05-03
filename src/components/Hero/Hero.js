import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../actions/Actions';
import logger from '../../logger';
import './Hero.css';

const Hero = ({ heroImageUrl }) => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
    try {
      dispatch(setSearchTerm(inputValue));
    } catch (error) {
      logger.log(`Error while dispatching search term "${inputValue}": ${error}`);
    }
  };

  const backgroundImage = heroImageUrl || process.env.REACT_APP_HERO_IMAGE_URL;

  return (
    <section className="hero" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-text-container">
        <div className="search-container">
          <form className="myform" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for articles..."
              value={inputValue}
              onChange={(e) => {
                try {
                  setInputValue(e.target.value);
                } catch (error) {
                  logger.log(`Error while updating search input value: ${error}`);
                }
              }}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  heroImageUrl: PropTypes.string,
};

export default Hero;
