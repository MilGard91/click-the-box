import React from 'react';

import classes from './Score.css'

const Score = (props) => {
    return <p className={classes.Score}><span>Level {props.lvl}</span><span>{props.time}</span><span>{props.played}</span></p> ;
}

export default Score;