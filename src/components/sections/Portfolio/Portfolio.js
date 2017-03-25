import React from 'react';
import TechIcon from '../../TechIcon/TechIcon';
import rails from '../../../assets/icons/rails.svg';
import nodejs from '../../../assets/icons/nodejs-icon.svg';
import react from '../../../assets/icons/react.svg';
import mongoDB from '../../../assets/icons/mongoDB.svg';
import babel from '../../../assets/icons/babel.svg';
import redux from '../../../assets/icons/redux.svg';
import pokemanGo from '../../../assets/gifs/pokeman-go-sm.gif';
import findPet from '../../../assets/gifs/find-pet-sm.gif';
import twitterScout from '../../../assets/gifs/twitter-scout-sm.gif';
import snippet from '../../../assets/gifs/snippet-sm.gif';
import awesome from '../../../assets/gifs/awesome-sm.gif';

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
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Pokeman GO</h3>
          </div>
          <div className="icons-container">
            <TechIcon title="Ruby on Rails" source={rails} />
          </div>
        </div>
        <div className="bottom-container">
          <p>The winning project of the weekend-long Comedy Hack Day
             Vancouver Hack-a-thon. This Pokemon parody web app allows
              users to take pictures of their friends and use real facial
               recognition software to determine which type of Pokeman
                they caught.</p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={twitterScout} alt="Twitter Scout" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Twitter Scout</h3>
          </div>
          <div className="icons-container">
            <TechIcon title="NodeJS" source={nodejs} />
            <TechIcon title="React" source={react} />
            <TechIcon title="Redux" source={redux} />
            <TechIcon title="Babel" source={babel} />
            <TechIcon title="MongoDB" source={mongoDB} />
          </div>
        </div>
        <div className="bottom-container">
          <p>A Twitter manager using universal routing /
           Javascript. Pages are generated and rendered
            dynamically on the server using the same code
             as the client. The client loads server rendered
              markup while the bundle is downloading. It
               also allows search engines to crawl the server
                rendered pages.
          </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={findPet} alt="Find My Pet" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Find My Pet</h3>
          </div>
          <div className="icons-container">
            <TechIcon title="Ruby on Rails" source={rails} />
          </div>
        </div>
        <div className="bottom-container">
          <p>A web app designed to help people report lost and
             found pets. The app uses an AJAX front end with
              Ruby on Rails for the back end. The project was
               created over the course of a weekend with a team
                of 8 members in conjuction with Envisioning
                 Lab&apos;s Test Tube program.
          </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={snippet} alt="Code Snippets" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Code Snippets</h3>
          </div>
          <div className="icons-container">
            <TechIcon title="Ruby on Rails" source={rails} />
          </div>
        </div>
        <div className="bottom-container">
          <p>A Rails app that allows users to save snippets
             of code from 23 different languages. The app
            uses an embedded javascript syntax highlighting
           editor ( <a target="_blank" rel="noreferrer noopener" href="https://ace.c9.io">Ace</a> ). </p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={awesome} alt="Awesome Answers" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Awesome Answers</h3>
          </div>
          <div className="icons-container">
            <TechIcon title="Ruby on Rails" source={rails} />
          </div>
        </div>
        <div className="bottom-container">
          <p>This is a simple Question & Answer web app built on
             Rails. An API is implemented as well. Some of the
              more interesting gems used include:
               omniauth-twitter, fog, carrierwave,
                active_model_serializers, cancancan and
                 simple_form.</p>
        </div>
      </div>
    </div>
  );
};
