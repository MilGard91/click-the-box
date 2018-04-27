import React from 'react';
import PropTypes from 'prop-types';

import classes from './Players.css';
import Player from './Player/Player';

const Players = (props) => {
  const playerList = props.players.map((el, i) => (
    <Player
      key={el}
      user={el}
      clicked={() => props.select(el, i)}
      deleted={() => props.delete(el, i)}
    />
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
