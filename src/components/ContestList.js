<<<<<<< HEAD
/* eslint-disable linebreak-style */
=======
>>>>>>> origin/samerbuna-finalcode
import React from 'react';
import PropTypes from 'prop-types';
import ContestPreview from './ContestPreview';

const ContestList = ({ contests, onContestClick }) => (
  <div className="ContestList">
    {Object.keys(contests).map(contestId =>
<<<<<<< HEAD
      <ContestPreview 
        key={contestId} 
=======
      <ContestPreview
        key={contestId}
>>>>>>> origin/samerbuna-finalcode
        onClick={onContestClick}
        {...contests[contestId]} />
    )}
  </div>
);

ContestList.propTypes = {
  contests: PropTypes.object,
  onContestClick: PropTypes.func.isRequired,
};

<<<<<<< HEAD
export default ContestList;
=======
export default ContestList;
>>>>>>> origin/samerbuna-finalcode
