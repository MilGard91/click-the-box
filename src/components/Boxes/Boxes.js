import React from 'react';

import Box from './Box/Box';
import classes from './Boxes.css';

const boxes = (props) => {
    let fields = [];
    for (let i = 0; i < 10; i++) {
        fields.push([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    }
    const searchForArray = (haystack, needle) => {
        let i, j, current;
        for (i = 0; i < haystack.length; i++) {
            if (needle.length === haystack[i].length) {
                current = haystack[i];
                for (j = 0; j < needle.length && needle[j] === current[j]; ++j);
                if (j === needle.length)
                    return true;
            }
        }
        return false;
    }

    const fieldsBoard = fields.map((i, j) => (
        i.map(z => (
            searchForArray(props.active, [j, z]) ?
                <Box active key={j + '-' + z} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
                searchForArray(props.next, [j, z]) ?
                    <Box next key={j + '-' + z} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
                    searchForArray(props.must, [j, z]) ?
                        <Box must key={j + '-' + z} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} /> :
                        <Box key={j + '-' + z} row={j} col={z} clicked={(x, y) => (props.clicked(x, y))} />
        ))
    ));
    return (
        <div className={classes.Boxes}>
            {fieldsBoard}
        </div>);
};
export default boxes;