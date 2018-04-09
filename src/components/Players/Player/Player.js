import React from 'react';

import classes from './Player.css';

const Player = (props) => {
    return (
        <button onClick={props.clicked} className={classes.Player}>{props.user}</button>
        )
}

export default Player;