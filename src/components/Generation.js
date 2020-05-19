import React, { Component } from 'react';
import { connect } from 'react-redux';

class Generation extends Component {
  render(){
    return (
      <div className="generation">
        Generations: {this.props.generation}
      </div>
    );
  }
}

const mapStateToProps = ({generation}) => {
  return { generation: generation }
};

export default connect(mapStateToProps)(Generation);
