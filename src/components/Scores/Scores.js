import React from 'react';
import PropTypes from 'prop-types';

import classes from './Scores.css';
import Score from './score/Score';

const Scores = (props) => {
  const scoreList = props.list.map((el, i) => (
    <Score
      key={i + 1}
      lvl={i + 1}
      time={(Math.min(...el) !== '-Infinity') ? Math.min(...el) : ''}
      played={el.length}
      clicked={() => props.clicked(i + 1)}
    />));
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

Scores.propTypes = {
  list: PropTypes.arrayOf(PropTypes.array).isRequired,
};

export default Scores;
