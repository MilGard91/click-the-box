import React from 'react';
import PropTypes from 'prop-types';

import classes from './Level.css';

const Level = props => (
  <button onClick={props.clicked} className={classes.Level}>{props.lvl}</button>
);

Level.propTypes = {
  clicked: PropTypes.func.isRequired,
  lvl: PropTypes.number.isRequired,
};

export default Level;
