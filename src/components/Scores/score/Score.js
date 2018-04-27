import React from 'react';
import PropTypes from 'prop-types';

import classes from './Score.css';

const Score = (props) => {
  const bestTime = props.time === -Infinity ? '/' : props.time;
  return <tr className={classes.Score} onClick={props.clicked}><td>{props.lvl}</td><td>{bestTime}s</td><td>{props.played}</td></tr>;
};

Score.propTypes = {
  time: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
  lvl: PropTypes.number.isRequired,
  played: PropTypes.number.isRequired,
};

export default Score;
