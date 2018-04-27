import React from 'react';

import PropTypes from 'prop-types';
import classes from './Box.css';


const Box = (props) => {
  const boxClasses = [classes.Box];
  switch (props.boxType) {
    case 'active':
      boxClasses.push(classes.BoxActivated);
      break;
    case 'must':
      boxClasses.push(classes.BoxMust);
      break;
    case 'next':
      boxClasses.push(classes.BoxNext);
      break;
    case 'flaged':
      boxClasses.push(classes.BoxFlaged);
      break;
    default:
      break;
  }
  return (
    <button
      className={boxClasses.join(' ')}
      row={props.row}
      col={props.col}
      onClick={() => { props.clicked(props.row, props.col); }}
    />
  );
};

Box.propTypes = {
  boxType: PropTypes.string.isRequired,
  row: PropTypes.number.isRequired,
  col: PropTypes.number.isRequired,
  clicked: PropTypes.func.isRequired,
};


export default Box;
