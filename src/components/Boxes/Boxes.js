import React from 'react';

import Box from './Box/Box';
import classes from './Boxes.css';
import { isItInArray } from '../../Utility';

const boxes = (props) => {
  const fields = [];
  for (let i = 0; i < 10; i++) {
    fields.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  const fieldsBoard = fields.map((i, j) => (
    i.map(z => (
      // isItInArray(props.flaged, [j, z]) ?
      //   <Box boxType="flaged" key={`${j} - ${z}`} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
      isItInArray(props.active, [j, z]) ?
        <Box boxType="active" key={`${j} - ${z}`} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
        isItInArray(props.next, [j, z]) ?
          <Box boxType="next" key={`${j} - ${z}`} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
          isItInArray(props.must, [j, z]) ?
            <Box boxType="must" key={`${j} - ${z}`} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
            <Box boxType="" key={`${j} - ${z}`} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} />
    ))
  ));
  return (
    <div className={classes.Boxes}>
      {fieldsBoard}
    </div>);
};
export default boxes;
