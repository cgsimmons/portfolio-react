import React from 'react';
import pokemanGo from '../../../assets/images/pokeman-go.png';
import rails from '../../../assets/icons/rails.svg';
import './Portfolio.scss';

export default () => {
  return (
    <div
      id="Portfolio"
      className="section"
    >
      <h2 className="section-title">Portfolio</h2>
      <div className="inner-container">
        <div className="img-container">
          <img src={pokemanGo} alt="Pokeman Go logo" />
        </div>
        <div className="top-container">
          <div className="title-container">
            <h3 className="title">Pokeman GO</h3>
          </div>
          <div className="icons-container">
            <img className="icon" alt="Rails" src={rails} />
          </div>
        </div>
        <div className="content">
          <p>details </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={pokemanGo} alt="Pokeman Go logo" />
        </div>
        <div className="top-container">
          <div className="title-container">
            <h3 className="title">Pokeman GO</h3>
          </div>
          <div className="icons-container">
            <img className="icon" alt="Rails" src={rails} />
          </div>
        </div>
        <div className="content">
          <p>details </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={pokemanGo} alt="Pokeman Go logo" />
        </div>
        <div className="top-container">
          <div className="title-container">
            <h3 className="title">Pokeman GO</h3>
          </div>
          <div className="icons-container">
            <img className="icon" alt="Rails" src={rails} />
          </div>
        </div>
        <div className="content">
          <p>details </p>
        </div>
      </div>
    </div>
  );
};
