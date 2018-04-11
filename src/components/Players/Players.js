import React from 'react';

import classes from './Players.css';
import Player from './Player/Player';

const Players = (props) => {
    let playerList;

        playerList = props.players.map((el, i) => (
            <Player 
            key={el} 
            user={el}
            clicked={()=>props.select(el, i)}
            deleted={()=> props.delete(el,i)} />
        ))
    return (
        <div className = {classes.Players}>
            {playerList}
        </div>
    )
}

export default Players;