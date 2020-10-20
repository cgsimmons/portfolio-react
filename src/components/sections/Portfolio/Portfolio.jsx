import React from 'react';
import TechIcon from '../../TechIcon/TechIcon';
import rails from '../../../assets/icons/rails.svg';
import python from '../../../assets/icons/python-5.svg';
import javascript from '../../../assets/icons/javascript.svg';
import nodejs from '../../../assets/icons/nodejs-icon.svg';
import postgresql from '../../../assets/icons/postgresql.svg';
import s3 from '../../../assets/icons/s3.svg';
import lambda from '../../../assets/icons/lambda.svg';
import kubernetes from '../../../assets/icons/kubernetes.svg';
import netlify from '../../../assets/icons/netlify.svg';
import jquery from '../../../assets/icons/jquery.svg';
import sass from '../../../assets/icons/sass.svg';
import tux from '../../../assets/icons/tux.svg';
import java from '../../../assets/icons/java-14.svg';
import android from '../../../assets/icons/android.svg';
import pokemanGo from '../../../assets/gifs/pokeman-go.gif';
import findPet from '../../../assets/gifs/find-pet.gif';
import cview from '../../../assets/gifs/cview.gif';
import drinkKorea from '../../../assets/gifs/drink-korea.gif';
import decisionMaker from '../../../assets/images/alexa_decisionmaker.jpg';
import serenadeMe from '../../../assets/images/alexa_serenademe.jpg';
import kubeDeploy from '../../../assets/images/kube-deploy-chart.jpg';
import pypi from '../../../assets/images/pypi.jpg';
import covidGraph from '../../../assets/images/covid-graph.jpg';

import './Portfolio.scss';

