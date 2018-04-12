import React from 'react';

import classes from './Scores.css';
import Score from './score/Score';

const Scores = (props) => {
    const scoreList = props.list.map((el, i) => (
        <Score 
        key={i + 1} 
        lvl={i + 1} 
        time={(Math.min(...el) !== '-Infinity') ? Math.min(...el) : ''} 
        played={el.length} 
        clicked={() => props.clicked(i+1)}/>
    )
    );
    return (
        <div className={classes.Scores}>
            <table className={classes.ScoreTable}>
                <tbody>
                    <tr>
                        <th>LEVEL</th>
                        <th>BEST TIME</th>
                        <th>COMPLITED</th>
                    </tr>
                    {scoreList}
                </tbody>
            </table>

        </div>
    );
};

export default Scores;