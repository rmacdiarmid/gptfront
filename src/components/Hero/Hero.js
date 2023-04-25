import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../actions/Actions';
import logger from '../../logger';
import './Hero.css';

const Hero = () => {
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
    <section className="hero">
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

export default Hero;
