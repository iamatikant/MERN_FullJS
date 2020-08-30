<<<<<<< HEAD
import React, {Component} from 'react';
=======
import React, { Component } from 'react';
>>>>>>> origin/samerbuna-finalcode
import PropTypes from 'prop-types';

class ContestPreview extends Component {
  handleClick = () => {
    this.props.onClick(this.props._id);
  };
  render() {
<<<<<<< HEAD
    return(
=======
    return (
>>>>>>> origin/samerbuna-finalcode
      <div className="link ContestPreview" onClick={this.handleClick}>
        <div className="category-name">
          {this.props.categoryName}
        </div>
        <div className="contest-name">
          {this.props.contestName}
        </div>
      </div>
<<<<<<< HEAD
      
=======
>>>>>>> origin/samerbuna-finalcode
    );
  }
}

ContestPreview.propTypes = {
  _id: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
  contestName: PropTypes.string.isRequired,
<<<<<<< HEAD
  onClick: PropTypes.func.isRequired
=======
  onClick: PropTypes.func.isRequired,
>>>>>>> origin/samerbuna-finalcode
};

export default ContestPreview;
