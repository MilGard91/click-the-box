import React from 'react';

import classes from './Levels.css';
import Level from './Level/Level';

const Levels = (props) => {

    const levelPicker = props.levels.map((el, i) => (
        <Level 
        lvl={i+1} 
        key={'lvl'+ i} 
        clicked={() => props.lvlclicked(i+1)}/>
    ));
    levelPicker.push(<Level 
        lvl={levelPicker.length+1} 
        key={levelPicker.length+2} 
        clicked={() => props.lvlclicked(levelPicker.length)}/>)
    return (
        <div className={classes.Levels}>
            {levelPicker}
        </div>
    );
}

export default Levels;