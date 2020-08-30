import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from './src/components/App';

import config from './config';
import axios from 'axios';

<<<<<<< HEAD
const getApiUrl = (contestId) => {
  if(contestId) {
=======
const getApiUrl = contestId => {
  if (contestId) {
>>>>>>> origin/samerbuna-finalcode
    return `${config.serverUrl}/api/contests/${contestId}`;
  }
  return `${config.serverUrl}/api/contests`;
};

const getInitialData = (contestId, apiData) => {
<<<<<<< HEAD
  if(contestId) {
=======
  if (contestId) {
>>>>>>> origin/samerbuna-finalcode
    return {
      currentContestId: apiData._id,
      contests: {
        [apiData._id]: apiData
      }
    };
  }
  return {
<<<<<<< HEAD
    contests: apiData.contests,
=======
    contests: apiData.contests
>>>>>>> origin/samerbuna-finalcode
  };
};

const serverRender = (contestId) =>
  axios.get(getApiUrl(contestId))
    .then(resp => {
      const initialData = getInitialData(contestId, resp.data);
      return {
        initialMarkup: ReactDOMServer.renderToString(
          <App initialData={initialData} />
        ),
        initialData
      };
    });

export default serverRender;
