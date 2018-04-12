import React from 'react';

import classes from './Form.css';
import Button from '../Button/Button';

const Form = (props) => (
    <form className={classes.Form} onSubmit={props.submit}>
        <input
        pattern="^[a-zA-Z0-9-_\.]{1,10}$"
        title = "YOU CAN ONLY USE A-Z, 0-9 AND - _ ."
        type="text"
        className={classes.Input} 
        placeholder="USERNAME"
        onChange={props.changed} /> 
        <Button btnType={"Win"} clicked={props.clicked}>CREATE PLAYER</Button>
    </form>
);

export default Form;