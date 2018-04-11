import React from 'react';

import classes from './Levels.css';
import Level from './Level/Level';

const Levels = (props) => {

    const levelPicker = []
    for (let i=1; i<= props.levels; i++){
        levelPicker.push (
            <Level
            lvl={i}
            key= {i}
            clicked={()=>props.lvlclicked(i)} />
        )
    }
    return (
        <div className={classes.Levels}>
            {levelPicker}
        </div>
    );
}

export default Levels;