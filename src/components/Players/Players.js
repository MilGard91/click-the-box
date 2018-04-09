import React from 'react';

import classes from './Players.css';
import Player from './Player/Player';

const Players = (props) => {
    let playerList;

        playerList = props.players.map(el => (
            <Player key={el} user={el[0]} clicked={()=>props.select(el[0])} />
        ))
    return (
        <div className = {classes.Players}>
            {playerList}
        </div>
    )
}

export default Players;