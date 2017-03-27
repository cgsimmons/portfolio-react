import React from 'react';
import TechIcon from '../../TechIcon/TechIcon';
import rails from '../../../assets/icons/rails.svg';
import python from '../../../assets/icons/python-5.svg';
import javascript from '../../../assets/icons/javascript.svg';
import nodejs from '../../../assets/icons/nodejs-icon.svg';
import react from '../../../assets/icons/react.svg';
import mongoDB from '../../../assets/icons/mongoDB.svg';
import postgresql from '../../../assets/icons/postgresql.svg';
import babel from '../../../assets/icons/babel.svg';
import redux from '../../../assets/icons/redux.svg';
import webpack from '../../../assets/icons/webpack.svg';
import aws from '../../../assets/icons/aws.svg';
import jquery from '../../../assets/icons/jquery.svg';
import sass from '../../../assets/icons/sass.svg';
import tux from '../../../assets/icons/tux.svg';
import java from '../../../assets/icons/java-14.svg';
import android from '../../../assets/icons/android.svg';
import pokemanGo from '../../../assets/gifs/pokeman-go.gif';
import findPet from '../../../assets/gifs/find-pet.gif';
import twitterScout from '../../../assets/gifs/twitter-scout.gif';
import snippet from '../../../assets/gifs/snippet.gif';
import awesome from '../../../assets/gifs/awesome.gif';
import cview from '../../../assets/gifs/cview.gif';
import drinkKorea from '../../../assets/gifs/drink-korea.gif';
import alexa from '../../../assets/images/alexa.jpg';

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
          <img src={drinkKorea} alt="Drink Korea" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Drink Korea</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Java" source={java} />
              <TechIcon title="Android" source={android} />
            </div>
            <div className="links-container">
              <a className="link" target="_blank" rel="noreferrer noopener" href="http://www.drinkkorea.catstonguesoft.com/"><span>LIVE</span></a>
              <span className="link inactive">SOURCE</span>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>An Android mobile app that teaches users Korean drinking
             games and songs. The app was developed natively with Android
              Studio. I was responsible for all of the software
               development aspects of the app while my partner created
                the image assets, game details, and design elements.</p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={pokemanGo} alt="Pokeman Go logo" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Pokeman GO</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Ruby on Rails" source={rails} />
              <TechIcon title="AWS" source={aws} />
              <TechIcon title="PostgreSQL" source={postgresql} />
            </div>
            <div className="links-container">
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://pokeman-go.herokuapp.com"><span>LIVE</span></a>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/blb451/pokeman-go"><span>SOURCE</span></a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>The winning project of the weekend-long <a target="_blank" rel="noreferrer noopener" href="https://www.facebook.com/chdyvr">Comedy Hack Day
             Vancouver</a> hack-a-thon. This Pokemon parody web app allows
              users to take pictures of their friends and use real facial
               recognition software ( <a target="_blank" rel="noreferrer noopener" href="https://www.faceplusplus.com">Face++</a> ) to determine which type of Pokeman
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
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="NodeJS" source={nodejs} />
              <TechIcon title="React" source={react} />
              <TechIcon title="Redux" source={redux} />
              <TechIcon title="MongoDB" source={mongoDB} />
              <TechIcon title="Babel" source={babel} />
              <TechIcon title="Webpack" source={webpack} />
            </div>
            <div className="links-container">
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://twitter-scout.herokuapp.com"><span>LIVE</span></a>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/cgsimmons/twitter-scout-node"><span>SOURCE</span></a>
            </div>
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
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Ruby on Rails" source={rails} />
              <TechIcon title="jQuery" source={jquery} />
              <TechIcon title="Sass" source={sass} />
              <TechIcon title="PostgreSQL" source={postgresql} />
            </div>
            <div className="links-container">
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://findmypet-team1.herokuapp.com"><span>LIVE</span></a>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/FindMyPetAppGroup1/spca-team1"><span>SOURCE</span></a>
            </div>
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
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Ruby on Rails" source={rails} />
              <TechIcon title="Sass" source={sass} />
              <TechIcon title="PostgreSQL" source={postgresql} />
            </div>
            <div className="links-container">
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://code-snippets-rails.herokuapp.com/"><span>LIVE</span></a>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/cgsimmons/code_snippets"><span>SOURCE</span></a>
            </div>
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
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Ruby on Rails" source={rails} />
              <TechIcon title="AWS" source={aws} />
              <TechIcon title="Sass" source={sass} />
              <TechIcon title="PostgreSQL" source={postgresql} />
            </div>
            <div className="links-container">
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://pokeman-go.herokuapp.com"><span>LIVE</span></a>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/blb451/pokeman-go"><span>SOURCE</span></a>
            </div>
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
      <div className="inner-container">
        <div className="img-container">
          <img src={cview} alt="CVIEW" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">CVIEW</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Python" source={python} />
              <TechIcon title="Linux" source={tux} />
            </div>
            <div className="links-container">
              <span className="link inactive">LIVE</span>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/EMSL-MSC/cview/blob/master/scripts/nstat.py"><span>SOURCE</span></a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>Cview is a 3D graphics engine developed by Pacific Northwest
             National Laboratories for displaying graphically represented
              cluster performance data. It also includes a data management
               library for representing groups of related data. My roles
                involved creating data-mining Python scripts to generate
                 cluster analytical data.</p>
        </div>
      </div>
      <div className="inner-container">
        <div className="img-container">
          <img src={alexa} alt="Alexa Make Decision Skill" />
        </div>
        <div className="middle-container">
          <div className="title-container">
            <h3 className="subsection-title">Alexa Make Decision Skill</h3>
          </div>
          <div className="subtitle-container">
            <div className="icons-container">
              <TechIcon title="Javascript" source={javascript} />
              <TechIcon title="AWS" source={aws} />
            </div>
            <div className="links-container">
              <span className="link inactive">LIVE</span>
              <a className="link" target="_blank" rel="noreferrer noopener" href="https://github.com/cgsimmons/alexa-skill-make-decision"><span>SOURCE</span></a>
            </div>
          </div>
        </div>
        <div className="bottom-container">
          <p>This is a skill to allow Amazon&apos;s Alexa voice
             recognition service to help users make tough choices.
              Can&apos;t decide whether to have Chinese or Italian
               food for dinner? Ask Alexa. Built using Amazon&apos;s Lambda service.</p>
        </div>
      </div>
    </div>
  );
};
