import React from 'react';
<<<<<<< HEAD
=======
import PropTypes from 'prop-types';
>>>>>>> origin/samerbuna-finalcode
import Header from './Header';
import ContestList from './ContestList';
import Contest from './Contest';
import * as api from '../api';
<<<<<<< HEAD
import PropTypes from 'prop-types';
=======
>>>>>>> origin/samerbuna-finalcode

const pushState = (obj, url) =>
  window.history.pushState(obj, '', url);

const onPopState = handler => {
  window.onpopstate = handler;
};

class App extends React.Component {
<<<<<<< HEAD

  static propTypes = {
    initialData: PropTypes.object.isRequired,
  };

  state = this.props.initialData;

=======
  static propTypes = {
    initialData: PropTypes.object.isRequired
  };
  state = this.props.initialData;
>>>>>>> origin/samerbuna-finalcode
  componentDidMount() {
    onPopState((event) => {
      this.setState({
        currentContestId: (event.state || {}).currentContestId
      });
    });
<<<<<<< HEAD

=======
>>>>>>> origin/samerbuna-finalcode
  }
  componentWillUnmount() {
    onPopState(null);
  }
<<<<<<< HEAD

=======
>>>>>>> origin/samerbuna-finalcode
  fetchContest = (contestId) => {
    pushState(
      { currentContestId: contestId },
      `/contest/${contestId}`
    );
    api.fetchContest(contestId).then(contest => {
      this.setState({
        currentContestId: contest._id,
        contests: {
          ...this.state.contests,
          [contest._id]: contest
        }
      });
    });
  };
<<<<<<< HEAD

=======
>>>>>>> origin/samerbuna-finalcode
  fetchContestList = () => {
    pushState(
      { currentContestId: null },
      '/'
    );
    api.fetchContestList().then(contests => {
      this.setState({
        currentContestId: null,
        contests
      });
    });
  };
<<<<<<< HEAD

  fetchNames = (nameIds) => {
    if(nameIds.length === 0) {
=======
  fetchNames = (nameIds) => {
    if (nameIds.length === 0) {
>>>>>>> origin/samerbuna-finalcode
      return;
    }
    api.fetchNames(nameIds).then(names => {
      this.setState({
        names
      });
    });
  };
<<<<<<< HEAD

  pageHeader() {
    if(this.state.currentContestId) {
      return this.currentContest().contestName;
    }
    return 'Naming Contest';
  }

  lookUpName = (nameId) => {
    if(!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...' //can be a animated loader
      };  
    }
    return this.state.names[nameId];
  }

  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }

=======
  currentContest() {
    return this.state.contests[this.state.currentContestId];
  }
  pageHeader() {
    if (this.state.currentContestId) {
      return this.currentContest().contestName;
    }

    return 'Naming Contests';
  }
  lookupName = (nameId) => {
    if (!this.state.names || !this.state.names[nameId]) {
      return {
        name: '...'
      };
    }
    return this.state.names[nameId];
  };
>>>>>>> origin/samerbuna-finalcode
  addName = (newName, contestId) => {
    api.addName(newName, contestId).then(resp =>
      this.setState({
        contests: {
          ...this.state.contests,
          [resp.updatedContest._id]: resp.updatedContest
        },
        names: {
          ...this.state.names,
          [resp.newName._id]: resp.newName
        }
      })
<<<<<<< HEAD
      )
      .catch(console.error);
  };

  currentContent() {
    if(this.state.currentContestId) {
      return <Contest 
              contestListClick={this.fetchContestList}
              fetchNames={this.fetchNames}
              lookUpName={this.lookUpName}
              addName = {this.addName}
              {...this.currentContest()} />;
    }
=======
    )
    .catch(console.error);
  };
  currentContent() {
    if (this.state.currentContestId) {
      return <Contest
               contestListClick={this.fetchContestList}
               fetchNames={this.fetchNames}
               lookupName={this.lookupName}
               addName={this.addName}
               {...this.currentContest()} />;
    }

>>>>>>> origin/samerbuna-finalcode
    return <ContestList
            onContestClick={this.fetchContest}
            contests={this.state.contests} />;
  }
<<<<<<< HEAD

=======
>>>>>>> origin/samerbuna-finalcode
  render() {
    return (
      <div className="App">
        <Header message={this.pageHeader()} />
        {this.currentContent()}
      </div>
    );
  }
}

export default App;
