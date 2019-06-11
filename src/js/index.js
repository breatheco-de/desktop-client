/* global Raven */
//import react into the bundle
import Raven from 'raven-js';
import React from 'react';
import ReactDOM from 'react-dom';
//include your index.scss file into the bundle
import '../styles/index.scss';
import './utils/icons';
import Layout from './Layout.js';
import packg from '../../package.json';
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
    gtmId: 'GTM-574Z6C5',
    auth: 'HXY0OFiOxShdVVBJHK5sbg',
    preview: 'env-2'
}

TagManager.initialize(tagManagerArgs)



if(process.env.DEBUG == true){
  Raven.config('https://88709bb84c9f42bfbb8fd6d750369e46@sentry.io/1196496').install()

  Raven.setTagsContext({
    environment: process.env.ENVIRONMENT,
    version: packg.version
  });
}

console.log("BreatheCode Platform",packg.version, process.env.ENVIRONMENT, `, debug: ${process.env.DEBUG}`);

ReactDOM.render(
  <Layout />,
  document.getElementById('app')
);