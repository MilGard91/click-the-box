import React from 'react';
import PropTypes from 'prop-types';

import classes from './Levels.css';
import Level from './Level/Level';

const Levels = (props) => {
  const levelPicker = [];
  for (let i = 1; i <= props.levels; i++) {
    levelPicker.push(<Level
      lvl={i}
      key={i}
      clicked={() => props.lvlclicked(i)}
    />);
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
