import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-text-container">
        <div className="search-container">
          <form className="myform">
            <input type="text" placeholder="Search for articles..." />
            <button type="submit">Search</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
