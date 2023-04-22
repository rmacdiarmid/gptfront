import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../../actions';
import './Hero.css';

const Hero = () => {
  const [inputValue, setInputValue] = useState('');
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    e.preventDefault();
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
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
