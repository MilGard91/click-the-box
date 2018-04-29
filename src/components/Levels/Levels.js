import React from 'react';
import PropTypes from 'prop-types';

import classes from './Levels.css';

const Levels = (props) => {
  const levelPicker = [];
  for (let i = 1; i <= props.levels; i++) {
    levelPicker.push(<button key={i} className={classes.Level} onClick={() => props.lvlclicked(i)} >{i}</button>);
  }
  return (
    <div className={classes.Levels}>
      {levelPicker}
    </div>
  );
};

Levels.propTypes = {
  levels: PropTypes.number.isRequired,
  lvlclicked: PropTypes.func.isRequired,
};


export default Levels;
