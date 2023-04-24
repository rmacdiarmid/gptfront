import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../actions/Actions';
import logger from '../../logger';
import './Hero.css';

const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  logger.log('Hero component loaded.');

  const handleSearch = (e) => {
    e.preventDefault();
    logger.log(`Searching for "${inputValue}".`);
    dispatch(setSearchTerm(inputValue));
  };

  return (
    <section className="hero">
      <div className="hero-text-container">
        <div className="search-container">
          <form className="myform" onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search for articles..."
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                logger.log(`Search input value changed to "${e.target.value}".`);
              }}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
