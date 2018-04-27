import React from 'react';
import PropTypes from 'prop-types';

import classes from './Player.css';
import CancelButton from '../../UI/Button/CancelButton';

const Player = props => (
  <div className={classes.PlayerContainer}>
    <button
      onClick={props.clicked}
      className={classes.Player}
    > {props.user}
    </button>
    <CancelButton cancel={props.deleted} />
  </div>);

Player.propTypes = {
  clicked: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
  deleted: PropTypes.func.isRequired,
};

export default Player;
