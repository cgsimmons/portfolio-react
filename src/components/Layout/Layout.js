import React from 'react';
import NavBar from '../NavBar/NavBar';
import './style.css';

export default (props) => {
  return (

    <div className="app-container">
      <header />
      <div className="app-body">
        <NavBar />
        <div className="app-content">
          {props.children}
        </div>
      </div>
      <footer />
    </div>
  );
};
