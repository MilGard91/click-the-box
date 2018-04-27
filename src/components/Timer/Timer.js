import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';


import * as actions from '../../store/actions/index';

class Timer extends Component {
  componentDidMount() {
    this.interval = setInterval(() => this.props.onTimerTick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <span>{this.props.time}s</span>;
  }
}

const mapStateToProps = state => ({ time: state.time });

const mapDispatchToProps = dispatch => ({ onTimerTick: () => dispatch(actions.timerTick()) });

Timer.propTypes = {
  time: PropsTypes.number.isRequired,
  onTimerTick: PropsTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
