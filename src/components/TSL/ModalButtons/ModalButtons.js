import React from 'react';

import classes from './ModalButtons.css'

const modalButtons = (props) => {
    return (
        <div className={classes.ModalButtons}>
            <button className={classes.Buttons} onClick = {props.clicked}>TOP SCORES</button>
        </div>
    )
}



export default modalButtons;