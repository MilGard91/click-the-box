import React from 'react';

import classes from './Players.css';
import Player from './Player/Player';

const Players = (props) => {
    let playerList;

        playerList = props.players.map((el, i) => (
            <Player 
            key={el[0]} 
            user={el[0]}
            clicked={()=>props.select(el[0], i)}
            deleted={()=> props.delete(el[0],i)} />
        ))
    return (
        <div className = {classes.Players}>
            {playerList}
        </div>
    )
}

export default Players;