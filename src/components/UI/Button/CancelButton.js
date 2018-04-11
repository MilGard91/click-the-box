import React from 'react';

import classes from './CancelButton.css';

const cancelButton = (props) => {
    return (
        <button onClick={props.cancel} className={classes.CancelButton}>x</button>
    );
}


export default cancelButton;