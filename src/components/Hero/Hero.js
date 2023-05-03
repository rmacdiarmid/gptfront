import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../actions/Actions';
import logger from '../../logger';
import './Hero.css';

const Hero = ({ imageUrl }) => {
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

  return (
    <section className="hero" style={{ backgroundImage: `url(${imageUrl})` }}>
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
  imageUrl: PropTypes.string.isRequired,
};

export default Hero;
