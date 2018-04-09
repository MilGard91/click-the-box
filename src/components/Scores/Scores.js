import React from 'react';

import classes from './Scores.css';
import Score from './score/Score';

const Scores = (props) => {
    const scoreList = props.list.map((el, i) => (
        <Score key= {i+1} lvl={i + 1} time={(Math.max(...el)!=='-Infinity')? Math.max(...el) : ''} played={el.length} />
    )
    );
    return (
        <div className={classes.Scores}>
            {scoreList}
        </div>
    );
};

export default Scores;