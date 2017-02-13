import React from 'react';
import NavBar from '../NavBar/NavBar';
import s from './style.css';

export default (props) => {
  return (

    <div className="app-container">
      <header>
        <NavBar />
      </header>
      <div className="app-body">
        <div className="app-content">
          {props.children}
        </div>
      </div>
      <footer />
    </div>
  );
};
