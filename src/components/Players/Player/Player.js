import React from 'react';

import classes from './Player.css';
import CancelButton from '../../UI/Button/CancelButton';

const Player = (props) => {
    return (
        <div className={classes.PlayerContainer}>
            <button
                onClick={props.clicked}
                className={classes.Player}>{props.user}
            </button>
            <CancelButton cancel={props.deleted}/>
        </div>)

}

export default Player;