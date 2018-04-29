import React from 'react';

// import Box from './Box/Box';
import classes from './Boxes.css';
import { isItInArray } from '../../Utility';

const boxes = (props) => {
  const fields = [];
  for (let i = 0; i < 10; i++) {
    fields.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  }
  const fieldsBoard = fields.map((i, j) => (
    i.map((z) => {
      // isItInArray(props.flaged, [j, z]) ?
      //   <Box boxType="flaged" key={`${j} - ${z}`} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
      if (isItInArray(props.active, [j, z])) {
        return (
          <button
            className={[classes.Box, classes.BoxActivated].join(' ')}
            key={`${j} - ${z}`}
            onClick={() => (props.clicked(j, z))}
          />
        );
      }
      if (isItInArray(props.next, [j, z])) {
        return (
          <button
            className={[classes.Box, classes.BoxNext].join(' ')}
            key={`${j} - ${z}`}
            onClick={() => (props.clicked(j, z))}
          />
        );
      }
      if (isItInArray(props.must, [j, z])) {
        return (
          <button
            className={[classes.Box, classes.BoxMust].join(' ')}
            key={`${j} - ${z}`}
            onClick={() => (props.clicked(j, z))}
          />
        );
      }
      return (
        <button
          className={classes.Box}
          key={`${j} - ${z}`}
          onClick={() => (props.clicked(j, z))}
        />);
    })
  ));
  return (
    <div className={classes.Boxes}>
      {fieldsBoard}
    </div>);
};
export default boxes;
