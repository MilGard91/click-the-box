import React from 'react';
import PropType from 'prop-types';

import classes from './CancelButton.css';

const cancelButton = props => (
  <button onClick={props.cancel} className={classes.CancelButton}>x</button>
);

cancelButton.propTypes = { cancel: PropType.func.isRequired };

export default cancelButton;
