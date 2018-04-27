import React from 'react';
import PropTypes from 'prop-types';

import classes from './ModalButtons.css';

const modalButtons = props => (
  <div className={classes.ModalButtons}>
    <button className={props.activated ? classes.Activated : classes.Buttons} onClick={props.clicked}>TOP SCORES</button>
  </div>
);

modalButtons.propTypes = {
  activated: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default modalButtons;
