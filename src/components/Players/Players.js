import React from 'react';
import PropTypes from 'prop-types';

import classes from './Players.css';
import CancelButton from '../UI/Button/CancelButton';

const Players = (props) => {
  const playerList = props.players.map((el, i) => (
    <div className={classes.PlayerContainer} key={el}>
      <button
        onClick={() => props.select(el, i)}
        className={classes.Player}
      > {el}
      </button>
      <CancelButton cancel={() => props.delete(el, i)} />
    </div>
  ));
  return (
    <div className={classes.Players}>
      {playerList}
    </div>
  );
};

Players.propTypes = {
  players: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Players;
