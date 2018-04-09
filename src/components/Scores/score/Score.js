import React from 'react';

import classes from './Score.css'

const Score = (props) => {
    let bestTime = props.time===-Infinity? '/' : props.time
    return <p className={classes.Score}><span>Level {props.lvl}</span><span>{bestTime}</span><span>{props.played}</span></p> ;
}

export default Score;