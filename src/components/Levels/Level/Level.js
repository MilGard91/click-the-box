import React from 'react';

import classes from './Level.css';

const Level = (props) => (
    <button onClick={props.clicked} className={classes.Level}>{props.lvl}</button>
);

export default Level;
