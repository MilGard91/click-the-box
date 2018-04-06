import React from 'react';

import classes from './Box.css';

const Box = (props) => {

    const boxClasses = [classes.Box]
    if (props.active) {
        boxClasses.push(classes.BoxActivated)
    }
    if (props.next) {
        boxClasses.push(classes.BoxNext);
    }
    if (props.must) {
        boxClasses.push(classes.BoxMust)
    }
    return (
        <div
            className={boxClasses.join(' ')}
            row={props.row}
            col={props.col}
            onClick={() => { props.clicked(props.row, props.col) }}>
        </div>
    )
}


export default Box;