export default () => (
  <div id="Portfolio" className="section">
    <h2 className="section-title">Portfolio</h2>
    <div className="inner-container">
      <div className="img-container">
        <img src={kubeDeploy} alt="Kubernetes Deploy" />
      </div>
      <div className="middle-container">
        <div className="title-container">
          <h3 className="subsection-title">Kubernetes Deploy</h3>
        </div>
        <div className="subtitle-container">
          <div className="icons-container">
            <TechIcon title="Python" source={python} />
            <TechIcon title="Kubernetes" source={kubernetes} />
          </div>
          <div className="links-container">
            <span className="link inactive">LIVE</span>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/adgorithmics-inc/kubernetes-deploy"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          An application to automate deployment of project releases on
          Kubernetes. The application is designed to be run locally or as a
          Kubernetes job. It supports deployment/cronjob image updates, database
          migration job triggers, trello list cleanup, release notification
          email and Slack progress messages.
        </p>
      </div>
    </div>
    <div className="inner-container">
      <div className="img-container">
        <img src={pypi} alt="PyPI Server Helm Chart" />
      </div>
      <div className="middle-container">
        <div className="title-container">
          <h3 className="subsection-title">PyPI Server - Helm</h3>
        </div>
        <div className="subtitle-container">
          <div className="icons-container">
            <TechIcon title="Python" source={python} />
            <TechIcon title="Kubernetes" source={kubernetes} />
          </div>
          <div className="links-container">
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://hub.helm.sh/charts/cgsimmons/pypi-server"
            >
              <span>LIVE</span>
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cgsimmons/charts/tree/master/pypi-server"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          A helm chart to install a high availability PyPI server on Kubernetes.
          Supported features include autoscaling, ingress, shared ReadWriteMany
          persistent volume along with a high amount of configurability.
        </p>
      </div>
    </div>
    <div className="inner-container">
      <div className="img-container">
        <img src={covidGraph} alt="Covid-Graph" />
      </div>
      <div className="middle-container">
        <div className="title-container">
          <h3 className="subsection-title">Covid-Graph</h3>
        </div>
        <div className="subtitle-container">
          <div className="icons-container">
            <TechIcon title="NodeJS" source={nodejs} />
            <TechIcon title="AWS Lambda" source={lambda} />
            <TechIcon title="Netlify" source={netlify} />
          </div>
          <div className="links-container">
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://covid-graph.cgsimmons.dev"
            >
              <span>LIVE</span>
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cgsimmons/covid-graph"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          A NodeJS api for retrieving COVID related data in a terminal friendly
          way. Setup using standard NodeJS routes that are then served as a
          stateless lambda service via a combination of netlify-lambda and
          serverless-http libraries.
        </p>
      </div>
    </div>
    <div className="inner-container">
      <div className="img-container">
        <img src={decisionMaker} alt="Alexa Make Decision Skill" />
      </div>
      <div className="middle-container">
        <div className="title-container">
          <h3 className="subsection-title">DecisionMaker</h3>
        </div>
        <div className="subtitle-container">
          <div className="icons-container">
            <TechIcon title="Javascript" source={javascript} />
            <TechIcon title="AWS Lambda" source={lambda} />
          </div>
          <div className="links-container">
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.amazon.com/dp/B072JSNT7N"
            >
              <span>LIVE</span>
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cgsimmons/alexa-skill-decision-maker"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          This is a skill to allow Amazon&apos;s Alexa voice recognition service
          to help users make tough choices. Can&apos;t decide whether to have
          Chinese or Italian food for dinner? Ask Alexa. Built using
          Amazon&apos;s Lambda service and the Alexa Skill SDK.{' '}
        </p>
      </div>
    </div>
    <div className="inner-container">
      <div className="img-container">
        <img src={serenadeMe} alt="Alexa Serenade Me Skill" />
      </div>
      <div className="middle-container">
        <div className="title-container">
          <h3 className="subsection-title">SerenadeMe</h3>
        </div>
        <div className="subtitle-container">
          <div className="icons-container">
            <TechIcon title="Javascript" source={javascript} />
            <TechIcon title="AWS Lambda" source={lambda} />
          </div>
          <div className="links-container">
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://www.amazon.com/dp/B07GWN84C2"
            >
              <span>LIVE</span>
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/cgsimmons/serenade_me"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          This Alexa skill allows users to request Alexa to read back song
          lyrics. It utilizes two public APIs to retrieve song and lyrics data,
          then parses results in a way that Alexa can easily read back to the
          user, often with comical results.
        </p>
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
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/EMSL-MSC/cview/blob/master/scripts/nstat.py"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          Cview is a 3D graphics engine developed by Pacific Northwest National
          Laboratories for displaying graphically represented cluster
          performance data. It also includes a data management library for
          representing groups of related data. My roles involved creating
          data-mining Python scripts to generate cluster analytical data.
        </p>
      </div>
    </div>
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
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="http://www.drinkkorea.catstonguesoft.com/"
            >
              <span>LIVE</span>
            </a>
            <span className="link inactive">SOURCE</span>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          An Android mobile app that teaches users Korean drinking games and
          songs. The app was developed natively with Android Studio. I was
          responsible for all of the software development aspects of the app
          while my partner created the image assets, game details, and design
          elements.
        </p>
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
            <TechIcon title="AWS S3" source={s3} />
            <TechIcon title="PostgreSQL" source={postgresql} />
          </div>
          <div className="links-container">
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://pokeman-go.herokuapp.com"
            >
              <span>LIVE</span>
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/blb451/pokeman-go"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          The winning project of the weekend-long{' '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.facebook.com/chdyvr"
          >
            Comedy Hack Day Vancouver
          </a>{' '}
          hack-a-thon. This Pokemon parody web app allows users to take pictures
          of their friends and use real facial recognition software (
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://www.faceplusplus.com"
          >
            Face++
          </a>{' '}
          ) to determine which type of Pokeman they caught.
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
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://findmypet-team1.herokuapp.com"
            >
              <span>LIVE</span>
            </a>
            <a
              className="link"
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/FindMyPetAppGroup1/spca-team1"
            >
              <span>SOURCE</span>
            </a>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <p>
          A web app designed to help people report lost and found pets. The app
          uses an AJAX front end with Ruby on Rails for the back end. The
          project was created over the course of a weekend with a team of 8
          members in conjuction with Envisioning Lab&apos;s Test Tube program.
        </p>
      </div>
    </div>
  </div>
);
