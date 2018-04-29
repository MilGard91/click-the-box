import React from 'react';
import PropTypes from 'prop-types';

import classes from './Scores.css';

const Scores = (props) => {
  const scoreList = props.list.map((el, i) => (
    <tr
      className={classes.Score}
      onClick={() => props.clicked(i + 1)}
      key={i + 1}
    >
      <td>{i + 1}</td>
      <td>{(Math.min(...el) !== -Infinity) ? Math.min(...el) : '/'}s</td>
      <td>{el.length}</td>
    </tr>
  ));
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
