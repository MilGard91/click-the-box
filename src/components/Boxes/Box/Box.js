import React from 'react';

import classes from './Box.css';

const Box = (props) => {

    const boxClasses = [classes.Box]
    switch (props.boxtype) {
        case 'active':
            boxClasses.push(classes.BoxActivated);
            break;
        case 'must':
            boxClasses.push(classes.BoxMust);
            break;
        case 'next':
            boxClasses.push(classes.BoxNext);
            break;
        case 'flaged':
            boxClasses.push(classes.BoxFlaged);
            break;
        default:
            break;
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