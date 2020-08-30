<<<<<<< HEAD
/* eslint-disable linebreak-style */
=======
>>>>>>> origin/samerbuna-finalcode
import axios from 'axios';

export const fetchContest = contestId => {
  return axios.get(`/api/contests/${contestId}`)
<<<<<<< HEAD
    .then(resp => resp.data);
};

export const fetchContestList = () => {
  return axios.get('/api/contests/')
    .then(resp => resp.data.contests);
=======
              .then(resp => resp.data);
};

export const fetchContestList = () => {
  return axios.get('/api/contests')
              .then(resp => resp.data.contests);
>>>>>>> origin/samerbuna-finalcode
};

export const fetchNames = nameIds => {
  return axios.get(`/api/names/${nameIds.join(',')}`)
<<<<<<< HEAD
    .then(resp => resp.data.names);
};

export const addName = (newName, contestId) => {
  return axios.post('/api/names', {newName, contestId})
              .then(resp => resp.data);
}
=======
              .then(resp => resp.data.names);
};

export const addName = (newName, contestId) => {
  return axios.post('/api/names', { newName, contestId })
              .then(resp => resp.data);
};
>>>>>>> origin/samerbuna-finalcode
