import React from 'react';

import classes from './Score.css'

const Score = (props) => {
    let bestTime = props.time===-Infinity? '/' : props.time
    return <tr className={classes.Score} onClick={props.clicked}><td>{props.lvl}</td><td>{bestTime}s</td><td>{props.played}</td></tr> ;
}

export default Score;