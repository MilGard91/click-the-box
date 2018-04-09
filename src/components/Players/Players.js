import React from 'react';

import classes from './Players.css';
import Player from './Player/Player';

const Players = (props) => {
    const playerList = props.players.map(el => (
        <Player key={el} user={el} clicked={props.choose} />
    ))
    return (
        <div className = {classes.Players}>
            {playerList}
        </div>
    )
}

export default Players;