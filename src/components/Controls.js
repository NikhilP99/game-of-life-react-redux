import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomBoard, next, play, pause, clearBoard } from '../actions'
import Button from 'react-bootstrap/Button'


class Controls extends Component {

  componentDidMount(){
    this.props.random();
    this.togglePlay();
  }

  togglePlay(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.pause();
    } else {
      let interval = setInterval(this.props.next,200);
      this.props.play(interval);
    }
  }

  clear(){
    if (this.props.playState.isRunning) {
      clearInterval(this.props.playState.timerId);
      this.props.pause();
    }
      this.props.clear();
  }

  render(){
    return (
      <div className="controls">
        <div className="buttons">
          <Button onClick={() => this.props.random()}>Randomise</Button>
          <Button onClick={() => this.clear()}>Clear</Button>
          <Button onClick={() => this.togglePlay()}>Play</Button>
          <Button onClick={() => this.togglePlay()}>Pause</Button>
          <Button onClick={() => this.props.next()}>Next</Button>
        </div>
      </div>
    );
  }
}


const mapStateToProps = ({playState}) => {
  return { playState };
}

const mapDispatchToProps = (dispatch) => {
  return {
    random: () => dispatch(randomBoard()),
    next: () => dispatch(next()),
    play: (timerId) => dispatch(play(timerId)),
    pause: () => dispatch(pause()),
    clear: () => dispatch(clearBoard())
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(Controls)
