import React from 'react';
import PropTypes from 'prop-types';

import classes from './Chart.css';

const chart = (props) => {
  const arr = [...props.times];
  const newArr = [];
  for (let i = arr.length - 1; i > 0; i--) {
    newArr.push(arr[i] - arr[i - 1]);
  }
  newArr.push(arr[0]);
  newArr.reverse();
  const yPoint = Math.max(...newArr) !== 0 ? Math.floor(160 / Math.max(...newArr)) : 0;
  const xPoint = Math.floor(250 / newArr.length);

  const xPoints = newArr.map((el, i) => (
    <line key={`xGridPoints  ${i}`} x1={(40 + ((i + 1) * xPoint)).toString()} y1="178" x2={(40 + ((i + 1) * xPoint)).toString()} y2="182" />
  ));
  const yPoints = [];
  for (let i = 1; i <= Math.max(...newArr); i++) {
    yPoints.push(<line
      key={`yGridPoints ${i}`}
      x1="38"
      y1={(180 - (i * yPoint)).toString()}
      x2="42"
      y2={(180 - (i * yPoint)).toString()}
    />);
  }
  const clickPoints = newArr.map((el, i) => (
    <circle
      key={`dot ${i}`}
      cx={(40 + ((i + 1) * xPoint)).toString()}
      cy={(180 - (el * yPoint)).toString()}
      r="3"
    />));
  const clickLines = [];
  for (let i = 0; i <= newArr.length - 1; i++) {
    if (i === 0) {
      clickLines.push(<line
        key={`key ${i}`}
        x1="40"
        y1="180"
        x2={((40 + ((i + 1) * xPoint))).toString()}
        y2={(180 - (newArr[i] * yPoint)).toString()}
      />);
    } else {
      clickLines.push(<line
        key={`line ${i}`}
        x1={(40 + (i * xPoint)).toString()}
        y1={(180 - (newArr[i - 1] * yPoint)).toString()}
        x2={(40 + ((i + 1) * xPoint)).toString()}
        y2={(180 - (newArr[i] * yPoint)).toString()}
      />);
    }
  }

  const xLabels = [];
  for (let i = 1; i <= newArr.length; i++) {
    xLabels.push(<text key={`xLabel ${i}`} x={40 + (i * xPoint)} y="195">{i}</text>);
  }
  const yLabels = [];
  for (let i = 1; i <= Math.max(...newArr); i++) {
    yLabels.push(<text key={`yLabel ${i}`} x="30" y={185 - (i * yPoint)} >{i}</text>);
  }
  return (
    <svg width="310px" height="220px" onClick={props.clicked}>
      <g className={classes.Grid}>
        <line x1="40" y1="180" x2="305" y2="180" />
        <line x1="40" y1="15" x2="40" y2="180" />
        {xPoints}
        {yPoints}
      </g>
      <g className={classes.Click}>
        {clickPoints}
      </g>
      <g className={classes.Lines}>
        {clickLines}
      </g>
      <g className={classes.Labels}>
        <text x="5" y="110" transform="rotate(90 10,110)">SECONDS</text>
        <text x="150" y="210">CLICK</text>
        <text x="30" y="195">0</text>
        {xLabels}
        {yLabels}
      </g>
    </svg>

  );
};

chart.propTypes = {
  times: PropTypes.arrayOf(PropTypes.number).isRequired,
  clicked: PropTypes.func.isRequired,
};

export default chart;
