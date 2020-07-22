import React from 'react';
import TechIcon from '../../TechIcon/TechIcon';
import bigquery from '../../../assets/icons/bigquery.svg';
import ruby from '../../../assets/icons/ruby.svg';
import python from '../../../assets/icons/python-5.svg';
import javascript from '../../../assets/icons/javascript.svg';
import typescript from '../../../assets/icons/typescript.svg';
import golang from '../../../assets/icons/golang.svg';
import java from '../../../assets/icons/java-14.svg';
import cplusplus from '../../../assets/icons/c.svg';
import sass from '../../../assets/icons/sass.svg';
import graphql from '../../../assets/icons/graphql.svg';
import apollo from '../../../assets/icons/apollo.svg';
import kubernetes from '../../../assets/icons/kubernetes.svg';
import django from '../../../assets/icons/django.svg';
import webpack from '../../../assets/icons/webpack.svg';
import rails from '../../../assets/icons/rails.svg';
import nodejs from '../../../assets/icons/nodejs-icon.svg';
import flask from '../../../assets/icons/flask.svg';
import react from '../../../assets/icons/react.svg';
import unity from '../../../assets/icons/unity.svg';
import jquery from '../../../assets/icons/jquery.svg';
import android from '../../../assets/icons/android.svg';
import mysql from '../../../assets/icons/mysql.svg';
import postgresql from '../../../assets/icons/postgresql.svg';
import mongoDB from '../../../assets/icons/mongoDB.svg';
import docker from '../../../assets/icons/docker-icon.svg';
import aws from '../../../assets/icons/aws.svg';
import gcp from '../../../assets/icons/gcp.svg';
import heroku from '../../../assets/icons/heroku.svg';
import netlify from '../../../assets/icons/netlify.svg';
import babel from '../../../assets/icons/babel.svg';
import redux from '../../../assets/icons/redux.svg';
import circleci from '../../../assets/icons/circleci.svg';
import sentry from '../../../assets/icons/sentry.svg';
import rabbitmq from '../../../assets/icons/rabbitmq.svg';
import redis from '../../../assets/icons/redis.svg';
import vault from '../../../assets/icons/vault.svg';
import tux from '../../../assets/icons/tux.svg';
import './Skills.scss';

export default () => (
  <div id="Skills" className="section">
    <h2 className="section-title">Skills</h2>
    <div className="inner-container">
      <h3 className="subsection-title">Languages</h3>
      <TechIcon title="Python" source={python} />
      <TechIcon title="Javascript" source={javascript} />
      <TechIcon title="Typescript" source={typescript} />
      <TechIcon title="Go" source={golang} />
      <TechIcon title="Ruby" source={ruby} />
      <TechIcon title="Java" source={java} />
      <TechIcon title="C++" source={cplusplus} />
    </div>
    <div className="inner-container">
      <h3 className="subsection-title">Databases</h3>
      <TechIcon title="MySQL" source={mysql} />
      <TechIcon title="PostgreSQL" source={postgresql} />
      <TechIcon title="MongoDB" source={mongoDB} />
      <TechIcon title="BigQuery" source={bigquery} />
    </div>
    <div className="inner-container">
      <h3 className="subsection-title">Frameworks</h3>
      <TechIcon title="React" source={react} />
      <TechIcon title="Django" source={django} />
      <TechIcon title="Flask" source={flask} />
      <TechIcon title="NodeJS" source={nodejs} />
      <TechIcon title="Ruby on Rails" source={rails} />
      <TechIcon title="Apollo" source={apollo} />
      <TechIcon title="GraphQL" source={graphql} />
      <TechIcon title="Redux" source={redux} />
      <TechIcon title="Android" source={android} />
      <TechIcon title="Unity 3d" source={unity} />
      <TechIcon title="jQuery" source={jquery} />
      <TechIcon title="Sass" source={sass} />
    </div>
    <div className="inner-container">
      <h3 className="subsection-title">Development Tools</h3>
      <TechIcon title="Linux" source={tux} />
      <TechIcon title="Kubernetes" source={kubernetes} />
      <TechIcon title="Docker" source={docker} />
      <TechIcon title="Google Cloud Platform" source={gcp} />
      <TechIcon title="Amazon Web Services" source={aws} />
      <TechIcon title="Netlify" source={netlify} />
      <TechIcon title="Heroku" source={heroku} />
      <TechIcon title="Webpack" source={webpack} />
      <TechIcon title="Babel" source={babel} />
      <TechIcon title="CircleCI" source={circleci} />
      <TechIcon title="Sentry" source={sentry} />
      <TechIcon title="RabbitMQ" source={rabbitmq} />
      <TechIcon title="Redis" source={redis} />
      <TechIcon title="Vault" source={vault} />
    </div>
  </div>
);
