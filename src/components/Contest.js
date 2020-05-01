/* eslint-disable linebreak-style */
// eslint-disable-next-line linebreak-style
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contest extends Component {
  componentDidMount() {
    this.props.fetchNames(this.props.nameIds);
  }
  handleSubmit = (event) => {
    event.preventDefault();
    //this.addName(this.refs.newNameInput.value, this.props._id);
    // read the value that the user types
    if(this.refs.newNameInput.value != '') {
      this.props.addName(this.refs.newNameInput.value, this.props._id);
      this.refs.newNameInput.value = '';
    }
    else console.log('No values to insert');
  };
  render() {
    return (
      <div className="Contest">
        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Contest Description</h3>
          </div>
          <div className="panel-body">
            <div className="contest-description">
              {this.props.description}
            </div>
          </div>
        </div>

        <div className="panel panel-default">
          <div className="panel-heading">
            <h3 className="panel-title">Proposed Names</h3>
          </div>
          <div className="panel-body">
            <ul className="list-group">
              {this.props.nameIds.map(nameId =>
                <li key={nameId} className="list-group-item">
                  { this.props.lookUpName(nameId).name }
                </li>
                )}
            </ul>
          </div>
        </div>

        <div className="panel panel-info">
          <div className="panel-heading">
            <h3 className="panel-title">Propose a New Name</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.handleSubmit}>
              <div className="input-group">
                <input type="text" 
                  placeholder="New Name Here..."
                  ref="newNameInput" 
                  className="form-control"  />
                <span className="input-group-btn">
                  <button type="submit" className="btn btn-info">Sumbit</button>
                </span>
              </div>
            </form>
          </div>
        </div>

        <div className="home-link link"
             onClick={this.props.contestListClick}>
          Contest List
        </div>
      </div>
    );
  }
}

Contest.propTypes = {
  _id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  contestListClick: PropTypes.func.isRequired,
  fetchNames: PropTypes.func.isRequired,
  nameIds: PropTypes.array.isRequired,
  lookUpName: PropTypes.func.isRequired,
  addName: PropTypes.func.isRequired,
};

export default Contest;